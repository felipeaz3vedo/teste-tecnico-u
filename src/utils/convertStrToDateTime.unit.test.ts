import { describe, expect, it } from 'vitest';
import { convertStrToDateTime } from './convertStrToDateTime';

describe('convert string to DateTime', () => {
  it('should convert a string to DateTime object', () => {
    const string = '09/12/1991';

    const date = convertStrToDateTime(string);

    expect(date).toEqual(new Date('1991-12-09T03:00:00.000Z'));
  });

  it('should throw a error if type different of date object is provided', () => {
    const wrongTypeValue = new Date();

    expect(() => convertStrToDateTime(wrongTypeValue)).toThrow();
  });
});
