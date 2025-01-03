import { FormProvider, useForm } from "react-hook-form";

import { Text } from "@shared/ui";
import { Button } from "@shared/ui/button";
import { InitialRow } from "@widgets/table-widget";

import { Buttons, Container, IdContainer } from "./_styles.ts";
import { FormProps } from "./types";

export const Form = <Row extends InitialRow>({
  form,
  defaultValues,
  onCancel,
  onSubmit,
}: FormProps<Row>) => {
  const formProps = useForm<Row>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    defaultValues,
    shouldUnregister: true,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = formProps;

  return (
    <FormProvider {...formProps}>
      <Container>
        {defaultValues?.id && (
          <IdContainer>
            <Text $size={"title-m"}>ID</Text>
            <Text $size={"body-l"}>#{defaultValues.id}</Text>
          </IdContainer>
        )}
        <div>{form}</div>

        <Buttons>
          <Button $variant={"secondary"} onClick={onCancel}>
            Отмена
          </Button>
          <Button
            isLoading={isSubmitting}
            onClick={handleSubmit(onSubmit)}
            $variant={"tertiary"}
            type={"submit"}
          >
            Сохранить
          </Button>
        </Buttons>
      </Container>
    </FormProvider>
  );
};
