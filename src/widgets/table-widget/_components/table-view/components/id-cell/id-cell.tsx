import { Text } from "@shared/ui";
import { CommonCell, useRow } from "@widgets/table-widget";

export const IdCell = <T extends Record<string, string>>({
  id,
}: CommonCell<T>) => {
  const row = useRow<T>();
  return <Text $size={"body-l"}>#{row[id]}</Text>;
};
