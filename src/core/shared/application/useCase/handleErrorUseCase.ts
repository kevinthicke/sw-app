import { ErrorNotificator } from "../../domain/service/ErrorNotificator"
import { ErrorNotificatorFactory } from "../../infrastructure/service/ErrorNotificatorFactory"

export type ErrorHandlerDependencies = {
  errorNotificatorList: ErrorNotificator[]
}

export const makeHandleError = ({ errorNotificatorList }: ErrorHandlerDependencies) => {
  return (error: Error) => {
    errorNotificatorList.forEach((notificator) => {
      notificator.notify(error)
    });
  }
}

const errorNotificatorList = ErrorNotificatorFactory.getAll();
export const handleErrorUseCase = makeHandleError({ errorNotificatorList })

