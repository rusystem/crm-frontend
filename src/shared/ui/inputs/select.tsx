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

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: Array<string>;
};

export const Select = ({ options, onChange, value }: SelectProps) => {
  const [selected, setSelected] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (id: string) => {
    setSelected(id);
    onChange(id);
    handleClose();
  };

  useClickOutside(containerRef, handleClose);

  return (
    <Container ref={containerRef}>
      <StyledTextField
        onClick={isOpen ? handleClose : handleOpen}
        value={selected}
      />
      <Icon $isOpen={isOpen}>
        <img src={ArrowDown} alt="arrow" />
      </Icon>

      {isOpen && <DropdownList list={options} onClick={handleChange} />}
    </Container>
  );
};
