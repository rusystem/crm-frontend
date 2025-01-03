import { SortAscIcon, SortDescIcon, SortIcon } from "@shared/ui/icons";
import { SortDirection } from "@widgets/table-widget/types.ts";

export const SORT_ICONS = {
  [SortDirection.Asc]: SortAscIcon,
  [SortDirection.Desc]: SortDescIcon,
  default: SortIcon,
};
