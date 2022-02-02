import shop from '@/api/shop';

export default {
  namespaced: true,
  state: {
    items: [],
  },

  actions: {
    fetchServices({ commit }) {
      return new Promise((resolve) => {
        shop.getServices((services) => {
          commit('setServices', services);
          resolve();
        });
      });
    },
  },

  mutations: {
    setServices(state, services) {
      state.items = services;
    },
  },
};
