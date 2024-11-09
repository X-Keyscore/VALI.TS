import type { FormatsCriteria, FormatsInstance } from "../formats";
export type SchemaTreeNodeFormat = {
    format: FormatsInstance;
};
export type SchemaTreeNodeBranch = {
    branchType: "entry";
    branch: Record<string, SchemaTreeNode>;
} | {
    branchType: "array";
    branch: Array<SchemaTreeNode>;
} | {
    branchType: "onely";
    branch: SchemaTreeNode;
} | {
    branchType: "empty";
    branch: null;
};
export type SchemaTreeNode = SchemaTreeNodeFormat & SchemaTreeNodeBranch;
export type InputSchema = FormatsCriteria;
export type BuildedSchema = SchemaTreeNode;
export interface CheckedSchema {
    error: {
        depth: number;
        code: string;
        label: string | undefined;
    } | null;
}