import { ErrorNotificator } from "../../domain/service/ErrorNotificator";

export const makeConsoleErrorNotificator = (): ErrorNotificator => ({
  notify(error: Error) {
    console.error(error);
    return Promise.resolve();
  }
})