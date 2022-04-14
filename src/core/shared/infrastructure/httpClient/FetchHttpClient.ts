import { APIError } from "../../domain/exception/ApiError";
import { HttpClient } from "../../domain/httpClient/HttpClient";

export const makeFetchHttpClient = (): HttpClient => {
  return {
    async get({ url, params, body }) {
      const urlParams = params ? `?${new URLSearchParams(params)}` : ''

      try {
        const response = await fetch(url + urlParams)
          .then(response => response.json())
          .then(responseJSON => ({
            data: responseJSON
          }))

        return response;

      } catch (error) {
        console.log('he!')
        throw new APIError({ message: (error as Error).message })
      }
    },
  }
}