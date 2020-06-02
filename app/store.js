import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    testText: 'Hello!'
  },
  mutations: {
    SET_AUTH_STATUS (state, payload) {
      state.loggedIn = payload
    },
    SET_TEXT (state, payload) {
      state.testText = payload
    }
  },
  actions: {
    isLoggedIn (state) {
      return state.loggedIn
    },
    loadedText (state) {
      return state.testText
    }
  }
});
