import { HttpClientResponse } from "./HttpClientResponse";

type HttpClientParams<T> = {
  url: string;
  params?: Record<string, string>;
  body?: T;
}

export interface HttpClient {
  get<T>(params: HttpClientParams<T>): Promise<HttpClientResponse<T>['GET']>;
  //  post<T>(params: HttpClientParams<T>): Promise<HttpClientResponse<T>['POST']>;
}