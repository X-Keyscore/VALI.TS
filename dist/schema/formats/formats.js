"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nativeFormats = exports.staticDefaultCriteria = void 0;
const format_1 = require("./array/format");
const format_2 = require("./tuple/format");
const format_3 = require("./record/format");
const format_4 = require("./struct/format");
const format_5 = require("./number/format");
const format_6 = require("./string/format");
const format_7 = require("./symbol/format");
const format_8 = require("./boolean/format");
const format_9 = require("./union/format");
exports.staticDefaultCriteria = {
    nullable: false,
    undefinable: false
};
exports.nativeFormats = {
    array: format_1.ArrayFormat,
    boolean: format_8.BooleanFormat,
    number: format_5.NumberFormat,
    record: format_3.RecordFormat,
    string: format_6.StringFormat,
    struct: format_4.StructFormat,
    symbol: format_7.SymbolFormat,
    tuple: format_2.TupleFormat,
    union: format_9.UnionFormat
};
