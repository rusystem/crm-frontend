export type ErrorResponse = {
  code: number;
  is_error: true;
  data: null;
  message: string;
};

export type ValidationError = Omit<ErrorResponse, "code"> & {
  code: 422;
  additionalErrors: Record<string, string>;
};

export type SuccessResponse<Data> = {
  is_error?: false;
  data: Data;
};

export type SuccessListResponse<Data> = SuccessResponse<Array<Data>> & {
  total_count: number;
};

export type Response<T> =
  | ValidationError
  | ErrorResponse
  | SuccessResponse<T>
  | SuccessListResponse<T>;
