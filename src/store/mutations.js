export const mutations = {
  closeMask (state, { isShow }) {
    state.isShow = !state.isShow
    state.menuActive = !state.menuActive
  },
  add (state) {
    state.num++
  },
  increment (state, resultData) {
    state.retData = resultData.definition
  },
  changeMenu (state, { menuActive, isShow }) {
    state.menuActive = !state.menuActive
    state.isShow = !state.isShow
  }
}
