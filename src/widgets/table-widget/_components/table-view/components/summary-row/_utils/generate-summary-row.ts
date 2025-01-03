import { CommonCell } from "@widgets/table-widget";

type SummaryRow = {
  id: number;
} & Record<string, string | number>;

export function generateSummaryRow(
  rows: Array<unknown>,
  columns: Array<CommonCell<unknown>>,
): SummaryRow {
  const totalColumns = columns
    .filter((column) => column.isShowTotalCount)
    .map(({ id }) => id);

  return rows.reduce<SummaryRow>(
    (totals, row) => {
      for (const key of totalColumns) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const value = row[key];
        const num = typeof value === "number" ? value : 1;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        totals[key] = (totals[key] ?? 0) + num;
      }
      return totals;
    },
    { id: 0 },
  );
}
