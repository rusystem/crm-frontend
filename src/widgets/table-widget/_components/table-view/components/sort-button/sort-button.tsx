import { PropsWithChildren } from "react";
import styled from "styled-components";

import { SortDirection } from "@widgets/table-widget";
import { SORT_ICONS } from "@widgets/table-widget/_components/table-view/components/sort-button/_constants.ts";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
`;

type SortButtonProps = {
  onClick: (direction: SortDirection) => void;
  sortDirection?: SortDirection | "default";
};

export const SortButton = ({
  sortDirection = "default",
  onClick,
  children,
}: PropsWithChildren<SortButtonProps>) => {
  const handleClick = () => {
    const newDirection =
      sortDirection === "default" || sortDirection === SortDirection.Desc
        ? SortDirection.Asc
        : SortDirection.Desc;

    onClick(newDirection);
  };

  return (
    <StyledButton onClick={handleClick}>
      {children}
      <img src={SORT_ICONS[sortDirection]} alt="" />
    </StyledButton>
  );
};
