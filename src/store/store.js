import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  word: 'good',
  num: 1
}

const getters = {
  getResult: state => state.getResult
}

const mutations = {
  add (state) {
    state.num++
  }

}

const actions = {
  queryWord: function ({commit}) {
    console.log(`%c--this-- `, 'color:blue;font-weight:bold', this)
    // return commit('add')
    axios.get('/api/bdc/search/?word=good')
      .then(function (response) {
        if (response.data.status_code === 0) {
          var resultData = response.data.data
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
