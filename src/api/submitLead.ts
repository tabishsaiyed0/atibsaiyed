const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export async function submitLead(input: {
  name: string;
  email: string;
  service: string;
  message: string;
}): Promise<{ success: boolean }> {
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...input,
      _subject: `New enquiry from ${input.name} (${input.service})`,
      _replyto: input.email,
    }),
  });
  if (!res.ok) {
    throw new Error(`Form submission failed (${res.status})`);
  }
  return { success: true };
}
