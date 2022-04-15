export const isClientError = (status: number) => {
  return 400 <= status && status <= 499
}