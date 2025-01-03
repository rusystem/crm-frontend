import { Supplier, SupplierTableField } from "../_types.ts";

import { ChangeEvent } from "react";
import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";

import { ContractNumberInput } from "@pages/suppliers/_components/contract-number-input.tsx";
import { SYMBOLS } from "@shared/constants/symbols.ts";
import {
  FormField,
  Status,
  SymbolTextField,
  TextField,
  Textarea,
} from "@shared/ui";
import { FileUpload } from "@shared/ui/inputs/attachment.tsx";
import { MultiSelect } from "@shared/ui/inputs/multi-select.tsx";
import { Select } from "@shared/ui/inputs/select.tsx";

const Container = styled.div`
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
`;

export const Form = () => {
  const { control, watch } = useFormContext<Supplier>();

  const balance = watch(SupplierTableField.Balance);

  return (
    <Container>
      <div>
        <Controller
          control={control}
          render={({ field }) => (
            <FormField id={SupplierTableField.Name} label={"Наименование"}>
              <TextField {...field} />
            </FormField>
          )}
          name={SupplierTableField.Name}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <FormField id={SupplierTableField.TaxId} label={"ИНН/БИН"}>
              <TextField {...field} />
            </FormField>
          )}
          name={SupplierTableField.TaxId}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <FormField
              id={SupplierTableField.ProductCategories}
              label={"Категории товаров"}
            >
              <MultiSelect
                {...field}
                options={[
                  "металл листы",
                  "металл листы 1",
                  "металл листы 2",
                  "металл листы 3",
                ]}
              />
            </FormField>
          )}
          name={SupplierTableField.ProductCategories}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <FormField id={SupplierTableField.Country} label={"Страна"}>
              <Select
                {...field}
                options={["Украниа", "Казахстан", "Россия", "Беларусь"]}
              />
            </FormField>
          )}
          name={SupplierTableField.Country}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <FormField id={SupplierTableField.Region} label={"Регион"}>
              <Select {...field} options={["Казахстан", "Россия"]} />
            </FormField>
          )}
          name={SupplierTableField.Region}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <FormField
              id={SupplierTableField.LegalAddress}
              label={"Юридический адрес"}
            >
              <TextField {...field} />
            </FormField>
          )}
          name={SupplierTableField.LegalAddress}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <FormField
              id={SupplierTableField.Address}
              label={"Фактический адрес"}
            >
              <TextField {...field} />
            </FormField>
          )}
          name={SupplierTableField.Address}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <FormField
              id={SupplierTableField.WarehouseAddress}
              label={"Адрес склада"}
            >
              <TextField {...field} />
            </FormField>
          )}
          name={SupplierTableField.WarehouseAddress}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <FormField
              id={SupplierTableField.ContactPerson}
              label={"Контактное лицо"}
            >
              <TextField {...field} />
            </FormField>
          )}
          name={SupplierTableField.ContactPerson}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <FormField id={SupplierTableField.Phone} label={"Телефон"}>
              <TextField {...field} />
            </FormField>
          )}
          name={SupplierTableField.Phone}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <FormField
              id={SupplierTableField.Email}
              label={"Электронная почта"}
            >
              <TextField {...field} />
            </FormField>
          )}
          name={SupplierTableField.Email}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <FormField id={SupplierTableField.Website} label={"Сайт"}>
              <TextField {...field} />
            </FormField>
          )}
          name={SupplierTableField.Website}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <FormField
              id={SupplierTableField.BankDetails}
              label={"Банковские реквизиты"}
            >
              <Textarea {...field} id={field.name} />
            </FormField>
          )}
          name={SupplierTableField.BankDetails}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <FormField
              id={SupplierTableField.PaymentTerms}
              label={"Условия оплаты"}
            >
              <TextField {...field} />
            </FormField>
          )}
          name={SupplierTableField.PaymentTerms}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <FormField
              id={SupplierTableField.ContractNumber}
              label={"Номер и дата договора"}
            >
              <ContractNumberInput value={field.value} />
            </FormField>
          )}
          name={SupplierTableField.ContractNumber}
        />

        <Controller
          defaultValue={0}
          control={control}
          render={({ field }) => (
            <FormField
              id={SupplierTableField.PurchaseAmount}
              label={"Общая сумма"}
            >
              <SymbolTextField
                {...field}
                isNumOnly={true}
                symbol={SYMBOLS.tenge}
              />
            </FormField>
          )}
          name={SupplierTableField.PurchaseAmount}
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
              <FormField id={SupplierTableField.Balance} label={"Баланс"}>
                <SymbolTextField
                  {...field}
                  onChange={handleChange}
                  isNumOnly={true}
                  symbol={SYMBOLS.tenge}
                  $color={balance < 0 ? "red" : "green"}
                />
              </FormField>
            );
          }}
          name={SupplierTableField.Balance}
        />
      </div>

      <div>
        <Controller
          control={control}
          render={({ field }) => {
            const handleToggle = () => {
              field.onChange(!field.value);
            };
            return (
              <FormField id={SupplierTableField.IsActive} label={"Статус"}>
                <Status isActive={field.value}>
                  <button onClick={handleToggle}>
                    {field.value ? "Активен" : "неактивен"}
                  </button>
                </Status>
              </FormField>
            );
          }}
          name={SupplierTableField.IsActive}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <FormField id={SupplierTableField.Comments} label={"Комментарии"}>
              <Textarea {...field} id={field.name} />
            </FormField>
          )}
          name={SupplierTableField.Comments}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <FormField id={SupplierTableField.Files} label={"Файлы"}>
              <FileUpload {...field} />
            </FormField>
          )}
          name={SupplierTableField.Files}
        />
      </div>
    </Container>
  );
};
