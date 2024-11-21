import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils tests', () => {
  test('getFullYear', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
});

  describe('getFooterCopy',() => {
  test('should returns the correct string when the argument is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('should returns the correct string when the argument is false', () => {
    expect(getFooterCopy(false)).toBe('All rights reserved');
  });
});

  describe('getLatestNotification', () => {
  test('should returns the correct string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');

    });
  });
