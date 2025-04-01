import type { BooleanClassicTypes, BooleanGenericTypes, BooleanSetableCriteria } from "./boolean/types";
import type { AtomicClassicTypes, AtomicGenericTypes, AtomicSetableCriteria } from "./atomic/types";
import type { NumberClassicTypes, NumberGenericTypes, NumberSetableCriteria } from "./number/types";
import type { RecordClassicTypes, RecordGenericTypes, RecordSetableCriteria } from "./record/types";
import type { StringClassicTypes, StringGenericTypes, StringSetableCriteria } from "./string/types";
import type { StructClassicTypes, StructGenericTypes, StructSetableCriteria } from "./struct/types";
import type { SymbolClassicTypes, SymbolGenericTypes, SymbolSetableCriteria } from "./symbol/types";
import type { ArrayClassicTypes, ArrayGenericTypes, ArraySetableCriteria } from "./array/types";
import type { TupleClassicTypes, TupleGenericTypes, TupleSetableCriteria } from "./tuple/types";
import type { UnionClassicTypes, UnionGenericTypes, UnionSetableCriteria } from "./union/types";
import type { PathSegments, MountingChunk, CheckingChunk, CheckingReject } from "../services";
import { formatNatives } from "./formats";
import { nodeSymbol } from "../services";

// TUNABLE CRITERIA TEMPLATE

export interface SetableCriteriaBase {
	label?: string;
	message?: string;
	/** @default false */
	nullable?: boolean;
	/** @default false */
	undefinable?: boolean;
}

/**
 * Defines the criteria users must or can specify.
 * 
 * @template T The name assigned to the format when the user selects the type.
 */
export interface SetableCriteriaTemplate<T extends string> extends SetableCriteriaBase {
	type: T;
}

// FORMATS CONCRET TYPES

/**
 * @template T Extended interface of `SetableCriteriaTemplate` that
 * defines the format criteria users must or can specify.
 * 
 * @template U Default properties for those defined in `T` that must
 * be specified in the superclass reference within the format class.
 */
export interface ClassicTypesTemplate<
	Setable extends SetableCriteriaTemplate<string>,
	Default extends Partial<Setable>
> {
	setableCriteria: Setable;
	defaultCriteria: Default;
}

export interface FormatClassicTypes<T extends keyof FormatClassicTypes = keyof FormatClassicTypes<any>> {
	array: ArrayClassicTypes<T>;
	atomic: AtomicClassicTypes;
	boolean: BooleanClassicTypes;
	number: NumberClassicTypes;
	record: RecordClassicTypes<T>;
	string: StringClassicTypes;
	struct: StructClassicTypes<T>;
	symbol: SymbolClassicTypes;
	tuple: TupleClassicTypes<T>;
	union: UnionClassicTypes<T>;
}

export type FormatClassicTypesKeys = keyof FormatClassicTypes;

// FORMATS GENERIC TYPES

/**
 * @template Mounted A type that takes a generic parameter extending
 * 'SetableCriteria'. It is used to determine the type validated
 * by the format it represents, based on the criteria defined
 * by the user.
 * 
 * @template Guarded Properties that will be added to or override
 * the format criteria after the mounting process.
 */
export interface GenericTypesTemplate<Mounted, Guarded> {
	mountedCriteria: Mounted;
	guardedCriteria: Guarded;
}

export interface FormatGenericTypes<T extends SetableCriteria = SetableCriteria> {
	array: T extends ArraySetableCriteria ? ArrayGenericTypes<T> : never;
	atomic: T extends AtomicSetableCriteria ? AtomicGenericTypes<T> : never;
	boolean: T extends BooleanSetableCriteria ? BooleanGenericTypes : never
	number: T extends NumberSetableCriteria ? NumberGenericTypes<T> : never
	record: T extends RecordSetableCriteria ? RecordGenericTypes<T> : never
	string: T extends StringSetableCriteria ? StringGenericTypes<T> : never;
	struct: T extends StructSetableCriteria ? StructGenericTypes<T> : never;
	symbol: T extends SymbolSetableCriteria ? SymbolGenericTypes : never;
	tuple: T extends TupleSetableCriteria ? TupleGenericTypes<T> : never;
	union: T extends UnionSetableCriteria ? UnionGenericTypes<T> : never;
}

// SETABLE CRITERIA

export type SetableCriteria<T extends keyof FormatClassicTypes = keyof FormatClassicTypes> =
	FormatClassicTypes<T>[T]['setableCriteria'];

// DEFAULT CRITERIA

export type DefaultCriteria<T extends keyof FormatClassicTypes = keyof FormatClassicTypes> =
	FormatClassicTypes<T>[T]['defaultCriteria']

// MOUNTED CRITERIA

export interface StaticDefaultCriteria {
	nullable: boolean;
	undefinable: boolean;
}

export interface StaticMountedCriteria {
	[nodeSymbol]: {
		partPaths: PathSegments;
		childNodes: Set<MountedCriteria>;
	};
}

export type MountedCriteria<T extends SetableCriteria = SetableCriteria> = 
	T extends any ?
		& StaticDefaultCriteria
		& FormatClassicTypes[T['type']]['defaultCriteria']
		& Omit<T, keyof FormatGenericTypes<T>[T['type']]['mountedCriteria']>
		& FormatGenericTypes<T>[T['type']]['mountedCriteria']
		& StaticMountedCriteria
	: never;

// GUARDED CRITERIA

export type GuardedCriteria<T extends SetableCriteria = SetableCriteria> = 
	FormatGenericTypes<T>[keyof FormatGenericTypes]['guardedCriteria'];

// FORMAT

/**
 * @template T Extended interface of `SettableCriteriaTemplate` that
 * defines the format criteria users must or can specify.
 * @template U Custom members you want to add to the format.
 */
export type Format<
	T extends SetableCriteria,
	U extends Record<string, any> = {},
> = {
	defaultCriteria: FormatClassicTypes[T['type']]['defaultCriteria'];
	mount?(
		chunk: MountingChunk,
		criteria: T
	): void;
    check(
		chunk: CheckingChunk,
        criteria: MountedCriteria<T>,
        value: unknown
    ): CheckingReject['code'] | null;
} & U;

export type FormatNatives = typeof formatNatives;