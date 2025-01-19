import type { VariantCriteriaTemplate, ConcreteTypesTemplate, GenericTypesTemplate, VariantCriteria, FormatsGuard, MountedCriteria } from "../types";

export interface StructVariantCriteria extends VariantCriteriaTemplate<"struct"> {
	struct: Record<PropertyKey, VariantCriteria>;
	optionalKeys?: (string | symbol)[];
	/** @default false */
	empty?: boolean;
}

export interface StructDefaultCriteria {
	empty: boolean;
}

export interface StructMountedCriteria {
	validKeys: (string | symbol)[];
	requiredKeys: (string | symbol)[];
	struct: Record<PropertyKey, MountedCriteria<VariantCriteria>>;
}

export interface StructConcreteTypes extends ConcreteTypesTemplate<
	StructVariantCriteria,
	StructDefaultCriteria,
	StructMountedCriteria
> {}

type OmitIndexDynamic<K extends PropertyKey> = {} extends Record<K, unknown> ? never : K;

type StructGuard<T extends VariantCriteria> =
	T extends StructVariantCriteria
		? { -readonly [K in keyof T['struct'] as OmitIndexDynamic<K>]: FormatsGuard<T['struct'][K]> }
		: never;

export interface StructGenericTypes<T extends VariantCriteria> extends GenericTypesTemplate<
	StructVariantCriteria,
	StructGuard<T>
> {}