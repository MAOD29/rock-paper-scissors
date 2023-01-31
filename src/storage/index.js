import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      showRules: false,
      score: 0,
      renderHome: true,
      option: null,
    };
  },
  getters: {
    showRules(state) {
      return state.showRules;
    },
    getScore(state) {
      return state.score;
    },
    getRenderHome(state) {
      return state.renderHome;
    },
    getOption(state) {
      return state.option;
    },
  },
  mutations: {
    showRules(state) {
      return (state.showRules = !state.showRules);
    },
    addScore(state) {
      return state.score++;
    },
    renderHome(state) {
      return (state.renderHome = !state.renderHome);
    },
    addOption(state, value) {
      return (state.option = value);
    },
  },
  actions: {
    showRules(contex) {
      contex.commit("showRules");
    },
    addScore(contex) {
      contex.commit("addScore");
    },
    renderHome(contex) {
      contex.commit("renderHome");
    },
    addOption(contex, value) {
      contex.commit("addOption", value);
    },
  },
});

export default store;
