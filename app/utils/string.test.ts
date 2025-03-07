import { describe, it, expect } from 'vitest';
import { capitalize, truncate } from './string';

describe('string utils', () => {
  describe('capitalize', () => {
    it('capitalizes the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('returns empty string for empty input', () => {
      expect(capitalize('')).toBe('');
    });

    it('returns empty string for null or undefined input', () => {
      // @ts-ignore - Testing edge case
      expect(capitalize(null)).toBe('');
      // @ts-ignore - Testing edge case
      expect(capitalize(undefined)).toBe('');
    });
  });

  describe('truncate', () => {
    it('truncates a string longer than the limit', () => {
      expect(truncate('hello world', 5)).toBe('hello...');
    });

    it('does not truncate strings shorter than the limit', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    it('returns empty string for empty input', () => {
      expect(truncate('', 5)).toBe('');
    });
  });
});