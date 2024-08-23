import { KEY_MAP } from './key-maps';

export function keyToString(key: string, useShort: boolean = true) {
  const lowerKey = key.toLowerCase();

  if (KEY_MAP[lowerKey]) {
    const match = KEY_MAP[lowerKey];
    if (typeof match == 'string') return match;
    return useShort ? match[0] : match[1];
  }
  //! fallback if none of the predefined matchers were matched
  //display the side nicely
  if (lowerKey.match(/^.+(left|right)$/)) {
    let side = key.match(/right|left/i)![0].toLowerCase();
    side = side[0].toUpperCase() + side.substring(1);
    let code = key.replace(/right|left/i, '');
    key = side + code;
  }
  //convert from "PascalCase" to "Title Case"
  return key.replace(/([A-Z])/, ' $1').trim();
}
