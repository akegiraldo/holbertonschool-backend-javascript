import cleanSet from './8-clean_set';

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', , 'banana'])));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', , 'banana']), 'bon'));

console.log(cleanSet(new Set(['id-test', 'id-chicken', 'id-user', , 'id-id-']), 'id-'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit']), 'bon'));
console.log(cleanSet(new Set(['id-test', 'id-chicken', 'id-user', , 'id-id-'])));
console.log(cleanSet(new Set(['id-test', 'id-chicken', 'id-user', , 'id-id-']), []));
