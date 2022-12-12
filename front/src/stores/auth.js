import { defineStore } from "pinia";

const formatUrlBase = (url) => url?.replace(/\/$/, "");

const apiBaseUrl = formatUrlBase(
  process.env.API_BASE ? process.env.API_BASE : "localhost:1337"
);

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    server: apiBaseUrl,
  }),
  getters: {
    apiServer: (state) => state.server,
    authHeaders: (state) => {
      return { Authetication: `Bearer ${state.user?.jwt}` };
    },
  },

  actions: {
    login() {
      this.counter++;
    },

  },
  /// log out function
  logout() {
    this.user = null;
    localStorage.removeItem('user');
    router.push('/account/login');
}
});
