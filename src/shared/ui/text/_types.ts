type BodySize = "body-l" | "body-m";
type TitleSize = "title-l" | "title-m";

export type Color = "green" | "red" | "primary" | "blue";

export type TextSize = BodySize | TitleSize;

export type TextProps = {
  $size: TextSize;
  $color?: Color;
};
