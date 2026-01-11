/**
 * Converts a given string to kebab-case.
 * 
 * Expected behavior:
 * - Spaces, underscores, and camelCase should be converted to hyphens.
 * - All characters should be lowercase.
 * - Special characters should be removed.
 * 
 * @param {string} str - The input string to convert.
 * @returns {string} - The kebab-case version of the input string.
 */
function toKebabCase(str) {
    return str
        .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Add hyphen between lowercase and uppercase letters
        .replace(/[^a-zA-Z0-9-]+/g, '') // Remove special characters
        .toLowerCase(); // Convert to lowercase
}

// Test cases
console.log(toKebabCase("HelloWorld Test_string")); // "hello-world-test-string"
console.log(toKebabCase("ThisIsATest")); // "this-is-a-test"
console.log(toKebabCase("another_example_here")); // "another-example-here"
console.log(toKebabCase("Special@Characters!")); // "specialcharacters"
console.log(toKebabCase("  Leading and trailing spaces  ")); // "leading-and-trailing-spaces"
console.log(toKebabCase("Mixed_Case-Example")); // "mixed-case-example"