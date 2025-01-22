import { describe, it } from "node:test";
import assert from "node:assert";

import { isDomain } from "../../../dist/index.js";

describe("Testers string 'isDomain' function", () => {
	it("basic", () => {
		assert.strictEqual(isDomain(""), false);
		assert.strictEqual(isDomain("-foo.bar"), false);
		assert.strictEqual(isDomain("foo-.bar"), false);
		assert.strictEqual(isDomain("foo.-bar"), false);
		assert.strictEqual(isDomain("foo.bar-"), false);
		assert.strictEqual(isDomain("foo#bar"), false);
		assert.strictEqual(isDomain("1-1"), false);
		assert.strictEqual(isDomain("a.1"), false);

		assert.strictEqual(isDomain("foo"), true);
		assert.strictEqual(isDomain("foo.bar.foo.bar"), true);
		assert.strictEqual(isDomain("a-1"), true);
		assert.strictEqual(isDomain("f-b"), true);
		assert.strictEqual(isDomain("a.b"), true);
		assert.strictEqual(isDomain("A.B"), true);
	});
});