import { HttpClientFactory } from "../httpClient/HttpClientFactory"
import { makeSentryAPIErrorNotificator } from "./SentryAPIErrorNotificator"
import { makeConsoleErrorNotificator } from "./ConsoleErrorNotificator";

export const ErrorNotificatorFactory = {
  getAll() {
    const httpClient = HttpClientFactory.get();
    return [makeSentryAPIErrorNotificator({ httpClient }), makeConsoleErrorNotificator()]
  }
}