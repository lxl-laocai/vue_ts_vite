import type { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import type { LoadingInstance } from "element-plus/lib/components/loading/src/loading";

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

export {
  AxiosInstance
};
