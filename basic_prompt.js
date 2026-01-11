function toCamelCase(str) {
    return str
        .split(/[\s_-]+/)
        .map((word, index) => {
            if (index === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage
console.log(toCamelCase("hello world_example")); // helloWorldExample
console.log(toCamelCase("hello-world example")); // helloWorldExample
console.log(toCamelCase("HELLO_WORLD-EXAMPLE")); // helloWorldExample