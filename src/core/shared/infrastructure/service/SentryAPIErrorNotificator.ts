import { HttpClient } from "../../domain/httpClient/HttpClient"
import { ErrorNotificator } from "../../domain/service/ErrorNotificator"

type ApiErrorNotificatorDependencies = {
  httpClient: HttpClient
}

export const makeSentryAPIErrorNotificator = ({ httpClient }: ApiErrorNotificatorDependencies): ErrorNotificator => {
  return {
    notify() {
      //NOTE: Should call to some API of Sentry Rest for POST an Error;
      //return httpClient.post(...)
      return Promise.resolve();
    }
  }
}