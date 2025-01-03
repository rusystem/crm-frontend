import { SortDirection } from "@widgets/table-widget/types";

import { PaginationModel } from "./table-store.types.ts";

export const INITIAL_PAGINATION: PaginationModel = {
  offset: 0,
  limit: 10,
  sort: SortDirection.Desc,
  sort_field: "id",
};
