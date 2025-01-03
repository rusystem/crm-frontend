import { observer } from "mobx-react";

import { Form } from "@pages/suppliers/_components/form.tsx";
import { PageLayout } from "@shared/ui";
import { TableWidget } from "@widgets/table-widget";

import { SUPPLIERS_API_ENDPOINT, SUPPLIER_COLUMNS } from "./_constants";
import { Supplier } from "./_types.ts";

export const SuppliersPage = observer(() => {
  const formComponent = <Form />;

  return (
    <PageLayout
      title={"Поставщики"}
      subtitle={
        "Здесь хранится Вся информация по Поставщикам компании. \n" +
        "Вы можете создавать карточки поставщиков, хранить данные по обороту средств с ними.  "
      }
    >
      <TableWidget<Supplier>
        form={formComponent}
        columns={SUPPLIER_COLUMNS}
        endpoint={SUPPLIERS_API_ENDPOINT}
        createButtonText={"Добавить поставщика"}
      />
    </PageLayout>
  );
});
