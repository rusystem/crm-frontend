import { ChangeEvent, HTMLAttributes } from "react";
import styled from "styled-components";

import { Color } from "@shared/ui/text/_types.ts";

import { CommonInputStyle } from "./_styles";

const Input = styled.input<{ $color?: Color }>`
  ${CommonInputStyle};
`;

type BaseInputProps = HTMLAttributes<HTMLInputElement>;

type TextFieldProps = BaseInputProps & {
  isNumOnly?: boolean;
  $color?: Color;
  name?: string;
  value?: any;
};

export const TextField = ({
  isNumOnly = false,
  name,
  value,
  ...rest
}: TextFieldProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNumOnly) {
      e.target.value = e.target.value
        .replace(/[^0-9-]/g, "")
        .replace(/(?!^)-/g, "");
    }

    rest.onChange?.(e);
  };

  return (
    <Input
      {...rest}
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
};
