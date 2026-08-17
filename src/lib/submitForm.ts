/** Inbox for every site form */
export const FORM_INBOX = 'arunchitragar7@gmail.com';

type FieldValue = string | number | File | undefined | null;

/**
 * Sends form data to FORM_INBOX via FormSubmit.
 * First live submit sends a one-time confirmation email to that inbox — confirm it once.
 */
export async function submitSiteForm(
  fields: Record<string, FieldValue>,
  subject: string
) {
  const url = `https://formsubmit.co/ajax/${FORM_INBOX}`;
  const hasFile = Object.values(fields).some((v) => v instanceof File);

  if (hasFile) {
    const fd = new FormData();
    fd.append('_subject', subject);
    fd.append('_template', 'table');
    fd.append('_captcha', 'false');
    fd.append('_replyto', String(fields.email ?? fields.mail ?? ''));
    for (const [key, value] of Object.entries(fields)) {
      if (value === undefined || value === null) continue;
      fd.append(key, value instanceof File ? value : String(value));
    }
    const response = await fetch(url, { method: 'POST', body: fd });
    if (!response.ok) throw new Error('Failed to send message');
    return;
  }

  const payload: Record<string, string> = {
    _subject: subject,
    _template: 'table',
    _captcha: 'false',
  };
  if (fields.email) payload._replyto = String(fields.email);

  for (const [key, value] of Object.entries(fields)) {
    if (value === undefined || value === null) continue;
    payload[key] = String(value);
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error('Failed to send message');
}
