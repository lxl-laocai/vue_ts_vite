import MyRequest from "./request";

console.log(import.meta.env);
const request = new MyRequest({
  baseURL: "https://httpbin.org/get",
  timeout: 2000
});

export default request;
