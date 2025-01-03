import { Warehouse } from "@pages/warehouse/_types.ts";
import { Text } from "@shared/ui";
import { useRow } from "@widgets/table-widget";

export const MaxOccupancyCell = () => {
  const { max_capacity } = useRow<Warehouse>();
  return <Text $size={"body-l"}>{max_capacity} м²</Text>;
};
