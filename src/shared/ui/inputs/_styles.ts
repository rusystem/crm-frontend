import { css } from "styled-components";

import { Color } from "@shared/ui/text/_types.ts";

export const CommonInputStyle = css<{ $color?: Color }>`
  border: 1px solid #000000;
  width: 100%;
  padding: 0 16px;
  color: ${({ $color = "primary", theme }) => theme.text[$color]};
  font-size: 22px;
`;
