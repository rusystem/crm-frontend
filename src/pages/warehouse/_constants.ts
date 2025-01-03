import {
  CommonCell,
  FormField,
  FormFieldType,
  IdCell,
} from "@widgets/table-widget";

import { CurrentOccupancyCell } from "./_components/current-occuppancy-cell";
import { MaxOccupancyCell } from "./_components/max-occupancy-cell";
import { Warehouse, WarehouseTableField } from "./_types.ts";

export const WAREHOUSE_API_ENDPOINT = "/warehouse";

export const TABLE_COLUMNS: Array<CommonCell<Warehouse>> = [
  {
    label: "ID",
    id: WarehouseTableField.Id,
    width: 70,
    customCell: IdCell,
  },
  {
    label: "Наименование ",
    id: WarehouseTableField.Name,
    width: 190,
    isShowTotalCount: true,
  },
  {
    label: "Адрес",
    id: WarehouseTableField.Address,
    width: 230,
  },
  {
    label: "Макс. вместимость кв. метры ",
    id: WarehouseTableField.MaxCapacity,
    width: 250,
    isShowTotalCount: true,
    customCell: MaxOccupancyCell,
  },
  {
    label: "Заполнено кв. метры ",
    id: WarehouseTableField.CurrentOccupancy,
    width: 145,
    customCell: CurrentOccupancyCell,
    isShowTotalCount: true,
  },
  {
    label: "Ответственный",
    id: WarehouseTableField.ResponsibilityPerson,
    width: 200,
  },
];

export const FIELDS: Array<FormField> = [
  {
    name: WarehouseTableField.Name,
    label: "Наименование",
    type: FormFieldType.Text,
  },
  {
    name: WarehouseTableField.Country,
    label: "Страна",
    type: FormFieldType.Select,
  },
  {
    name: WarehouseTableField.Region,
    label: "Регион",
    type: FormFieldType.Select,
  },
  {
    name: WarehouseTableField.Address,
    label: "Адрес скалада",
    type: FormFieldType.Text,
  },
  {
    name: WarehouseTableField.ResponsibilityPerson,
    label: "Контактное лицо",
    type: FormFieldType.Select,
  },
  {
    name: WarehouseTableField.Phone,
    label: "Телефон",
    type: FormFieldType.Phone,
  },
  {
    name: WarehouseTableField.Email,
    label: "Email",
    type: FormFieldType.Email,
  },
  {
    name: WarehouseTableField.MaxCapacity,
    label: "Max. вместимость",
    type: FormFieldType.Number,
  },
  {
    name: WarehouseTableField.CurrentOccupancy,
    label: "Текущая вместимость",
    type: FormFieldType.Number,
  },
];
