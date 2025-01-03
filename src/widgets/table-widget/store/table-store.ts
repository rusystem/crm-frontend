import { makeAutoObservable } from "mobx";

import { apiClient } from "@shared/api";
import { SuccessListResponse } from "@shared/api/api-client/api-client.types.ts";
import { AsyncResult, asyncData } from "@shared/lib";
import { InitialRow, SortDirection } from "@widgets/table-widget";

import { INITIAL_PAGINATION } from "./_constants";
import { FiltersModel, FormMode, PaginationModel } from "./table-store.types";

export class TableStore<Row extends InitialRow> {
  rows: AsyncResult<Array<Row>> = asyncData.createLoading();
  totalCount: number = 0;
  currentRow?: Row;

  mode: FormMode | null = null;
  pagination: PaginationModel = INITIAL_PAGINATION;
  filters: FiltersModel = {};

  private readonly endpoint: string;

  constructor(endpoint: string) {
    makeAutoObservable(this);
    this.endpoint = endpoint;
  }

  fetchData = async () => {
    this.rows = asyncData.createLoading();

    try {
      const { total_count, data } = await apiClient
        .get<SuccessListResponse<Row>>(this.endpoint, {
          params: {
            ...this.pagination,
          },
        })
        .then(({ data }) => data);

      this.rows = asyncData.createSuccess(data);
      this.totalCount = total_count;
    } catch (err) {
      if (err instanceof Error) {
        this.rows = asyncData.createError(err);
      }
    }
  };

  setFormMode = (mode: FormMode | null) => {
    this.currentRow = undefined;
    this.mode = mode;
  };

  openCreateForm = () => {
    this.setFormMode(FormMode.Create);
  };

  submitForm = async (data: Row) => {
    if (!asyncData.isSuccess(this.rows)) return;

    if (this.mode === FormMode.Edit) {
      await this.submitEditRow(data);
      return;
    }

    await apiClient.post(this.endpoint, data);
    await this.fetchData();

    this.mode = null;
    this.currentRow = undefined;
  };

  private submitEditRow = async (data: Row) => {
    if (!asyncData.isSuccess(this.rows) || this.currentRow === undefined)
      return;

    try {
      await apiClient.put(`${this.endpoint}/${this.currentRow.id}`, data);
      this.currentRow = undefined;
      this.mode = null;
      await this.fetchData();
    } catch (e) {
      console.error(e);
    }
  };

  editRow = (row: Row) => {
    this.setFormMode(FormMode.Edit);
    this.currentRow = row;
  };

  copyRow = (row: Row) => {
    this.setFormMode(FormMode.Copy);
    this.currentRow = row;
  };

  setPage = async (page: number) => {
    this.pagination.offset = (page - 1) * this.pagination.limit;
    await this.fetchData();
  };

  setSort = async (sortField: string, sortDirection: SortDirection) => {
    this.pagination.sort = sortDirection;
    this.pagination.sort_field = sortField;
    await this.fetchData();
  };

  get getRows(): AsyncResult<Array<Row>> {
    return this.currentRow
      ? asyncData.createSuccess([this.currentRow])
      : this.rows;
  }
  // setFilters = async (filters: Filters) => {
  //   this.filters = filters;
  //   await this.fetchData(1);
  // };
  //
  // setPageSize = async (pageSize: number) => {
  //   this.pagination.pageSize = pageSize;
  //   await this.fetchData(1);
  // };
  //
  // nextPage = async () => {
  //   if (this.pagination.currentPage < this.pagination.totalPages) {
  //     await this.fetchData(this.pagination.currentPage + 1);
  //   }
  // };
  //
  // prevPage = async () => {
  //   if (this.pagination.currentPage > 1) {
  //     await this.fetchData(this.pagination.currentPage - 1);
  //   }
  // };
}
