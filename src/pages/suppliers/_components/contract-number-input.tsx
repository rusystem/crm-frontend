import { useState } from "react";
import styled from "styled-components";

import { BaseDatePicker, TextField } from "@shared/ui";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const StyledTextField = styled(TextField)`
  width: 115px;
`;

type ContractNumberInputProps = {
  value: string;
};

export const ContractNumberInput = ({ value }: ContractNumberInputProps) => {
  const [newVal] = useState<string>(value);

  return (
    <Container>
      <StyledTextField name={""} />
      <BaseDatePicker value={new Date(newVal)} onChange={() => {}} />
    </Container>
  );
};
