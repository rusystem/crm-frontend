import { Supplier } from "@pages/suppliers/_types.ts";
import { Text } from "@shared/ui";
import { useRow } from "@widgets/table-widget";

export const AmountCell = () => {
  const { purchase_amount } = useRow<Supplier>();

  return <Text $size={"body-l"}>{purchase_amount} ₸</Text>;
};
