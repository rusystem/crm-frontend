import { Supplier } from "@pages/suppliers/_types.ts";
import { Status, Text } from "@shared/ui";
import { useRow } from "@widgets/table-widget";

export const StatusCell = () => {
  const { is_active } = useRow<Supplier>();

  const status = is_active ? "активен" : "неактивен";

  return (
    <Status isActive={is_active}>
      <Text $size={"body-l"}>{status}</Text>
    </Status>
  );
};
