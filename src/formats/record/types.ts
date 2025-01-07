import type { FormatsCriteria, FormatsCriteriaMap, FormatsGuard, MountedCriteria, TemplateContext, TemplateCriteria } from "../types";

type RecordCriteriaKeys = FormatsCriteriaMap["string" | "boolean"];

export interface RecordCriteria extends TemplateCriteria<"record"> {
	key: RecordCriteriaKeys;
	value: FormatsCriteria | MountedCriteria<FormatsCriteria>;
	min?: number;
	max?: number;
	empty?: boolean;
}

type RecordGuard<T extends FormatsCriteria> =
	T extends RecordCriteria
		? FormatsGuard<T['key']> extends infer K
			? K extends string | symbol
				? { [P in K]: FormatsGuard<T['value']> }
				: never
			: never
		: never;

export type RecordContext<T extends FormatsCriteria> = TemplateContext<
	RecordCriteria,
	RecordGuard<T>,
	{
		empty: boolean;
	},
	{
		key: MountedCriteria<RecordCriteriaKeys>;
		value: MountedCriteria<FormatsCriteria>;
	}
>