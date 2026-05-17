"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeWords = capitalizeWords;
exports.capitalizeWordsSimple = capitalizeWordsSimple;
exports.capitalizeWordsUnicode = capitalizeWordsUnicode;
exports.isValidCapitalizeInput = isValidCapitalizeInput;
/**
 * Capitalizes the first letter of each word in a string
 *
 * @param str - The input string to capitalize
 * @param options - Configuration options
 * @returns Capitalized string
 *
 * @throws {TypeError} When input is not a string
 *
 * @example
 * ```typescript
 * capitalizeWords('hello world')
 * // Returns: 'Hello World'
 *
 * capitalizeWords('the quick fox', { exceptions: ['the'] })
 * // Returns: 'the Quick Fox'
 *
 * capitalizeWords('hello WORLD', { lowercaseRest: true })
 * // Returns: 'Hello World'
 * ```
 */
function capitalizeWords(str, options = {}) {
    // Input validation
    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }
    if (str.length === 0) {
        return '';
    }
    const { lowercaseRest = false, exceptions = [] } = options;
    return str
        .trim()
        .split(/\s+/)
        .map((word) => {
        // Check if word is in exceptions (case-insensitive)
        const isException = exceptions.some((exc) => exc.toLowerCase() === word.toLowerCase());
        if (isException) {
            return lowercaseRest ? word.toLowerCase() : word;
        }
        // Capitalize first letter
        const firstChar = word.charAt(0).toUpperCase();
        let rest = word.slice(1);
        if (lowercaseRest) {
            rest = rest.toLowerCase();
        }
        return firstChar + rest;
    })
        .join(' ');
}
/**
 * Simple version: Capitalizes each word but keeps original case of other letters
 *
 * @param str - The input string to capitalize
 * @returns Capitalized string without any options
 *
 * @example
 * ```typescript
 * capitalizeWordsSimple('hello world')
 * // Returns: 'Hello World'
 * ```
 */
function capitalizeWordsSimple(str) {
    if (typeof str !== 'string')
        return '';
    return str
        .trim()
        .split(/\s+/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
/**
 * Advanced: Capitalize words with support for Unicode characters and edge cases
 *
 * @param str - The input string
 * @param locale - Locale for proper case conversion (e.g., 'tr' for Turkish)
 * @returns Capitalized string with Unicode support
 *
 * @example
 * ```typescript
 * capitalizeWordsUnicode('hello 世界')
 * // Returns: 'Hello 世界'
 * ```
 */
function capitalizeWordsUnicode(str, locale) {
    if (typeof str !== 'string')
        return '';
    return str
        .trim()
        .split(/\s+/)
        .map((word) => {
        if (word.length === 0)
            return word;
        const firstChar = locale
            ? word.charAt(0).toLocaleUpperCase(locale)
            : word.charAt(0).toUpperCase();
        const rest = word.slice(1);
        return firstChar + rest;
    })
        .join(' ');
}
/**
 * Type guard to check if a value is a valid string for capitalization
 */
function isValidCapitalizeInput(value) {
    return typeof value === 'string' && value.length > 0;
}
// Default export for convenience
exports.default = capitalizeWords;
//# sourceMappingURL=index.js.map