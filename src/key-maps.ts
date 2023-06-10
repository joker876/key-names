

export const KEY_MAP: { matcher: RegExp | string, result: string | [string, string] | ((key: string, useShort: boolean) => string) }[] = [
    //string matchers
    { matcher: 'tab', result: 'Tab ↹' },
    { matcher: 'enter', result: '↵ Enter' },
    { matcher: 'space', result: 'Space' },
    { matcher: 'home', result: 'Home' },
    { matcher: 'end', result: 'End' },
    { matcher: 'minus', result: ['-', 'Minus'] },
    { matcher: 'equal', result: ['=', 'Equal'] },
    { matcher: 'bracketleft', result: ['[', 'Left Bracket'] },
    { matcher: 'bracketright', result: [']', 'Right Bracket'] },
    { matcher: 'backslash', result: ['\\', 'Backslash'] },
    { matcher: 'semicolon', result: [';', 'Semicolon'] },
    { matcher: 'quote', result: ['\'', 'Quote'] },
    { matcher: 'comma', result: [',', 'Comma'] },
    { matcher: 'period', result: ['.', 'Period'] },
    { matcher: 'slash', result: ['/', 'Slash'] },
    { matcher: 'backquote', result: ['`', 'Backquote'] },

    //regex matchers
    { matcher: /^(arrow)?(left)$/, result: ['←', '← Left' ] },
    { matcher: /^(arrow)?(right)$/, result: ['→', '→ Right' ] },
    { matcher: /^(arrow)?(up)$/, result: ['↑', '↑ Up' ] },
    { matcher: /^(arrow)?(down)$/, result: ['↓', '↓ Down' ] },
    { matcher: /^caps(lock)?$/, result: 'Caps Lock' },
    { matcher: /^num(lock)?$/, result: 'Num Lock' },
    { matcher: /^((left)?shift|shiftleft)$/, result: 'Shift' },
    { matcher: /^((right)?shift|shiftright)$/, result: 'Right Shift' },
    { matcher: /^((left)?(ctrl|control)|(ctrl|control)left)$/, result: ['Ctrl', 'Control'] },
    { matcher: /^((right)?(ctrl|control)|(ctrl|control)right)$/, result: ['Right Ctrl', 'Right Control'] },
    { matcher: /^(cmd|command)$/, result: ['Cmd', 'Command'] },
    { matcher: /^opt(ion)?$/, result: ['Opt', 'Option'] },
    { matcher: /^(altgr(aph)?|altright|rightalt)$/, result: ['Alt Gr', 'Alt Graph'] },
    { matcher: /^(alt(left)?|leftalt)$/, result: 'Alt' },
    { matcher: /^esc(ape)?$/, result: ['Esc', 'Escape'] },
    { matcher: /^ins(ert)?$/, result: ['Ins', 'Insert'] },
    { matcher: /^del(ete)?$/, result: ['Del', 'Delete'] },
    { matcher: /^(win(dows)?|metaleft|leftmeta)$/, result: ['⊞ Win', '⊞ Windows'] },
    { matcher: /^(context)?menu$/, result: '▤ Menu' },
    { matcher: /^back(space)?$/, result: ['Bcksp', 'Backspace'] },
    { matcher: /^(printscreen|printsc|prtsc)$/, result: ['Prt Sc', 'Print Screen'] },
    { matcher: /^(numpad)?divide$/, result: ['Numpad /', 'Divide'] },
    { matcher: /^(numpad)?multiply$/, result: ['Numpad *', 'Multiply'] },
    { matcher: /^(numpad)?substract$/, result: ['Numpad -', 'Substract'] },
    { matcher: /^(numpad)?add$/, result: ['Numpad +', 'Add'] },
    { matcher: /^(numpad)?decimal$/, result: ['Numpad .', 'Decimal'] },
    { matcher: /^(numpad)?enter$/, result: '↵ Numpad Enter' },
    { matcher: /^(audio)?(volume)?mute$/, result: ['Vol. Mute', 'Audio Volume Mute'] },
    { matcher: /^(audio)?volumedown$/, result: ['Vol. Down', 'Audio Volume Down'] },
    { matcher: /^(audio)?volumeup$/, result: ['Vol. Up', 'Audio Volume Up'] },

    //function result
    { 
        matcher: /^key[a-z]$/,
        result: key => key.substring(key.length - 1).toUpperCase()
    },
    { 
        matcher: /^digit\d$/,
        result: key => key.substring(key.length - 1)
    },
    { 
        matcher: /^f\d\d?$/,
        result: key => key.toUpperCase()
    },
    { 
        matcher: /^numpad\d$/,
        result: key => `Numpad ${key.substring(key.length - 1)}`
    },
    { 
        matcher: /^(page|pg)(up|down)$/, 
        result: (key, useShort) => useShort ? key.replace(/page|pg/i, 'Pg ') : key.replace(/page|pg/i, 'Page ')
    },
]