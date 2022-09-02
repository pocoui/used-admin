import { createStore, useStore as vuexUseStore, Store } from 'vuex'
import { IRootState, IStoreType } from './types'

import login from './login/login'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ILoginState } from './login/types'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'xiaoming',
      age: 18
    }
  },
  mutations: {},
  actions: {},
  modules: { login }
})

export default store

export function setupStore(): void {
  store.dispatch('login/loadLocalLogin')
  // store.dispatch('getInitialDataAction')
}

export function useStore(): Store<IStoreType> {
  return vuexUseStore()
}
