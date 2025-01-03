export enum AsyncDataStatus {
  Success = "success",
  Error = "error",
  Loading = "loading",
}

type SuccessResult<T> = {
  type: AsyncDataStatus.Success;
  data: T;
};

type LoadingResult = {
  type: AsyncDataStatus.Loading;
};

type ErrorResult = {
  type: AsyncDataStatus.Error;
  error: Error;
};

export type AsyncResult<T> = SuccessResult<T> | LoadingResult | ErrorResult;

const createSuccess = <T>(data: T): SuccessResult<T> => ({
  type: AsyncDataStatus.Success,
  data,
});

const createLoading = (): LoadingResult => ({
  type: AsyncDataStatus.Loading,
});

const createError = (error: Error): ErrorResult => ({
  type: AsyncDataStatus.Error,
  error,
});

const isError = (props: AsyncResult<unknown>): props is ErrorResult =>
  props.type === AsyncDataStatus.Error;

const isLoading = (props: AsyncResult<unknown>): props is LoadingResult =>
  props.type === AsyncDataStatus.Loading;

const isSuccess = (
  props: AsyncResult<unknown>,
): props is SuccessResult<unknown> => props.type === AsyncDataStatus.Success;

export const asyncData = {
  createSuccess,
  createLoading,
  createError,
  isError,
  isLoading,
  isSuccess,
};
