import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { mutations } from './mutations'
Vue.use(Vuex)

const state = {
  word: 'good',
  num: 1,
  retData: {},
  menuActive: true,
  maskActive: !true,
  isShow: !true
}

const getters = {
  getResult: state => state.getResult
}

const actions = {
  queryWord: function (state, {commit, word}) {
    var self = this
    console.log(`%c--this-- `, 'color:blue;font-weight:bold', self)
    console.log(`%c--msg-- `, 'color:blue;font-weight:bold', word)
    axios.get(`/api/bdc/search/?word=${word}`)
      .then(function (response) {
        if (response.data.status_code === 0) {
          var resultData = response.data.data
          self.commit('increment', resultData)
          console.log(resultData.definition)
        }
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
