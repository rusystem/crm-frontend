import styled from "styled-components";

import { BUTTON_VARIANTS } from "./_constants.ts";
import { ButtonProps } from "./_types.ts";

export const ButtonElement = styled.button<ButtonProps>`
  position: relative;
  border: 1px solid;
  border-radius: 6px;
  cursor: pointer;
  font-size: 24px;
  line-height: 29px;
  padding: 16px 19px;

  ${({ $variant = "primary" }) => BUTTON_VARIANTS[$variant]};
`;

export const Slot = styled.div`
  width: 29px;
  height: 29px;
`;

export const ButtonContent = styled.div<{ $isLoading?: boolean }>`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  opacity: ${({ $isLoading }) => ($isLoading ? 0 : 1)};
`;

export const Loader = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
