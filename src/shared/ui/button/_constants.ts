import { css } from "styled-components";

import { ButtonVariant } from "@shared/ui/button/_types.ts";

export const BUTTON_VARIANTS: Record<ButtonVariant, any> = {
  primary: css`
    background-color: ${({ theme }) => theme.button.primary};
    border-color: ${({ theme }) => theme.button.primary};
  `,
  secondary: css`
    background-color: transparent;
    border-color: ${({ theme }) => theme.button.secondary};
  `,
  tertiary: css`
    color: ${({ theme }) => theme.button.primary};
    font-weight: 700;
    background-color: #000000;
    border-color: #000000;
  `,
};
