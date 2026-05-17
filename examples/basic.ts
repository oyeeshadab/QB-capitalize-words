import { capitalizeWords, capitalizeWordsSimple, capitalizeWordsUnicode } from '../src/index';

// Basic usage
console.log(capitalizeWords('hello world')); // Hello World

// With options
console.log(capitalizeWords('hello WORLD', { lowercaseRest: true })); // Hello World

// With exceptions
console.log(capitalizeWords('the quick brown fox', { exceptions: ['the'] })); // the Quick Brown Fox

// Simple version
console.log(capitalizeWordsSimple('hello world')); // Hello World

// Unicode support
console.log(capitalizeWordsUnicode('hello 世界')); // Hello 世界
console.log(capitalizeWordsUnicode('привет мир')); // Привет Мир
