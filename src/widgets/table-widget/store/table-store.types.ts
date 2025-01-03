import { SortDirection } from "@widgets/table-widget";

export type PaginationModel = {
  offset: number;
  limit: number;
  sort: SortDirection;
  sort_field: string;
};

export type FiltersModel = Record<string, unknown>;

export enum FormMode {
  Create = "create",
  Edit = "edit",
  Copy = "copy",
}
