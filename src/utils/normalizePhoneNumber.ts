export const normalizePhoneNumber = (phoneNumber: string): string => {
  const normalizedPhoneNumber = phoneNumber.replace(/[\s()-]/g, '');

  return normalizedPhoneNumber;
};
