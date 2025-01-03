import { makeAutoObservable } from "mobx";

import { SuccessResponse, apiClient } from "@shared/api";
import { AsyncResult, asyncData } from "@shared/lib";

import { USER_INFO_ENDPOINT } from "./_constants";
import { User } from "./auth-store.types";

export class AuthStore {
  user: AsyncResult<User> = asyncData.createLoading();

  constructor() {
    makeAutoObservable(this);
  }

  fetchUserInfo = async () => {
    try {
      const { data } = await apiClient
        .get<SuccessResponse<User>>(USER_INFO_ENDPOINT)
        .then(({ data }) => data);

      this.user = asyncData.createSuccess(data);
    } catch (err) {
      if (err instanceof Error) {
        this.user = asyncData.createError(err);
      }
    }
  };

  get loadedUser(): User {
    if (asyncData.isSuccess(this.user)) {
      return this.user.data;
    }
    throw new Error("User is not loaded");
  }
}
