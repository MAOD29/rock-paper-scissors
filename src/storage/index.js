import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      showRules: false,
    };
  },
  getters: {
    showRules(state) {
      console.log(state.showRules);
      return state.showRules;
    },
  },
  mutations: {
    showRules(state) {
      return (state.showRules = !state.showRules);
    },
  },
  actions: {
    showRules(contex) {
      contex.commit("showRules");
    },
  },
});

export default store;
