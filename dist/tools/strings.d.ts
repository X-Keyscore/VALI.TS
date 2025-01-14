/**
 * @param str string
 * @returns Returns a `Uint16Array` containing the unicode values ​​of each character in the string `str`,
 * if a character exceeds the 16-bit unit then it is encoded on two units.
 */
export declare function createUTF16UnitArray(str: string): Uint16Array<ArrayBuffer>;
export declare function getUTF8ByteLengthFromCodePoint(codePoint: number): number;
export declare function getUTF8ByteLengthFromUTF16UnitArray(utf16UnitArray: Uint16Array): number;
