export type HttpClientResponse<T> = {
  GET: {
    data: T
  },
  POST: {
    data: T
  }
}