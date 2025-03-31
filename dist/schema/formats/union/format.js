"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnionFormat = void 0;
exports.UnionFormat = {
    defaultCriteria: {
        empty: false
    },
    mount(chunk, criteria) {
        for (let i = 0; i < criteria.union.length; i++) {
            chunk.push({
                node: criteria.union[i],
                partPaths: {
                    explicit: ["union", i],
                    implicit: []
                }
            });
        }
    },
    check(chunk, criteria, data) {
        const unionLength = criteria.union.length;
        const ctx = {
            hooked: unionLength,
            rejected: 0
        };
        const hooks = {
            onAccept() {
                return ({
                    action: "IGNORE",
                    target: "CHUNK"
                });
            },
            onReject() {
                ctx.rejected++;
                if (ctx.rejected === ctx.hooked) {
                    return ({
                        action: "REJECT",
                        code: "DATA_UNSATISFIED_UNION"
                    });
                }
                return ({
                    action: "IGNORE",
                    target: "BRANCH"
                });
            }
        };
        for (let i = 0; i < unionLength; i++) {
            chunk.push({
                hooks,
                data,
                node: criteria.union[i]
            });
        }
        return (null);
    }
};
