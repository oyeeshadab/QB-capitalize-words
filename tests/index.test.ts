import { describe, it, expect } from '@jest/globals';
import {
  capitalizeWords,
  capitalizeWordsSimple,
  capitalizeWordsUnicode,
  isValidCapitalizeInput,
} from '../src/index';

describe('capitalizeWords', () => {
  it('should capitalize basic words', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
    expect(capitalizeWords('hello')).toBe('Hello');
  });

  it('should handle multiple spaces', () => {
    expect(capitalizeWords('  hello   world  ')).toBe('Hello World');
  });

  it('should preserve existing caps by default', () => {
    expect(capitalizeWords('hello WORLD')).toBe('Hello WORLD');
  });

  it('should convert rest to lowercase when option is true', () => {
    expect(capitalizeWords('hello WORLD', { lowercaseRest: true })).toBe('Hello World');
  });

  it('should respect exceptions', () => {
    expect(
      capitalizeWords('the quick brown fox', {
        exceptions: ['the'],
      })
    ).toBe('the Quick Brown Fox');
  });

  it('should handle case-insensitive exceptions', () => {
    expect(
      capitalizeWords('THE quick fox', {
        exceptions: ['the'],
      })
    ).toBe('THE Quick Fox');
  });

  it('should handle empty string', () => {
    expect(capitalizeWords('')).toBe('');
  });

  it('should throw error for non-string input', () => {
    expect(() => capitalizeWords(123 as any)).toThrow(TypeError);
    expect(() => capitalizeWords(null as any)).toThrow(TypeError);
    expect(() => capitalizeWords(undefined as any)).toThrow(TypeError);
  });

  it('should handle single character words', () => {
    expect(capitalizeWords('a b c')).toBe('A B C');
  });

  it('should handle punctuation', () => {
    expect(capitalizeWords('hello, world!')).toBe('Hello, World!');
  });
});

describe('capitalizeWordsSimple', () => {
  it('should capitalize basic words', () => {
    expect(capitalizeWordsSimple('hello world')).toBe('Hello World');
  });

  it('should handle empty string', () => {
    expect(capitalizeWordsSimple('')).toBe('');
  });

  it('should handle non-string input gracefully', () => {
    expect(capitalizeWordsSimple(123 as any)).toBe('');
  });
});

describe('capitalizeWordsUnicode', () => {
  it('should handle Unicode characters', () => {
    expect(capitalizeWordsUnicode('hello 世界')).toBe('Hello 世界');
    expect(capitalizeWordsUnicode('привет мир')).toBe('Привет Мир');
  });

  it('should handle locale-specific capitalization', () => {
    // Turkish dotless i
    expect(capitalizeWordsUnicode('istanbul', 'tr')).toBe('İstanbul');
  });
});

describe('isValidCapitalizeInput', () => {
  it('should return true for valid strings', () => {
    expect(isValidCapitalizeInput('hello')).toBe(true);
    expect(isValidCapitalizeInput('hello world')).toBe(true);
  });

  it('should return false for invalid inputs', () => {
    expect(isValidCapitalizeInput('')).toBe(false);
    expect(isValidCapitalizeInput(123)).toBe(false);
    expect(isValidCapitalizeInput(null)).toBe(false);
    expect(isValidCapitalizeInput(undefined)).toBe(false);
  });
});
