import { ReactNode } from "react";

export type FormProps<Row> = {
  form: ReactNode;
  defaultValues?: Row;
  onSubmit: (data: Row) => Promise<void>;
  onCancel: () => void;
};
