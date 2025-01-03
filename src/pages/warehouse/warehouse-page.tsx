import { observer } from "mobx-react";

import { PageLayout } from "@shared/ui";
import { TableWidget } from "@widgets/table-widget";

import { Form } from "./_components/form";
import { TABLE_COLUMNS, WAREHOUSE_API_ENDPOINT } from "./_constants.ts";
import { Warehouse } from "./_types.ts";

export const WarehousePage = observer(() => {
  return (
    <PageLayout
      title={"Склад"}
      subtitle={`Здесь хранится Вся информация по Складам компании. \n Вы можете создавать карточки склада, хранить данные по локациям и обхему хранения Ваших товаров.`}
    >
      <TableWidget<Warehouse>
        createButtonText={"Добавить склад"}
        columns={TABLE_COLUMNS}
        endpoint={WAREHOUSE_API_ENDPOINT}
        form={<Form />}
      />
    </PageLayout>
  );
});
