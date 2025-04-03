import type { Format, SetableCriteria, StaticDefaultCriteria } from "./types";
import { BooleanFormat } from "./boolean/format";
import { SymbolFormat } from "./symbol/format";
import { NumberFormat } from "./number/format";
import { StringFormat } from "./string/format";
import { SimpleFormat } from "./simple/format";
import { RecordFormat } from "./record/format";
import { StructFormat } from "./struct/format";
import { ArrayFormat } from "./array/format";
import { TupleFormat } from "./tuple/format";
import { UnionFormat } from "./union/format";

export const staticDefaultCriteria: StaticDefaultCriteria = {
	nullable: false,
	undefinable: false
}

export const formatNatives = {
	boolean: BooleanFormat,
	symbol: SymbolFormat,
	number: NumberFormat,
	string: StringFormat,
	simple: SimpleFormat,
	record: RecordFormat,
	struct: StructFormat,
	array: ArrayFormat,
	tuple: TupleFormat,
	union: UnionFormat
} satisfies Record<string, Format<SetableCriteria>>;