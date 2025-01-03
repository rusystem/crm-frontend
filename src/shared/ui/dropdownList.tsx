import styled from "styled-components";

import { Text } from "@shared/ui/text";

const Dropdown = styled.div`
  position: absolute;
  bottom: -6px;
  transform: translateY(100%);
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #000;
  background-color: #fff;
  z-index: 1;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`;

const OptionButton = styled.button``;

type DropdownListProps = {
  onClick: (item: string) => void;
  list: Array<string>;
};

export const DropdownList = ({ onClick, list }: DropdownListProps) => {
  return (
    <Dropdown>
      {list.map((item) => (
        <OptionButton key={item} onClick={() => onClick(item)}>
          <Text $size={"body-m"}>{item}</Text>
        </OptionButton>
      ))}
    </Dropdown>
  );
};
