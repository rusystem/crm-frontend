import { PropsWithChildren, createContext, useContext } from "react";

import { InitialRow } from "@widgets/table-widget";

const TableRowContext = createContext({});

export const useRow = <T,>(): T => {
  const context = useContext(TableRowContext);
  if (!context) {
    throw new Error("useRow must be used within a TableRowProvider");
  }

  return context as T;
};

export const TableRowContextProvider = <T extends InitialRow>({
  children,
  row,
}: PropsWithChildren<{ row: T }>) => (
  <TableRowContext.Provider value={row}>{children}</TableRowContext.Provider>
);
