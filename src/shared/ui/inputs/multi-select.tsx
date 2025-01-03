import { useRef, useState } from "react";
import styled from "styled-components";

import { useClickOutside } from "@shared/hooks";
import { TextField } from "@shared/ui";
import { DropdownList } from "@shared/ui/dropdownList.tsx";
import { ArrowDown } from "@shared/ui/icons";

const Container = styled.div`
  position: relative;
`;

const Icon = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const StyledTextField = styled(TextField)`
  cursor: pointer;
  caret-color: transparent;
`;

const TagsList = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  max-width: 80%;
  overflow: auto;
  display: flex;
  gap: 4px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tag = styled.div`
  font-size: 16px;
  padding: 0 11px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.lightBlue};
  white-space: nowrap;
`;

type MultiSelectProps = {
  value: Array<string>;
  onChange: (value: Array<string>) => void;
  options: Array<string>;
};

export const MultiSelect = ({
  options,
  onChange,
  value = [],
}: MultiSelectProps) => {
  const [selected, setSelected] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (newId: string) => {
    const newItems = [...selected, newId];
    setSelected(newItems);
    onChange(newItems);
    handleClose();
  };

  const handleDeleteTag = (oldId: string) => {
    const newItems = selected.filter((id) => id !== oldId);
    setSelected(newItems);
    onChange(newItems);
  };

  useClickOutside(containerRef, handleClose);

  return (
    <Container ref={containerRef}>
      <StyledTextField onClick={isOpen ? handleClose : handleOpen} />
      {selected.length > 0 && (
        <TagsList>
          {selected.map((id) => (
            <Tag key={id} onClick={() => handleDeleteTag(id)}>
              {id}
            </Tag>
          ))}
        </TagsList>
      )}
      <Icon $isOpen={isOpen}>
        <img src={ArrowDown} alt="arrow" />
      </Icon>

      {isOpen && <DropdownList list={options} onClick={handleChange} />}
    </Container>
  );
};
