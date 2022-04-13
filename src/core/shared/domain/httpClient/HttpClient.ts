import { HttpClientResponse } from "./HttpClientResponse";

type HttpClientParams<T> = {
  url: string;
  params?: string[];
  body?: T;
}

export interface HttpClient {
  get<T>(params: HttpClientParams<T>): Promise<HttpClientResponse<T>['GET']>;
  //  post<T>(params: HttpClientParams<T>): Promise<HttpClientResponse<T>['POST']>;
}