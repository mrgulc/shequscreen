/**
 * @description 公共
 * @author Zhaohui Zeng
 * @version 2021/7/22
 */
import { regionId } from '@/api/public/index'
export default {
  namespaced: true,
  state: {
    regionID: '330400000000000'
  },
  mutations: {
    setRegionID(state, regionID) {
      state.regionID = regionID
    }
  },
  actions: {
    regionId({ commit }) {
      regionId().then((res) => {
        commit('setRegionID', res)
      })
    }
  }
}
