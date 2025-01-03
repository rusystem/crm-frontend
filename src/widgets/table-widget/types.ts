import { ComponentType } from "react";

export enum SortDirection {
  Asc = "asc",
  Desc = "desc",
}

export type CommonCell<T> = {
  id: string;
  width?: number;
  label?: string;
  customCell?: ComponentType<CommonCell<T>>;
  isShowTotalCount?: boolean;
};

export enum FormFieldType {
  Text = "text",
  Number = "number",
  Date = "date",
  Email = "email",
  Url = "url",
  Select = "select",
  MultiSelect = "multiselect",
  Textarea = "textarea",
  File = "file",
  Phone = "phone",
}

export type FormField = {
  name: string;
  label: string;
  type: FormFieldType;
  customField?: ComponentType<FormField>;
};

export type InitialRow = {
  id: number;
};
