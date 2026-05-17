/**
 * Options for configuring the capitalizeWords function
 */
export interface CapitalizeOptions {
    /**
     * Convert remaining letters to lowercase
     * @default false
     */
    lowercaseRest?: boolean;
    /**
     * Words to keep as-is (case-insensitive matching)
     * @default []
     */
    exceptions?: string[];
}
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
export declare function capitalizeWords(str: string, options?: CapitalizeOptions): string;
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
export declare function capitalizeWordsSimple(str: string): string;
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
export declare function capitalizeWordsUnicode(str: string, locale?: string): string;
/**
 * Type guard to check if a value is a valid string for capitalization
 */
export declare function isValidCapitalizeInput(value: unknown): value is string;
export default capitalizeWords;
//# sourceMappingURL=index.d.ts.map