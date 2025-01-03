import { AsyncResult, asyncData } from "@shared/lib";
import {
  CommonCell,
  InitialRow,
  PaginationModel,
  SortDirection,
} from "@widgets/table-widget";
import { Pagination } from "@widgets/table-widget/_components/table-view/components/pagination/pagination.tsx";

import { Table } from "./table";

type TableViewProps<Row extends InitialRow> = {
  columns: Array<CommonCell<Row>>;
  result: AsyncResult<Array<Row> | null>;
  totalCount: number;
  onClickCopy: (row: Row) => void;
  onClickEdit: (row: Row) => void;
  pagination: PaginationModel;
  onChangePage: (page: number) => void;
  onChangeSort: (sortField: string, direction: SortDirection) => void;
};

export const TableView = <Row extends InitialRow>({
  result,
  totalCount,
  columns,
  onClickCopy,
  onClickEdit,
  pagination,
  onChangePage,
  onChangeSort,
}: TableViewProps<Row>) => {
  if (asyncData.isError(result)) {
    return;
  }

  const isLoading = asyncData.isLoading(result);

  const rows = !isLoading ? (result.data ?? []).slice(0, pagination.limit) : [];

  const isEmpty = rows.length === 0;

  if (isEmpty && !isLoading) {
    return null;
  }

  return (
    <>
      <Table
        isLoading={isLoading}
        isShowActions
        isShowSummary
        rows={rows}
        columns={columns}
        onClickCopy={onClickCopy}
        onClickEdit={onClickEdit}
        sortField={pagination.sort_field}
        onChangeSort={onChangeSort}
        sortDirection={pagination.sort}
      />
      <Pagination
        isLoading={isLoading}
        onClick={onChangePage}
        pagination={pagination}
        totalCount={totalCount}
      />
    </>
  );
};
