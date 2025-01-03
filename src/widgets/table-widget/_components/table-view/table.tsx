import { Text } from "@shared/ui";
import {
  Actions,
  CommonCell,
  InitialRow,
  RowLine,
  SortDirection,
} from "@widgets/table-widget";
import {
  CellContainer,
  Row,
  StyledTable,
  TableContainer,
} from "@widgets/table-widget/_components/table-view/_styles.ts";
import { SortButton } from "@widgets/table-widget/_components/table-view/components/sort-button/sort-button.tsx";
import { SummaryRow } from "@widgets/table-widget/_components/table-view/components/summary-row";
import { TableSkeletons } from "@widgets/table-widget/_components/table-view/components/table-skeletons/table-skeletons.tsx";

type TableProps<Row> = {
  columns: Array<CommonCell<unknown>>;
  isLoading: boolean;
  rows: Array<Row>;
  isShowActions?: boolean;
  onClickCopy?: (row: Row) => void;
  onClickEdit?: (row: Row) => void;
  isShowSummary?: boolean;
  onChangeSort?: (sortField: string, direction: SortDirection) => void;
  sortField?: string;
  sortDirection?: SortDirection;
};

export const Table = <Row extends InitialRow>({
  columns,
  rows,
  isLoading,
  isShowActions,
  onClickCopy,
  onClickEdit,
  isShowSummary,
  onChangeSort,
  sortField = "",
  sortDirection,
}: TableProps<Row>) => {
  const handleChangeSort = (sortField: string, direction: SortDirection) => {
    onChangeSort?.(sortField, direction);
  };

  return (
    <TableContainer>
      <StyledTable>
        <Row $isHeader>
          {columns.map(({ label, width, id }) => (
            <CellContainer key={label} $width={width}>
              {onChangeSort ? (
                <SortButton
                  sortDirection={sortField === id ? sortDirection : "default"}
                  onClick={(direction) => handleChangeSort(id, direction)}
                >
                  <Text $size={"title-m"}>{label}</Text>
                </SortButton>
              ) : (
                <Text $size={"title-m"}>{label}</Text>
              )}
            </CellContainer>
          ))}
        </Row>
        {isLoading && <TableSkeletons columns={columns} />}
        {!isLoading &&
          rows
            .slice(0, 10)
            .map((row) => (
              <RowLine
                key={row.id}
                row={row}
                columns={columns}
                actions={
                  isShowActions && (
                    <Actions
                      onClickCopy={() => onClickCopy?.(row)}
                      onClickEdit={() => onClickEdit?.(row)}
                    />
                  )
                }
              />
            ))}
        {!isLoading && isShowSummary && (
          <SummaryRow rows={rows} columns={columns} />
        )}
      </StyledTable>
    </TableContainer>
  );
};
