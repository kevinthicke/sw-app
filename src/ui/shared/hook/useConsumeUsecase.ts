import { useContext } from "react";
import { handleErrorUseCase } from "../../../core/shared/application/useCase/handleErrorUseCase";
import { PromiseEither } from "../../../core/shared/domain/dataType/PromisedEither";
import { LoadingContext } from "../context/loading/LoadingContext";

type ConsumeParams<L extends Error, R> = {
  usecase: PromiseEither<L, R>;
  onSuccess: Function;
  onError?: Function;
}

export const useConsumeUsecase = () => {
  const { showLoading, closeLoading } = useContext(LoadingContext);

  const consume = async <L extends Error, R>({
    usecase,
    onSuccess,
    onError,
  }: ConsumeParams<L, R>) => {
    showLoading();
    const { error, ok } = await usecase;
    closeLoading();

    onSuccess(ok);
    onError && onError(error);

    if (error) {
      handleErrorUseCase(error);
    }

    return { error, ok };
  };

  return { consume };
};