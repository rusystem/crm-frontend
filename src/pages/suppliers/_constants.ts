import { AmountCell } from "@pages/suppliers/_components/amount-cell.tsx";
import { BalanceCell } from "@pages/suppliers/_components/balance-cell.tsx";
import { CommonCell, IdCell } from "@widgets/table-widget";

import { StatusCell } from "./_components/status-cell.tsx";
import { Supplier, SupplierTableField } from "./_types.ts";

export const SUPPLIERS_API_ENDPOINT = "/supplier";

export const SUPPLIER_COLUMNS: Array<CommonCell<Supplier>> = [
  {
    id: SupplierTableField.Id,
    label: "ID",
    width: 75,
    customCell: IdCell,
  },
  {
    id: SupplierTableField.Name,
    label: "Наименование",
    width: 175,
  },
  {
    id: SupplierTableField.ProductTypes,
    label: "Типы товаров",
    width: 97,
    isShowTotalCount: true,
  },
  {
    id: SupplierTableField.PurchaseAmount,
    label: "Сумма закупа без НДС",
    width: 180,
    isShowTotalCount: true,
    customCell: AmountCell,
  },
  {
    id: SupplierTableField.Balance,
    label: "Баланс",
    width: 175,
    isShowTotalCount: true,
    customCell: BalanceCell,
  },
  {
    id: SupplierTableField.ContractNumber,
    label: "Договор",
    width: 250,
  },
  {
    id: SupplierTableField.IsActive,
    label: "Статус",
    width: 140,
    customCell: StatusCell,
  },
];
