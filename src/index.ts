import { KEY_MAP } from "./key-maps";


export function keyToString(key: string, useShort: boolean = true) {
    let lowerKey = key.toLowerCase();
    
    for (const MATCHER_ITEM of KEY_MAP) {
        let matched: boolean = false;
        //check if matches a certain string
        if (typeof MATCHER_ITEM.matcher == 'string') {
            matched = lowerKey == MATCHER_ITEM.matcher;
        }
        //check if fulfills a regexp
        else {
            matched = MATCHER_ITEM.matcher.test(lowerKey);
        }
        if (!matched) continue;

        if (typeof MATCHER_ITEM.result == 'string') return MATCHER_ITEM.result;
        if (Array.isArray(MATCHER_ITEM.result)) return useShort ? MATCHER_ITEM.result[0] : MATCHER_ITEM.result[1];
        return MATCHER_ITEM.result(key, useShort);
    }
    //* fallback if none of the predefined matchers were matched
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