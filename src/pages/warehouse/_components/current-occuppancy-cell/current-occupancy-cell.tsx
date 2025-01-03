import { Warehouse } from "@pages/warehouse/_types.ts";
import { Text } from "@shared/ui";
import { useRow } from "@widgets/table-widget";

export const CurrentOccupancyCell = () => {
  const { max_capacity, current_occupancy } = useRow<Warehouse>();
  return (
    <Text
      $size={"body-l"}
      $color={current_occupancy > max_capacity ? "red" : "green"}
    >
      {current_occupancy} м²
    </Text>
  );
};
