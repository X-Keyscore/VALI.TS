import type { SetableCriteriaTemplate, ClassicTypesTemplate, GenericTypesTemplate, FormatClassicTypesKeys, SetableCriteria, GuardedCriteria, MountedCriteria } from "../types";
export type StructDefinition<T extends FormatClassicTypesKeys = FormatClassicTypesKeys> = {
    [key: string | symbol]: SetableCriteria<T> | StructDefinition<T>;
};
export interface StructSetableCriteria<T extends FormatClassicTypesKeys = FormatClassicTypesKeys> extends SetableCriteriaTemplate<"struct"> {
    optional?: (string | symbol)[];
    struct: StructDefinition<T>;
}
export interface StructClassicTypes<T extends FormatClassicTypesKeys> extends ClassicTypesTemplate<StructSetableCriteria<T>, {}> {
}
type SimulateStruct<T> = StructSetableCriteria & {
    struct: T;
};
type MountedStruct<T extends StructDefinition> = {
    [K in keyof T]: T[K] extends SetableCriteria ? MountedCriteria<T[K]> : T[K] extends StructDefinition ? MountedCriteria<SimulateStruct<T[K]>> : T[K] extends (SetableCriteria | StructDefinition) ? MountedCriteria<SetableCriteria> : T[K];
};
export interface StructMountedCriteria<T extends StructSetableCriteria> {
    struct: MountedStruct<T['struct']>;
    acceptedKeys: (string | symbol)[];
    requiredKeys: (string | symbol)[];
}
type OmitDynamicKey<K extends PropertyKey> = {} extends Record<K, unknown> ? never : K;
type OptionalizeKeys<T, K extends (string | symbol)[] | undefined> = K extends PropertyKey[] ? Omit<T, K[number]> & Partial<Omit<T, keyof Omit<T, K[number]>>> : T;
type StructGuardedCriteria<T extends StructSetableCriteria> = {
    -readonly [K in keyof OptionalizeKeys<T['struct'], T['optional']> as OmitDynamicKey<K>]: T['struct'][K] extends SetableCriteria ? GuardedCriteria<T['struct'][K]> : T['struct'][K] extends StructDefinition ? GuardedCriteria<SimulateStruct<T['struct'][K]>> : never;
};
export interface StructGenericTypes<T extends StructSetableCriteria> extends GenericTypesTemplate<StructMountedCriteria<T>, StructGuardedCriteria<T>> {
}
export {};
