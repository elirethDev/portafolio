import { describe, expect, it } from 'vitest';
import { normalizeContactFields, validateContactFields } from './contact-validation';
import { detectLocale } from './i18n/locales';

const valid = {
	name: ' Pablo Soler ',
	email: 'PABLO@example.com ',
	message: 'Hello',
	website: '',
	token: 'token'
};

describe('contact validation', () => {
	it('normalizes values before validating them', () => {
		const fields = normalizeContactFields(valid);
		expect(fields.email).toBe('pablo@example.com');
		expect(validateContactFields(fields)).toBeNull();
	});

	it('rejects missing and oversized fields', () => {
		expect(validateContactFields({ ...valid, name: '' })).toBe('name');
		expect(validateContactFields({ ...normalizeContactFields(valid), message: 'x'.repeat(4001) })).toBe('message');
	});
});

describe('locale detection', () => {
	it('honors quality values instead of matching any language token', () => {
		expect(detectLocale('en;q=0.9,es;q=0.8')).toBe('en');
		expect(detectLocale('es-MX, en;q=0.5')).toBe('es');
	});
});
