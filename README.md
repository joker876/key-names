# key-display-names
![npm](https://img.shields.io/npm/v/key-display-names?label=version) ![NPM](https://img.shields.io/npm/l/key-display-names) ![npm bundle size](https://img.shields.io/bundlephobia/min/key-display-names)

Manage your undo/redo operations with ease!

## Highlights
* Supports TypeScript!
* Supports Node and browser
* Includes full JSDoc documentation
* Very lightweight!
* Contains tests


## Installation
### NodeJS
```
npm install key-display-names --save
```

### Browser
Import the script:
```html
<script src="https://joker876.github.io/key-names/key-names.min.js">
```
And access the function from a global object:
```js
KeyNames.keyToString(/* ... */);
```

## Usage
```typescript
import { keyToString } from 'key-display-names';
```

```typescript
keyToString(key: string, useShort: boolean = true): string;
```
The **keyToString** function converts a computer-readable key code string to a human-readable string.

The main purpose for this function is to be used for displaying keyboard shortcuts and other similar cases.

* `key` - the key code string to convert. In most cases case-insensitive, however for 100% reliability use PascalCase.
* `useShort` - whether the output string should use a shortened version, if available. Optional, defaults to `true`.       
