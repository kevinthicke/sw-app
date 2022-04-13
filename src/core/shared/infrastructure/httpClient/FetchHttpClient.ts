import { HttpClient } from "../../domain/httpClient/HttpClient";

export const makeFetchHttpClient = (): HttpClient => {
  return {
    get({ url, params, body }) {
      return fetch(url)
        .then(response => response.json())
        .then(responseJSON => ({
          data: responseJSON
        }));
    },
  }
}