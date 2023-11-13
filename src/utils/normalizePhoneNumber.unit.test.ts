import { describe, expect, it } from 'vitest';
import { normalizePhoneNumber } from './normalizePhoneNumber';

describe('normalize phone number', () => {
  it('should remove empty spaces, parentheses and/or hyphens', () => {
    const phoneNumber = '(84) 98755-4362';

    const normalizedPhoneNumber = normalizePhoneNumber(phoneNumber);

    expect(normalizedPhoneNumber).toEqual('84987554362');
  });
});
('');
