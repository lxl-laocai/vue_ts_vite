import type { AxiosResponse, AxiosRequestConfig } from "axios";
import type { LoadingInstance } from "element-plus/lib/components/loading/src/loading";
export type { AxiosInstance } from "axios";

export type TStatusMap = Map<string, (message?: string, config?: IAxiosConfig, request?: any) => void>

export interface IAxiosInterceptors<T = AxiosResponse> {
  requestInterceptor?: (value: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (value: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface IAxiosConfig<T = AxiosResponse> extends AxiosRequestConfig, IOtherOptions {
  interceptors?: IAxiosInterceptors<T>
}

export interface IOtherOptions {
  repeatRequestCancel?: boolean
  reduceDataFormat?: boolean
  showErrorMessage?: boolean
  showCodeMessage?: boolean
  showLoading?: boolean
}

export interface ILoadingInstance {
  _target: LoadingInstance | null,
  _count: number
}

