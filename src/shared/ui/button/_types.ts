import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = BaseButtonProps & {
  $variant?: ButtonVariant;
  rightSlot?: ReactNode;
  leftSlot?: ReactNode;
  isLoading?: boolean;
};
