import { css } from "styled-components";

import { TextSize } from "@shared/ui/text/_types.ts";

export const TEXT_STYLES: Record<TextSize, ReturnType<typeof css>> = {
  "body-l": css`
    font-size: 22px;
    line-height: 31px;
  `,
  "body-m": css`
    font-size: 18px;
    line-height: 31px;
  `,
  "title-m": css`
    font-size: 22px;
    line-height: 27px;
    font-weight: 700;
  `,
  "title-l": css`
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
  `,
};

export const COLORS_STYLES: Record<string, ReturnType<typeof css>> = {
  primary: css`
    color: ${({ theme }) => theme.text.primary};
  `,
  red: css`
    color: ${({ theme }) => theme.text.red};
  `,
  green: css`
    color: ${({ theme }) => theme.text.green};
  `,
};
