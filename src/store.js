import Vue from 'vue';
import Vuex from 'vuex';

// 引入通用接口配置
import { apiCfg, requestCfg } from './config';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  state: {
    user: {},
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
    },

  },
  actions: {
    async login(ctx, payload) {
      // const query = `${apiCfg.cfg}auth/signin?login_name=angdali&password=123456`;
      const url = `${apiCfg.cfg}user/login`;
      const cfg = requestCfg;
      cfg.body = JSON.stringify(payload);
      const rst = await fetch(url, cfg).then(rsb => (rsb.json()));
      // console.info('loginStatus', rst);
      ctx.commit('loginStatus', rst);
    },
  },
});
