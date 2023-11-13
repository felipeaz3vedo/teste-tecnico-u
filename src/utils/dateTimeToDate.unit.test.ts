import { describe, expect, it } from 'vitest';
import { dateTimeToDate } from './dateTimeToDate';

describe('datetime to date', () => {
  it('should get the only date of a dateTime', () => {
    const dateTime = new Date('2023-11-11T00:00:00.000Z');

    const date = dateTimeToDate(dateTime);

    expect(date).toEqual('11/11/2023');
  });

  it('should throw a error if type different of date object is provided', () => {
    const dateTime = '2023-11-11T00:00:00.000Z';

    expect(() => dateTimeToDate(dateTime)).toThrow();
  });
});
