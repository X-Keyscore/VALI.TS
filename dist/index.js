"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToUTF16UnitArray = exports.Schema = void 0;
var schema_1 = require("./schema");
Object.defineProperty(exports, "Schema", { enumerable: true, get: function () { return schema_1.Schema; } });
var tools_1 = require("./tools");
Object.defineProperty(exports, "stringToUTF16UnitArray", { enumerable: true, get: function () { return tools_1.stringToUTF16UnitArray; } });
__exportStar(require("./testers"), exports);
/*
const start = performance.now();
const end = performance.now();
const timeTaken = end - start;
console.log(`Execution Time: ${timeTaken.toFixed(2)} ms`);
*/
/*
import { Schema, SchemaGuard } from "./schema";

function formatMemoryUsage(memoryUsage: any) {
    return Object.entries(memoryUsage).reduce((acc, [key, value]) => {
        // @ts-ignore
        acc[key] = `${(value / 1024 / 1024).toFixed(2)} MB`;
        return acc;
    }, {});
}

const bigdata: SchemaGuard<typeof userFormat> = {
    credential: {
        email: "test@test.ttt",
        password: "test*test"
    },
    profile: {
        firstName: "test",
        lastName: "test",
        color: "#000",
        avatar: "test",
        contact: {
            email: "testtest.ttt",
            phoneNumber: "0154852415"
        }
    },
    setting: {
        notification: true,
        theme: "DEFAULT"
    },
    sessions: [],
    permissions: []
};

let data: any = {};
let nbrElem = 10;
console.log("Number of properties :" + nbrElem);
for (let i = 0; i < nbrElem; i++) {
    data[`${i}`] = bigdata;
}

const userCredentiaFormat = new Schema({
    type: "struct",
    struct: {
        email: { type: "string", tester: { name: "isEmail" } },
        password: { type: "string" }
    }
});

const userProfileFormat = new Schema({
    type: "struct",
    struct: {
        firstName: { type: "string" },
        lastName: { type: "string" },
        color: { type: "string", regex: /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/ },
        avatar: { type: "string" },
        contact: {
            type: "struct",
            struct: {
                email: { type: "string", tester: { name: "isEmail" } },
                phoneNumber: { type: "string" }
            }
        }
    }
});

const userSettingFormat = new Schema({
    type: "struct",
    struct: {
        notification: { type: "boolean" },
        theme: { type: "string" }
    }
});

const userSessionFormat = new Schema({
    type: "struct",
    struct: {
        ip: {
            type: "struct",
            struct: {
                internal: {
                    type: "string",
                    tester: {
                        name: "isIp",
                        params: { allowIpV6: false }
                    }
                },
                external: {
                    type: "string",
                    tester: {
                        name: "isIp",
                        params: { allowIpV6: false }
                    }
                }
            }
        },
        agent: { type: "string" },
        token: { type: "string" }
    }
});

export const userFormat = new Schema({
    type: "struct",
    struct: {
        credential: userCredentiaFormat.criteria,
        profile: userProfileFormat.criteria,
        setting: userSettingFormat.criteria,
        sessions: { type: "array", max: 10, item: userSessionFormat.criteria },
        permissions: { type: "array", empty: true, item: { type: "string" } }
    }
});

const testSchema = new Schema({
    type: "record",
    key: { type: "string" },
    value: userFormat.criteria
});

const start = performance.now();
console.log(testSchema.check(data));
console.log(formatMemoryUsage(process.memoryUsage()));
const end = performance.now();
const timeTaken = end - start;
console.log(`Execution Time: ${timeTaken.toFixed(2)} ms`);

while (true) {}*/ 
