import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

import { TextField } from "@shared/ui";
import { CalendarIcon } from "@shared/ui/icons";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  & .react-datepicker-wrapper {
    width: 100%;
  }
`;

type BaseDatePickerProps = {
  value?: Date;
  onChange: (date: string) => void;
};

export const BaseDatePicker = ({ value, onChange }: BaseDatePickerProps) => {
  const [startDate, setStartDate] = useState<Date | null>(
    value ? new Date(value) : new Date(),
  );

  const handleChangeDate = (date: Date | null) => {
    if (date) {
      setStartDate(date);
      onChange(date.toISOString());
    }
  };

  return (
    <Container>
      <img src={CalendarIcon} alt="calendar" />

      <DatePicker
        selected={startDate}
        dateFormat="dd/MM/yyyy"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        customInput={<TextField />}
        onChange={handleChangeDate}
      />
    </Container>
  );
};
