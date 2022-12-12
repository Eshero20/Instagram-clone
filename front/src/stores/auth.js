import { defineStore } from "pinia";

const formatUrlBase = (url) => url?.replace(/\/$/, "");

const apiBaseUrl = formatUrlBase(
  process.env.API_BASE ? process.env.API_BASE : "localhost:1337"
);

export const useCounterStore = defineStore("counter", {
  state: () => ({
    user: null,
    apiServer: apiBaseUrl,
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
});
