import { useMemo } from "react";

import {
  BaseCell,
  CommonCell,
  TableRowContextProvider,
} from "@widgets/table-widget";
import {
  CellContainer,
  Row,
} from "@widgets/table-widget/_components/table-view/_styles";

import { generateSummaryRow } from "./_utils/generate-summary-row.ts";

type SummaryRowProps = {
  columns: Array<CommonCell<unknown>>;
  rows: Array<unknown>;
};

export const SummaryRow = ({ rows, columns }: SummaryRowProps) => {
  const summaryRow = useMemo(() => generateSummaryRow(rows, columns), [rows]);
  return (
    <Row $isHeader>
      <TableRowContextProvider row={summaryRow}>
        {columns.map(
          ({ width, isShowTotalCount, id, customCell: Cell = BaseCell }) => (
            <CellContainer key={id} $width={width}>
              {isShowTotalCount && <Cell id={id} />}
            </CellContainer>
          ),
        )}
      </TableRowContextProvider>
    </Row>
  );
};
