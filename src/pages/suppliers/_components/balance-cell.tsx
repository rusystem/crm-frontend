import { Supplier } from "@pages/suppliers/_types.ts";
import { Text } from "@shared/ui";
import { useRow } from "@widgets/table-widget";

export const BalanceCell = () => {
  const { balance } = useRow<Supplier>();

  return (
    <Text $color={balance > 0 ? "green" : "red"} $size={"body-l"}>
      {balance} ₸
    </Text>
  );
};
