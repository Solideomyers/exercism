import { isLeap } from './leap';

describe('A leap year', () => {
  test('year not divisible by 4 in common year', () => {
    const year = isLeap(2015);
    expect(year).toBe(false);
  });

  test('year divisible by 2, not divisible by 4 in common year', () => {
    const year = isLeap(1970)
    expect(year).toBe(false);
  });

  test('year divisible by 4, not divisible by 100 in leap year', () => {
    const year = isLeap(1996)
    expect(year).toBe(true);
  });

  test('year divisible by 4 and 5 is still a leap year', () => {
    const year = isLeap(1960);
    expect(year).toBe(true);
  });

  test('year divisible by 100, not divisible by 400 in common year', () => {
    const year = isLeap(2100);
    expect(year).toBe(false);
  });

  test('year divisible by 100 but not by 3 is still not a leap year', () => {
    const year = isLeap(2100);
    expect(year).toBe(false);
  });

  test('year divisible by 400 in leap year', () => {
    const year = isLeap(2000);
    expect(year).toBe(true);
  });

  test('year divisible by 400 but not by 125 is still a leap year', () => {
    const year = isLeap(2400);
    expect(year).toBe(true);
  });

  test('year divisible by 200, not divisible by 400 in common year', () => {
    const year = isLeap(1800);
    expect(year).toBe(false);
  });
});
