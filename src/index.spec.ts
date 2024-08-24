import { keyToString } from './index.js';
import { KEY_MAP } from './key-maps.js';

function _toSarcasmCase(input: string): string {
  return input
    .split('')
    .map((char, index) => (index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
    .join('');
}

describe('keyToString - KEY_MAP Tests', () => {
  it('should correctly map every key in KEY_MAP', () => {
    for (const [key, value] of Object.entries(KEY_MAP)) {
      if (typeof value === 'string') {
        expect(keyToString(key, true)).withContext(`Failed for key: ${key} (short form)`).toBe(value);
        expect(keyToString(key, false)).withContext(`Failed for key: ${key} (long form)`).toBe(value);
      } else if (Array.isArray(value)) {
        const [shortForm, longForm] = value;
        expect(keyToString(key, true)).withContext(`Failed for key: ${key} (short form)`).toBe(shortForm);
        expect(keyToString(key, false)).withContext(`Failed for key: ${key} (long form)`).toBe(longForm);
      }
    }
  });
  it('should correctly map every key in KEY_MAP, but in UPPER CASE', () => {
    for (const [key, value] of Object.entries(KEY_MAP)) {
      if (typeof value === 'string') {
        expect(keyToString(key.toUpperCase(), true)).withContext(`Failed for key: ${key} (short form)`).toBe(value);
        expect(keyToString(key.toUpperCase(), false)).withContext(`Failed for key: ${key} (long form)`).toBe(value);
      } else if (Array.isArray(value)) {
        const [shortForm, longForm] = value;
        expect(keyToString(key.toUpperCase(), true)).withContext(`Failed for key: ${key} (short form)`).toBe(shortForm);
        expect(keyToString(key.toUpperCase(), false)).withContext(`Failed for key: ${key} (long form)`).toBe(longForm);
      }
    }
  });
  it('should correctly map every key in KEY_MAP, but in SaRcAsM CaSe', () => {
    for (const [key, value] of Object.entries(KEY_MAP)) {
      if (typeof value === 'string') {
        expect(keyToString(_toSarcasmCase(key), true)).withContext(`Failed for key: ${key} (short form)`).toBe(value);
        expect(keyToString(_toSarcasmCase(key), false)).withContext(`Failed for key: ${key} (long form)`).toBe(value);
      } else if (Array.isArray(value)) {
        const [shortForm, longForm] = value;
        expect(keyToString(_toSarcasmCase(key), true)).withContext(`Failed for key: ${key} (short form)`).toBe(shortForm);
        expect(keyToString(_toSarcasmCase(key), false)).withContext(`Failed for key: ${key} (long form)`).toBe(longForm);
      }
    }
  });
});

describe('keyToString - Fallback Path', () => {
  it('should handle keys with "left"', () => {
    const result = keyToString('EscapeLeft');
    expect(result).toBe('Left Escape');
  });
  it('should handle keys with "right"', () => {
    const result = keyToString('MetaRight');
    expect(result).toBe('Right Meta');
  });
  it('should convert PascalCase to Title Case when no "left" or "right" is present', () => {
    const result = keyToString('HomePage');
    expect(result).toBe('Home Page');
  });
  it('should handle mixed case input with "left" and "right" not at the end', () => {
    const result = keyToString('KeyRightHome');
    expect(result).toBe('Key Right Home');
  });
  it('should handle input without "left" or "right" and apply Title Case', () => {
    const result = keyToString('SomeRandomKey');
    expect(result).toBe('Some Random Key');
  });
  it('should handle single-word PascalCase keys', () => {
    const result = keyToString('Whatever');
    expect(result).toBe('Whatever');
  });
  it('should handle already formatted Title Case keys', () => {
    const result = keyToString('Space Bar');
    expect(result).toBe('Space Bar');
  });
});