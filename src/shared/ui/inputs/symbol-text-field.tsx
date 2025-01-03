import { ComponentProps, ReactNode } from "react";
import styled from "styled-components";

import { Text, TextField } from "@shared/ui";
import { Color } from "@shared/ui/text/_types.ts";

const Container = styled.div`
  position: relative;
`;

const StyledTextField = styled(TextField)<{ $color?: Color }>`
  text-align: right;
  padding-right: 48px;
  font-weight: 700;
  color: ${({ $color, theme }) => theme.text[$color || "primary"]};
`;

const Symbol = styled(Text)`
  position: absolute;
  right: 16px;
  top: 1px;
`;

type TextFieldMarkedProps = ComponentProps<typeof StyledTextField> & {
  symbol: ReactNode;
  $color?: Color;
};

export const SymbolTextField = ({
  $color,
  symbol,
  ...props
}: TextFieldMarkedProps) => (
  <Container>
    <StyledTextField {...props} $color={$color} />

    <Symbol $color={$color} $size={"title-m"}>
      {symbol}
    </Symbol>
  </Container>
);
