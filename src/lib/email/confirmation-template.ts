// Subject, plaintext, and HTML bodies for the waitlist confirmation email.
// All strings server-side only; this module is imported from the route handler
// and never reaches the browser bundle.

export const CONFIRMATION_EMAIL_SUBJECT =
  "Είσαι μέσα στη λίστα του EasyData ✓";

export const CONFIRMATION_EMAIL_TEXT = `Γεια σου,

Είσαι επίσημα στη λίστα αναμονής του EasyData.

Τι σημαίνει αυτό:
- Κρατάμε τη θέση σου με προτεραιότητα όταν ανοίξουμε
- Στους πρώτους 100, κλειδώνουμε €9/μήνα για πάντα (μετά γίνεται €15)
- Πρώτος μήνας δωρεάν
- Καμία κάρτα τώρα

Στόχος μας είναι να ανοίξουμε πριν την 1η Οκτωβρίου 2026, ώστε να έχεις χρόνο να εξοικειωθείς πριν το myDATA γίνει υποχρεωτικό.

Θα σε ειδοποιήσουμε όταν είμαστε έτοιμοι.

—
Δεν θυμάσαι να εγγραφείς; Απάντησε σε αυτό το email.
Πολιτική απορρήτου: https://easydata-jet.vercel.app/privacy
`;

export const CONFIRMATION_EMAIL_HTML = `<!doctype html>
<html lang="el">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light only">
<title>Είσαι μέσα στη λίστα του EasyData</title>
</head>
<body style="margin:0;padding:0;background:#FAF6EE;-webkit-font-smoothing:antialiased;">
<div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:#FAF6EE;opacity:0;">
Είσαι επίσημα στη λίστα αναμονής του EasyData — €9/μήνα κλειδωμένα για τους πρώτους 100.
</div>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#FAF6EE;">
<tr>
<td align="center" style="padding:32px 16px 48px;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px;">
<tr>
<td style="padding:0 4px 24px;font-family:Georgia,'EB Garamond',serif;font-size:22px;font-weight:500;letter-spacing:-0.02em;color:#1A1612;">
easydata<span style="color:#B8442A;">.</span>
</td>
</tr>
<tr>
<td style="background:#FFFFFF;border:1px solid #E8DFC9;border-radius:16px;padding:40px 32px;">
<h1 style="margin:0 0 24px;font-family:Georgia,'EB Garamond',serif;font-weight:500;font-size:34px;line-height:1.1;letter-spacing:-0.02em;color:#1A1612;">
Είσαι <em style="font-style:italic;color:#B8442A;">μέσα</em> στη λίστα.
</h1>
<p style="margin:0 0 18px;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.65;color:#1A1612;">
Γεια σου,
</p>
<p style="margin:0 0 28px;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.65;color:#1A1612;">
Είσαι επίσημα στη λίστα αναμονής του EasyData.
</p>
<p style="margin:0 0 12px;font-family:Helvetica,Arial,sans-serif;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;color:#B8442A;">
Τι σημαίνει αυτό
</p>
<ul style="margin:0 0 28px;padding:0 0 0 20px;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.7;color:#1A1612;">
<li style="margin:0 0 6px;">Κρατάμε τη θέση σου με προτεραιότητα όταν ανοίξουμε</li>
<li style="margin:0 0 6px;">Στους πρώτους 100, κλειδώνουμε <strong style="color:#B8442A;">€9/μήνα για πάντα</strong> (μετά γίνεται €15)</li>
<li style="margin:0 0 6px;">Πρώτος μήνας δωρεάν</li>
<li style="margin:0;">Καμία κάρτα τώρα</li>
</ul>
<p style="margin:0 0 16px;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.65;color:#1A1612;">
Στόχος μας είναι να ανοίξουμε πριν την 1η Οκτωβρίου 2026, ώστε να έχεις χρόνο να εξοικειωθείς πριν το myDATA γίνει υποχρεωτικό.
</p>
<p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.65;color:#1A1612;">
Θα σε ειδοποιήσουμε όταν είμαστε έτοιμοι.
</p>
</td>
</tr>
<tr>
<td style="padding:24px 8px 0;font-family:Helvetica,Arial,sans-serif;font-size:13px;line-height:1.6;color:#6B5D4F;">
<p style="margin:0 0 6px;">Δεν θυμάσαι να εγγραφείς; Πες μας.</p>
<p style="margin:0;">Διάβασε την πολιτική απορρήτου στο <a href="https://easydata-jet.vercel.app/privacy" style="color:#6B5D4F;text-decoration:underline;">easydata-jet.vercel.app/privacy</a></p>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;
