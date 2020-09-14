const state = () => ({
  dataTable: [],
  notSorted: [],
  sorteble: {
    asc: false,
    desc: false,
    sortable: false
  },
  search: null
})

const mutations = {
  setDataTable (state, payload) {
    state.dataTable = payload
    state.notSorted = payload
  },
  toggleSort (state) {
    if (!state.sorteble.sortable) {
      state.sorteble.sortable = true
      state.sorteble.asc = true
    } else if (state.sorteble.sortable && state.sorteble.asc) {
      state.sorteble.asc = false
      state.sorteble.desc = true
    } else {
      state.sorteble.asc = false
      state.sorteble.desc = false
      state.sorteble.sortable = false
    }
  },
  sortData (state) {
    let compare = 0
    let data = state.dataTable
    data.sort((a, b) => {
      if (state.sorteble.asc) {
        if (a.name > b.name) {
          compare = 1
        } else if (b.name > a.name) {
          compare = -1
        }
        return compare
      } else if (state.sorteble.desc){
        if (a.name > b.name) {
          compare = -1
        } else if (b.name > a.name) {
          compare = 1
        }
        return compare
      } else {
        compare = 0
        return compare
      }
    })
    if (compare === 1 || compare === -1) {
      state.dataTable = data
    } else {
      data.sort((a, b) => {
        return a.id - b.id
      })
      state.dataTable = data
    }
  },
  setSearch (state, payload) {
    state.search = payload
  }
}

const actions = {
  async getDataTable ({commit}) {
    await this.$axios.get('https://test-frontend-api.herokuapp.com/galaxies', { headers: {
        'Content-Type': 'application/json'
      }})
      .then((val) => {
        commit('setDataTable', val.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const getters = {
  GET_DATA_TABLE (state) {
    return state.dataTable
  },
  GET_SORT (state) {
    return state.sorteble
  },
  GET_SEARCH (state) {
    return state.search
  }
}

export default {
  state, actions, mutations, getters
}
