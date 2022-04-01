import { createStore } from 'vuex'
import { Configuration, CustomerApiFactory } from "Shell/apiGossan";

const store: any = createStore({
  state() {
    return {
     customers: []
    }
  },
  mutations: {
    setCustomers(state: any, customers) {
      state.customers = customers
    },
  },
  actions: {
    async getCustomers(state) {
      const config = new Configuration({
        basePath: window.location.origin, // 1
      });
      const apiFactory = CustomerApiFactory(config);
      const result = await apiFactory.findCustomers()
      state.commit('setCustomers', result)
    }
  },
  getters: {
    customers(state) {
      return state.customers
    }
  }
})

export default store;