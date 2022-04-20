import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonabarte', 'bonappetit', 'banana']), 'b'));
console.log(cleanSet(new Set(['ponjovi', 'bonabarte', 'ponappetit', 'banana']), 'b'));
console.log(cleanSet(new Set(['ponjovi', 'bonabarte', 'ponappetit', 'banana']), 'x'));
console.log(cleanSet(new Set([]), 'b'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));