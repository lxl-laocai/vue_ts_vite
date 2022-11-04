import MyRequest from "./request";

const request = new MyRequest({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: import.meta.env.VITE_TIMER_OUT
});

export default request;
