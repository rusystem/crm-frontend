import styled from "styled-components";

import { Color } from "@shared/ui/text/_types";

import { CommonInputStyle } from "./_styles";

export const Textarea = styled.textarea<{ $color?: Color }>`
  ${CommonInputStyle};
  padding: 10px 16px;
  resize: none;
`;
