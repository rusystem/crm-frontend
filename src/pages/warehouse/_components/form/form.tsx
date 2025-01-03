import { ChangeEvent } from "react";
import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";

import { Warehouse, WarehouseTableField } from "@pages/warehouse/_types";
import { SYMBOLS } from "@shared/constants/symbols.ts";
import {
  FormField,
  Select,
  SymbolTextField,
  TextField,
  Textarea,
} from "@shared/ui";

const FormContainer = styled.div``;

export const Form = () => {
  const { control, watch } = useFormContext<Warehouse>();

  const currentOccupancy = watch(WarehouseTableField.CurrentOccupancy);
  const maxOccupancy = watch(WarehouseTableField.MaxCapacity);

  const isMoreThanMax = currentOccupancy > maxOccupancy;

  return (
    <FormContainer>
      <Controller
        control={control}
        render={({ field }) => (
          <FormField id={WarehouseTableField.Name} label={"Наименование"}>
            <TextField {...field} />
          </FormField>
        )}
        name={WarehouseTableField.Name}
      />

      <Controller
        control={control}
        render={({ field }) => (
          <FormField id={WarehouseTableField.Country} label={"Страна"}>
            <Select {...field} options={["Казахстан", "Россия"]} />
          </FormField>
        )}
        name={WarehouseTableField.Country}
      />

      <Controller
        control={control}
        render={({ field }) => (
          <FormField id={WarehouseTableField.Region} label={"Регион"}>
            <Select {...field} options={["Казахстан", "Россия"]} />
          </FormField>
        )}
        name={WarehouseTableField.Region}
      />

      <Controller
        control={control}
        render={({ field }) => (
          <FormField id={WarehouseTableField.Address} label={"Адрес скалада"}>
            <TextField {...field} />
          </FormField>
        )}
        name={WarehouseTableField.Address}
      />

      <Controller
        control={control}
        render={({ field }) => (
          <FormField
            id={WarehouseTableField.ResponsibilityPerson}
            label={"Контактное лицо"}
          >
            <TextField {...field} />
          </FormField>
        )}
        name={WarehouseTableField.ResponsibilityPerson}
      />

      <Controller
        control={control}
        render={({ field }) => (
          <FormField id={WarehouseTableField.Phone} label={"Телефон"}>
            <TextField {...field} />
          </FormField>
        )}
        name={WarehouseTableField.Phone}
      />
      <Controller
        control={control}
        render={({ field }) => (
          <FormField id={WarehouseTableField.Email} label={"Электронная почта"}>
            <TextField {...field} />
          </FormField>
        )}
        name={WarehouseTableField.Email}
      />

      <Controller
        defaultValue={0}
        control={control}
        render={({ field }) => {
          const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            const formatedValue = parseFloat(e.target.value);
            if (Number.isNaN(formatedValue)) {
              field.onChange(0);
              return;
            }
            field.onChange(formatedValue);
          };

          return (
            <FormField
              id={WarehouseTableField.MaxCapacity}
              label={"Max. вместимость"}
            >
              <SymbolTextField
                isNumOnly
                {...field}
                symbol={SYMBOLS.square}
                onChange={handleChange}
              />
            </FormField>
          );
        }}
        name={WarehouseTableField.MaxCapacity}
      />

      <Controller
        defaultValue={0}
        control={control}
        render={({ field }) => {
          const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            const formatedValue = parseFloat(e.target.value);
            if (Number.isNaN(formatedValue)) {
              field.onChange(0);
              return;
            }
            field.onChange(formatedValue);
          };
          return (
            <FormField
              id={WarehouseTableField.CurrentOccupancy}
              label={"Текущая заполняемость"}
            >
              <SymbolTextField
                isNumOnly
                $color={isMoreThanMax ? "red" : "green"}
                symbol={SYMBOLS.square}
                {...field}
                onChange={handleChange}
              />
            </FormField>
          );
        }}
        name={WarehouseTableField.CurrentOccupancy}
      />
      <Controller
        control={control}
        render={({ field }) => (
          <FormField id={WarehouseTableField.Comments} label={"Комментарии"}>
            <Textarea {...field} rows={4} />
          </FormField>
        )}
        name={WarehouseTableField.Comments}
      />
    </FormContainer>
  );
};
