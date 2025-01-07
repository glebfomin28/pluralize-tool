# pluralize-tool

`pluralize-tool` is a simple utility for pluralizing words based on the number. It handles pluralization rules, special cases, and works for languages like Russian, where the word form changes depending on the number.


## Installation
```bash
npm install pluralize-tool
```

## Usage
### Importing the library

```ts
import plural from 'pluralize-tool';

const appleCount = 3;
const result = plural(appleCount, ['яблоко', 'яблока', 'яблок']);

console.log(result);  // Outputs: "яблока"
```

### Special Cases

You can define special cases where certain numbers (e.g., 0, 1) have custom plural forms:

```ts
const specialCases = {
  0: 'пусто',
};

const result = plural(0, ['яблоко', 'яблока', 'яблок'], specialCases);

console.log(result);  // Outputs: "пусто"
```

> #### Structure `titles`
> The titles array must always contain exactly three word forms to handle different pluralization rules. Here's how the array should be structured:
>
>  - First form (nominative singular):
>    Used for numbers ending in 1, except those ending in 11.
>    Example: "яблоко", "человек", "рыба".
>
>  - Second form (genitive singular):
>    Used for numbers ending in 2, 3, 4, except those ending in 12, 13, 14.
>    Example: "яблока", "человека", "рыбы".
>
>  - Third form (genitive plural):
>    Used for numbers ending in 0, 5-9, and for all numbers from 11 to 19.
>    Example: "яблок", "людей", "рыб".
