import { makeFetchHttpClient } from "./FetchHttpClient";

export const HttpClientFactory = {
  get: () => makeFetchHttpClient()
}