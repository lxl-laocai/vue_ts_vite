import { defineStore } from "pinia";
import { IRegister } from "./bean";

export default defineStore("user", {
  state: () => ({
    userData: {
      userInfo: {
        username: "lxl"
      }
    }
  }),
  getters: {
    userInfoGetter: state => state.userData.userInfo
  },
  actions: {
    registerUserAction(data: IRegister) {
      try {
        // api...
      } catch (error) {
        // return error
      }
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: sessionStorage,
        paths: ["userInfo"]
      }
    ]
  }
});
