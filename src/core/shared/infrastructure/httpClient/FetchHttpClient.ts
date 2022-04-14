import { HttpClient } from "../../domain/httpClient/HttpClient";

export const makeFetchHttpClient = (): HttpClient => {
  return {
    get({ url, params, body }) {
      const urlParams = params ? `?${new URLSearchParams(params)}` : ''
      console.log({ apiURL: url + urlParams })
      return fetch(url + urlParams)
        .then(response => response.json())
        .then(responseJSON => ({
          data: responseJSON
        }));
    },
  }
}