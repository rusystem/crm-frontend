import { ClipLoader } from "react-spinners";

import {
  ButtonContent,
  ButtonElement,
  Loader,
  Slot,
} from "@shared/ui/button/_styles.ts";
import { ButtonProps } from "@shared/ui/button/_types.ts";

export const Button = ({
  rightSlot,
  leftSlot,
  children,
  isLoading,
  disabled,
  ...rest
}: ButtonProps) => (
  <ButtonElement {...rest} disabled={disabled || isLoading}>
    <ButtonContent $isLoading={isLoading}>
      {leftSlot && <Slot>{leftSlot}</Slot>}
      {children}
      {rightSlot && <Slot>{rightSlot}</Slot>}
    </ButtonContent>
    {isLoading && (
      <Loader>
        <ClipLoader color="#fff" loading size={28} />
      </Loader>
    )}
  </ButtonElement>
);
