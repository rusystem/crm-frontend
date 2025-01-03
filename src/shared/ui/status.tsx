import { PropsWithChildren } from "react";
import styled from "styled-components";

const Container = styled.div<{ $isActive: boolean }>`
  padding: 2px 7px;
  border-radius: 6px;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.green : theme.red};
  margin: 0 auto;
  display: inline-block;
`;

type StatusProps = {
  isActive: boolean;
};

export const Status = ({
  isActive,
  children,
  ...rest
}: PropsWithChildren<StatusProps>) => (
  <Container {...rest} $isActive={isActive}>
    {children}
  </Container>
);
