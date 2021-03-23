import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    Roomdata: []
  },
  mutations: {
    ROOMDATA (state, payload) {
      state.Roomdata = payload
    }
  },
  actions: {
    getAllRoom (context) {
      const vm = this
      const api = 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms'
      axios.get(api).then((response) => {
        if (response.data.success) {
          vm.Roomdata = response.data.items
          context.commit('ROOMDATA', vm.Roomdata)
        }
      })
    }
  },
  modules: {

  }
})
