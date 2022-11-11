import MyRequest from "./request";
import { BASE_URL, TIMER_OUT } from "@/model";

const request = new MyRequest({
  baseURL: BASE_URL,
  timeout: Number(TIMER_OUT)
});

export default request;
