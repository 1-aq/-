import { LoginList } from "@/api/loginList.js";
import { setItem, getItem } from "@/utils/storage";
export default {
  namespaced: true,
  state: {
    token: getItem("token") || "",
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      setItem("token", token);
    },
  },
  actions: {
    async LoginList({ commit }, LoginModel) {
      const token = await LoginList(LoginModel);
      // console.log(res);
      commit("setToken", token);
      return token;
    },
  },
};
