/**
 * Converts a given input string to camelCase.
 * 
 * The function takes a string input, trims whitespace, replaces multiple 
 * separators (hyphens and underscores) with a single space, and then 
 * converts the resulting words into camelCase format. The first word 
 * is lowercased, while the first letter of each subsequent word is 
 * capitalized.
 * 
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} - The camelCased string.
 * @throws {TypeError} - Throws an error if the input is not a string.
     * 
 * @example
 * console.log(toCamelCase(" hello--world__123 ")); // Output: helloWorld123
 * console.log(toCamelCase("convert_this_string")); // Output: convertThisString
 * console.log(toCamelCase("  multiple   spaces   ")); // Output: multipleSpaces
 * console.log(toCamelCase("123_numbers_and_special!@#")); // Output: 123NumbersAndSpecial
 */

/**
 * Converts a given input string to dot.case format.
 * 
 * The function takes a string input, trims whitespace, replaces multiple 
 * separators (hyphens and underscores) with a single space, and then 
 * converts the resulting words into dot.case format. All words are 
 * lowercased and joined by a dot.
 * 
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} - The dot.cased string.
 * @throws {TypeError} - Throws an error if the input is not a string.
 * 
 * @example
 * console.log(toDotCase(" hello--world__123 ")); // Output: hello.world.123
 * console.log(toDotCase("convert_this_string")); // Output: convert.this.string
 * console.log(toDotCase("  multiple   spaces   ")); // Output: multiple.spaces
 * console.log(toDotCase("123_numbers_and_special!@#")); // Output: 123.numbers.and.special!@#
 */
