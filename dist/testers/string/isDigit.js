"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDigit = isDigit;
const tools_1 = require("../../tools");
/**
 * @param input Can be either a `string` or a `Uint16Array` containing the decimal values ​​of the string in code point Unicode format.
 * @returns `true` if all characters in the string are between 0 and 9 (%d48-%d57) otherwise `false`.
 */
function isDigit(input, params) {
    const utf16UnitArray = typeof input === "string" ? (0, tools_1.createUTF16UnitArray)(input) : input;
    let i = utf16UnitArray.length - 1;
    while (i > -1) {
        if (utf16UnitArray[i] <= 48 || utf16UnitArray[i] >= 57)
            return (false); // DIGIT
        i--;
    }
    return (true);
}
