export const CONTACT_LIMITS = {
	name: 100,
	email: 254,
	message: 4000,
	website: 200,
	token: 4096
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactFields = {
	name: string;
	email: string;
	message: string;
	website: string;
	token: string;
};

export type ContactValidationError = 'name' | 'email' | 'message' | 'captcha';

export function normalizeContactFields(fields: ContactFields): ContactFields {
	return {
		name: fields.name.trim(),
		email: fields.email.trim().toLowerCase(),
		message: fields.message.trim(),
		website: fields.website.trim(),
		token: fields.token.trim()
	};
}

export function validateContactFields(fields: ContactFields): ContactValidationError | null {
	if (!fields.name || fields.name.length > CONTACT_LIMITS.name) return 'name';
	if (!fields.email || fields.email.length > CONTACT_LIMITS.email || !EMAIL_RE.test(fields.email)) return 'email';
	if (!fields.message || fields.message.length > CONTACT_LIMITS.message) return 'message';
	if (!fields.token || fields.token.length > CONTACT_LIMITS.token) return 'captcha';
	return null;
}

export function exceedsContactLimit(fields: ContactFields): boolean {
	return (
		fields.name.length > CONTACT_LIMITS.name ||
		fields.email.length > CONTACT_LIMITS.email ||
		fields.message.length > CONTACT_LIMITS.message ||
		fields.website.length > CONTACT_LIMITS.website ||
		fields.token.length > CONTACT_LIMITS.token
	);
}
