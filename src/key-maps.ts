type KeyMap = Record<string, string | [string, string]>;

const RAW_KEY_MAP: { keys: string[]; result: string | [string, string] }[] = [
  { keys: ['tab'], result: 'Tab ↹' },
  { keys: ['enter'], result: '↵ Enter' },
  { keys: ['space'], result: ['⎵', 'Space'] },
  { keys: ['home'], result: 'Home' },
  { keys: ['end'], result: 'End' },
  { keys: ['minus'], result: ['-', 'Minus'] },
  { keys: ['equal'], result: ['=', 'Equal'] },
  { keys: ['bracketleft'], result: ['[', 'Left Bracket'] },
  { keys: ['bracketright'], result: [']', 'Right Bracket'] },
  { keys: ['backslash'], result: ['\\', 'Backslash'] },
  { keys: ['semicolon'], result: [';', 'Semicolon'] },
  { keys: ['quote'], result: ["'", 'Quote'] },
  { keys: ['comma'], result: [',', 'Comma'] },
  { keys: ['period'], result: ['.', 'Period'] },
  { keys: ['slash'], result: ['/', 'Slash'] },
  { keys: ['backquote'], result: ['`', 'Backquote'] },
  // arrows
  { keys: ['arrowleft', 'left'], result: ['←', '← Left'] },
  { keys: ['arrowright', 'right'], result: ['→', '→ Right'] },
  { keys: ['arrowup', 'up'], result: ['↑', '↑ Up'] },
  { keys: ['arrowdown', 'down'], result: ['↓', '↓ Down'] },
  // functional keys
  { keys: ['capslock', 'caps'], result: 'Caps Lock' },
  { keys: ['numlock', 'num'], result: 'Num Lock' },
  { keys: ['shift', 'leftshift', 'shiftleft'], result: 'Shift' },
  { keys: ['shift', 'rightshift', 'shiftright'], result: 'Right Shift' },
  { keys: ['ctrl', 'control', 'leftctrl', 'ctrlleft', 'leftcontrol', 'controlleft'], result: ['Ctrl', 'Control'] },
  {
    keys: ['ctrl', 'control', 'rightctrl', 'ctrlright', 'rightcontrol', 'controlright'],
    result: ['Right Ctrl', 'Right Control'],
  },
  { keys: ['cmd', 'command'], result: ['Cmd', 'Command'] },
  { keys: ['option', 'opt'], result: ['Opt', 'Option'] },
  { keys: ['alt', 'leftalt', 'altleft'], result: 'Alt' },
  { keys: ['altgraph', 'altgr', 'rightalt', 'altright'], result: ['Alt Gr', 'Alt Graph'] },
  { keys: ['escape', 'esc'], result: ['Esc', 'Escape'] },
  { keys: ['insert', 'ins'], result: ['Ins', 'Insert'] },
  { keys: ['delete', 'del'], result: ['Del', 'Delete'] },
  { keys: ['windows', 'win', 'leftmeta', 'metaleft'], result: ['⊞ Win', '⊞ Windows'] },
  { keys: ['menu', 'contextmenu'], result: '▤ Menu' },
  { keys: ['backspace', 'back', 'bcksp'], result: ['Bcksp', 'Backspace'] },
  { keys: ['printscreen', 'printsc', 'prtsc'], result: ['Prt Sc', 'Print Screen'] },
  // numpad
  { keys: ['numpaddivide', 'divide'], result: ['Numpad /', 'Divide'] },
  { keys: ['numpadmultiply', 'multiply'], result: ['Numpad *', 'Multiply'] },
  { keys: ['numpadadd', 'add'], result: ['Numpad +', 'Add'] },
  { keys: ['numpadsubstract', 'substract'], result: ['Numpad -', 'Substract'] },
  { keys: ['numpaddecimal', 'decimal'], result: ['Numpad .', 'Decimal'] },
  { keys: ['numpadenter'], result: '↵ Numpad Enter' },
  // volume
  { keys: ['audiovolumemute', 'audiomute', 'volumemute', 'mute'], result: ['Vol. Mute', 'Audio Volume Mute'] },
  { keys: ['audiovolumedown', 'volumedown'], result: ['Vol. Down', 'Audio Volume Down'] },
  { keys: ['audiovolumeup', 'volumeup'], result: ['Vol. Up', 'Audio Volume Up'] },
  // page keys
  { keys: ['pagedown', 'pgdown'], result: ['Pg Down', 'Page Down'] },
  { keys: ['pageup', 'pgup'], result: ['Pg Up', 'Page Up'] },
];

const PREMADE_KEY_MAP = RAW_KEY_MAP.reduce<KeyMap>((acc, v) => {
  for (const key of v.keys) {
    acc[key] = v.result;
  }
  return acc;
}, {});

// create keys for all the letters
const LETTER_KEY_MAP = 'abcdefghijklmnopqrstuvwxyz'.split('').reduce<KeyMap>((acc, v) => {
  acc[`key${v}`] = v.toUpperCase();
  return acc;
}, {});

// create keys for all the numbers (and numpad numbers)
const DIGIT_KEY_MAP: KeyMap = {};
for (let i = 0; i < 10; i++) {
  const str = i.toString();
  DIGIT_KEY_MAP[`digit${str}`] = str;
  DIGIT_KEY_MAP[`numpad${str}`] = `Numpad ${str}`;
}

// create keys for all function keys (F1, F2, ..., F12)
const F_KEY_MAP: KeyMap = {};
for (let i = 1; i <= 12; i++) {
  const str = i.toString();
  F_KEY_MAP[`f${str}`] = str;
}

export const KEY_MAP: KeyMap = {
  ...PREMADE_KEY_MAP,
  ...LETTER_KEY_MAP,
  ...DIGIT_KEY_MAP,
  ...F_KEY_MAP,
};
