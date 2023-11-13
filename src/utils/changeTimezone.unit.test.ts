import { describe, expect, it } from 'vitest';
import { changeTimezone } from './changeTimezone';

describe('change timezone', () => {
  it('should change timezone a date js object in UTC', () => {
    const utcDateTime = new Date();

    const ChangedTimezoneDateTime = changeTimezone(utcDateTime, -3);

    const utcMinusThreeHoursInMiliseconds =
      utcDateTime.getTime() - 3 * 60 * 60 * 1000;

    const utcMinusThreeHoursInDateTime = new Date(
      utcMinusThreeHoursInMiliseconds
    );

    expect(ChangedTimezoneDateTime).toEqual(utcMinusThreeHoursInDateTime);
  });
});
