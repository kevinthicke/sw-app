import { APIError } from "../../domain/exception/ApiError";
import { isClientError } from "../../domain/exception/StatusCodes";
import { HttpClient } from "../../domain/httpClient/HttpClient";

export const makeFetchHttpClient = (): HttpClient => {
  return {
    async get({ url, params, body }) {
      const urlParams = params ? `?${new URLSearchParams(params)}` : ''
      try {
        const response = await fetch(url + urlParams);
        if (isClientError(response.status)) {
          throw new APIError({ message: `Client error! Status ${response.status}` })
        }

        return {
          data: await response.json()
        }

      } catch (error) {
        throw new APIError({ message: (error as Error).message })
      }
    },
  }
}