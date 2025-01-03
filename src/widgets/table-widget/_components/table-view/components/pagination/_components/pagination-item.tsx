import styled from "styled-components";

const Button = styled.button<{ $isActive: boolean }>`
  padding: 0;
  width: 32px;
  height: 35px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.text.primary};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.5)};
`;

type PaginationItemProps = {
  isActive: boolean;
  onClick: (page: number) => void;
  page: number;
  disabled?: boolean;
};

export const PaginationItem = ({
  isActive,
  onClick,
  page,
  disabled,
}: PaginationItemProps) => {
  const handleClick = () => {
    if (isActive || disabled) return;
    onClick(page);
  };

  return (
    <Button disabled={disabled} $isActive={isActive} onClick={handleClick}>
      {page}
    </Button>
  );
};
