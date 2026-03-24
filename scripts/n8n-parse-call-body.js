/**
 * Reference parser for Handwerker-AI / Twilio webhook body.
 * Copy parseCallBody into an n8n Code node, or require this file in tests.
 *
 * n8n Code node (Webhook receives full item; adjust path to body):
 *   const body = $json.body || $json;
 *   return [{ json: parseCallBody(body) }];
 *
 * Expected transcript lines: "Agent: ..." and "User: ..." (also accepts Assistant:)
 */

function extractSarahNote(transcript) {
  const lines = transcript
    .split(/\n/)
    .filter((l) => /^\s*User:\s*/i.test(l));
  const msgs = lines.map((l) => l.replace(/^\s*User:\s*/i, "").trim());
  const shortFluff =
    /^(ja|ok|okay|danke|danke sehr|tschüss|auf wiedersehen|alles gut|bis gleich|guten tag|hallo|mhm|ja,? bin ich)\b/i;
  const candidates = msgs.filter((m) => {
    if (m.length <= 8) return false;
    if (m.length < 50 && shortFluff.test(m) && !/Rohrbruch|Straße|Problem|Keller|Leck|Wasser/i.test(m))
      return false;
    return true;
  });
  if (!candidates.length) {
    return msgs.filter((m) => m.length > 0).pop() || "See transcript";
  }
  const scored = candidates.map((m) => {
    let score = m.length;
    if (/Rohrbruch|Wasser|Leck|verstopf|Heizung|Keller|Notfall|kaputt|tropf/i.test(m))
      score += 500;
    if (/Straße|Berlin|Bezirk|PLZ|Wohnung/i.test(m)) score += 50;
    return { m, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored[0].m;
}

function cleanAddressForMaps(addr) {
  if (!addr) return "";
  let s = String(addr).trim();
  s = s.replace(/[.,]?\s*Unser\s+Kollege[\s\S]*$/i, "");
  s = s.replace(/[.,]?\s*Unser\b[\s\S]*$/i, "");
  return s.split(/\r?\n/)[0].trim();
}

function parseCallBody(body) {
  const transcript = String(body?.transcript ?? "");
  const t = transcript.replace(/\r\n/g, "\n");

  let customerName = body?.customer_name ?? null;
  let customerAddress = body?.customer_address ?? null;
  let issueType = body?.issue_type ?? null;
  let zipCode = body?.zip_code ?? null;

  if (!customerName) {
    const m =
      t.match(/\bHerr\s+([A-ZÄÖÜ][a-zäöüß]+)\b/) ||
      t.match(/\bFrau\s+([A-ZÄÖÜ][a-zäöüß]+)\b/) ||
      t.match(/\bich\s+bin\s+(?:Herr|Frau)?\s*([A-ZÄÖÜ][a-zäöüß]+)\b/i);
    if (m) {
      const last = m[1];
      const prefix = /\bHerr\s+/.test(m[0]) ? "Herr" : /\bFrau\s+/.test(m[0]) ? "Frau" : "Herr";
      customerName = `${prefix} ${last}`;
    }
  }

  if (!customerAddress) {
    const agentOnly = t
      .split(/\n/)
      .filter((line) => /^Agent:\s*/i.test(line))
      .map((line) => line.replace(/^Agent:\s*/i, "").trim())
      .join(" ");

    let addr =
      agentOnly.match(/Berliner Straße\s*\d+\s+in\s+Schöneberg/i)?.[0] ||
      agentOnly.match(
        /(?:Rohrbruch,\s*)?[A-Za-zäöüÄÖÜß]+weg\s*\d+\s*,\s*Schöneberg/i
      )?.[0] ||
      agentOnly.match(
        /[A-Za-zäöüÄÖÜß]+weg\s*\d+[^.!\n]*Schöneberg/i
      )?.[0] ||
      agentOnly.match(/Straße\s*\d+[^.!?]*?(?:in\s+)?Schöneberg/i)?.[0] ||
      null;

    if (addr) {
      addr = addr.replace(/^Rohrbruch,\s*/i, "").replace(/\s+/g, " ").trim();
      customerAddress = /\bBerlin\b/i.test(addr) ? addr : `${addr}, Berlin`;
    } else {
      const userBlob = (t.match(/User:[^\n]+/gi) || []).join(" ");
      const st = userBlob.match(
        /(?:aus der|in der)\s+([A-ZÄÖÜa-zäöüß.]+(?:\s+Straße)?[^.!\n]*)/i
      );
      if (st) customerAddress = st[1].trim();
    }
  }

  if (!issueType) {
    if (/Rohrbruch/i.test(t)) issueType = "Rohrbruch / Wasserschaden";
    else if (/verstopf/i.test(t)) issueType = "Verstopfung";
    else if (/Heizung/i.test(t)) issueType = "Heizung";
    else if (/Notfall/i.test(t)) issueType = "Notfall";
  }

  const plz = t.match(/\b(10\d{3})\b/);
  if (!zipCode && plz) zipCode = plz[1];

  const addrForDisplay = customerAddress ?? body?.customer_address;
  const mapsQuery = cleanAddressForMaps(addrForDisplay);
  const mapsUrl = mapsQuery
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`
    : "";

  const sarahNote =
    body?.sarah_note ??
    body?.call_summary ??
    extractSarahNote(t);

  const inferred = [];
  if (!body?.customer_name && customerName) inferred.push("customer_name");
  if (!body?.customer_address && customerAddress) inferred.push("customer_address");
  if (!body?.issue_type && issueType) inferred.push("issue_type");
  if (!body?.zip_code && zipCode) inferred.push("zip_code");

  return {
    ...body,
    customer_name: customerName ?? body?.customer_name,
    customer_address: customerAddress ?? body?.customer_address,
    issue_type: issueType ?? body?.issue_type,
    zip_code: zipCode ?? body?.zip_code,
    sarah_note: sarahNote,
    maps_url: mapsUrl,
    _parsed: {
      source: "transcript_fallback",
      inferred_from_transcript: inferred,
    },
  };
}

module.exports = { parseCallBody };

if (require.main === module) {
  const sample = {
    call_id: "call_afa42ef0ad9f5bd3d807ce41f70",
    transcript: `Agent: Einen kleinen Moment, ich bin gleich für Sie da.... was genau ist das Problem?
User: Ja, schönen guten Tag. Ich hab bin Herr Schmidt. Ich aus der Berliner Straße vierundvierzig und ich hab ein Rohrbruch im Keller. 
Agent: Verstehe, Herr Schmidt. In welchem Bezirk sind Sie in der Berliner Straße 44?
Agent: Mhm, okay, könnten Sie mir bitte noch den Bezirk nennen?
User: In Schöneberg. 
Agent: Alles klar, Herr Schmidt aus Berliner Straße 44 in Schöneberg. Sind Sie unter der Nummer erreichbar, von der Sie gerade anrufen?
User: Ja, bin ich. 
Agent: Verstehe, Herr Schmidt. Das ist ein Notfall wegen Rohrbruch im Keller. Ich leite das sofort weiter.
User: Danke sehr. 
Agent: Danke, Herr Schmidt. Unser Kollege meldet sich in 15-30 Minuten bei Ihnen. Noch Fragen?
User: Ja, das ist gut, danke. 
Agent: Ich wünsche Ihnen gute Besserung und einen ruhigen Tag. Auf Wiederhören!
`,
    customer_name: null,
    customer_address: null,
    customer_phone: "+491721871555",
    issue_type: null,
    zip_code: null,
  };
  console.log(JSON.stringify(parseCallBody(sample), null, 2));
}
