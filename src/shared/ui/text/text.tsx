import styled from "styled-components";

import { COLORS_STYLES, TEXT_STYLES } from "@shared/ui/text/_constants.ts";
import { TextProps } from "@shared/ui/text/_types.ts";

export const Text = styled.span<TextProps>`
  color: ${({ theme }) => theme.text.primary};
  ${({ $size }) => TEXT_STYLES[$size]}
  ${({ $color = "primary" }) => COLORS_STYLES[$color]}
`;
