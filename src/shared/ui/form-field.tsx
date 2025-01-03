import { ReactNode } from "react";
import styled from "styled-components";

import { Text } from "@shared/ui/text";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
`;

const FieldContainer = styled.div`
  width: 410px;
`;

const StyledLabel = styled.label`
  width: 300px;
`;

type FormFieldProps = {
  label: string;
  children: ReactNode;
  className?: string;
  id: string;
};

export const FormField = ({
  children,
  label,
  className,
  id,
}: FormFieldProps) => (
  <Container className={className}>
    <StyledLabel htmlFor={id}>
      <Text $size={"title-m"}>{label}</Text>
    </StyledLabel>
    <FieldContainer>{children}</FieldContainer>
  </Container>
);
