import { observer } from "mobx-react";
import { ReactNode, useEffect, useState } from "react";

import { asyncData } from "@shared/lib";
import { Button } from "@shared/ui/button";
import { FiltersIcon } from "@shared/ui/icons";
import { Form } from "@widgets/table-widget/_components/form/form.tsx";
import { TableView } from "@widgets/table-widget/_components/table-view/table-view.tsx";
import { Table } from "@widgets/table-widget/_components/table-view/table.tsx";
import {
  ButtonsContainer,
  WidgetContainer,
} from "@widgets/table-widget/_styled.ts";
import { FormMode } from "@widgets/table-widget/store/table-store.types.ts";

import { TableStore } from "./store";
import { CommonCell, InitialRow } from "./types.ts";

type TableWidget<T> = {
  columns: Array<CommonCell<T>>;
  endpoint: string;
  createButtonText: string;
  form: ReactNode;
};

export const TableWidget = observer(function <Row extends InitialRow>({
  columns,
  endpoint,
  createButtonText,
  form,
}: TableWidget<Row>) {
  const [tableStore] = useState(() => new TableStore<Row>(endpoint));

  useEffect(() => {
    tableStore.fetchData();
  }, []);

  const handleClearMode = () => {
    tableStore.setFormMode(null);
  };

  const isLoading = asyncData.isLoading(tableStore.rows);

  const isShowTable =
    !tableStore.currentRow && tableStore.mode !== FormMode.Create;

  const isShowSingleLineTable =
    tableStore.mode === FormMode.Edit || tableStore.mode === FormMode.Copy;

  return (
    <WidgetContainer>
      <ButtonsContainer>
        <Button
          disabled={isLoading}
          $variant={"secondary"}
          leftSlot={<img src={FiltersIcon} alt="filters" />}
        >
          Фильтры
        </Button>
        <Button
          disabled={isLoading}
          onClick={tableStore.openCreateForm}
          $variant={"primary"}
        >
          {createButtonText}
        </Button>
      </ButtonsContainer>
      {tableStore.currentRow && isShowSingleLineTable && (
        <Table
          isLoading={false}
          columns={columns}
          rows={[tableStore.currentRow]}
        />
      )}
      {isShowTable && (
        <TableView
          pagination={tableStore.pagination}
          totalCount={tableStore.totalCount}
          onChangePage={tableStore.setPage}
          result={tableStore.getRows}
          columns={columns}
          onClickEdit={tableStore.editRow}
          onClickCopy={tableStore.copyRow}
          onChangeSort={tableStore.setSort}
        />
      )}
      {tableStore.mode !== null && (
        <Form<Row>
          key={tableStore.mode}
          form={form}
          onCancel={handleClearMode}
          onSubmit={tableStore.submitForm}
          defaultValues={tableStore.currentRow}
        />
      )}
    </WidgetContainer>
  );
});
