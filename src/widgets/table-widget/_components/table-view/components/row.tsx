import { ReactNode } from "react";

import {
  BaseCell,
  CommonCell,
  InitialRow,
  TableRowContextProvider,
} from "@widgets/table-widget";
import {
  ActionsContainer,
  CellContainer,
  Row,
} from "@widgets/table-widget/_components/table-view/_styles.ts";

type RowLineProps = {
  columns: Array<CommonCell<unknown>>;
  row: InitialRow;
  actions?: ReactNode;
};

export const RowLine = ({ columns, row, actions }: RowLineProps) => (
  <Row>
    <TableRowContextProvider row={row}>
      {columns.map(({ customCell: Cell = BaseCell, ...props }, index) => (
        <CellContainer key={index} $width={props.width}>
          <Cell {...props} />
        </CellContainer>
      ))}
    </TableRowContextProvider>

    {actions !== undefined && <ActionsContainer>{actions}</ActionsContainer>}
  </Row>
);
