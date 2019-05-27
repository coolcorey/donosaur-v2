import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

function getQueryString(queryState) {
  if (queryState.searchString || queryState.searchSort || queryState.searchType || queryState.searchState || queryState.searchZip || queryState.searchCity) {
    let query = {
      name: queryState.searchString,
      zip: queryState.searchZip,
      city: queryState.searchCity,
      state: queryState.searchState,
      sort: queryState.searchSort,
      ntee: queryState.searchType
    }
    return `${window.apiLocation}/getResults?q=${encodeURIComponent(JSON.stringify(query))}&p=${queryState.page}`
  }
  return `${window.apiLocation}/getSamples`
}

export default new Vuex.Store({
  state: {
    favorites: localStorage.getItem('donosaurfavorites') ? JSON.parse(localStorage.getItem('donosaurfavorites')) : [],
    shares: localStorage.getItem('donosaurshares') ? JSON.parse(localStorage.getItem('donosaurshares')) : [],
    searchResults: [],
    searchQuery: {
      searchString: '',
      searchSort: '',
      searchType: '',
      searchState: '',
      searchZip: '',
      searchCity: '',
      page: 0
    },
    organization: {
      meta: {},
      tax: {
        2017: [],
        2016: [],
        2015: [],
        2014: [],
        2013: [],
        2012: []
      }
    }
  },
  mutations: {
    incrementPage (state, search) {
      state.searchQuery.page = state.searchQuery.page + 1
    },
    clearPage (state, search) {
      state.searchQuery.page = 0
    },
    setSearchQuery (state, search) {
      state.searchQuery = Object.assign(state.searchQuery, search)
    },
    setSearchResults (state, results) {
      state.searchResults = results
    },
    appendSearchResults (state, results) {
      state.searchResults = state.searchResults.concat(results)
    },
    toggleFavorite (state, ein) {
      if (state.favorites.indexOf(ein) === -1) {
        state.favorites.push(ein)
      } else {
        state.favorites.splice(state.favorites.indexOf(ein), 1)
      }
      localStorage.setItem('donosaurfavorites', JSON.stringify(state.favorites))
    },
    setShared (state, ein) {
      if (state.shares.indexOf(ein) === -1) {
        state.shares.push(ein)
      }
      localStorage.setItem('donosaurshares', JSON.stringify(state.shares))
    },
    setOrgTaxData (state, data) {
      state.organization.tax[data.year] = data.data
    },
    setOrgMetaData (state, data) {
      state.organization.meta = data
    },
    clearOrg (state) {
      for (let i = 0; i < window.years.length; i++) {
        state.organization.tax[window.years[i]] = {}
      }
      state.organization.meta = {}
    }
  },
  actions: {
    clearOrgData (context) {
      return new Promise((resolve, reject) => {
        context.commit('clearOrg')
        resolve()
      })
    },
    getOrgData (context, ein) {
      return new Promise((resolve, reject) => {
        let getMetaData = function() {
          return new Promise((resolve, reject) => {
            window.$.get(`${window.apiLocation}/getMetaByEIN?ein=${ein}`, (data) => {
              // console.log('meta', data)
              let dObj = {}
              if (data.length > 0) {
                dObj = data[0]
              }
              context.commit('setOrgMetaData', dObj)
              resolve()
            })
          })
        }

        let getTaxData = function(year) {
          return new Promise((resolve, reject) => {
            window.$.get(`${window.apiLocation}/getTaxByEIN?y=${year}&ein=${ein}`, (data) => {
              // console.log(year, data)
              let dObj = {
                year: year,
                data: null
              }
              if (data.length > 0) {
                dObj.data = data
                context.commit('setOrgTaxData', dObj)
              }
              resolve()
            })
          })
        }

        let detailsPromises = [getMetaData()]
        for (let i = 0; i < window.years.length; i++) {
          detailsPromises.push(getTaxData(window.years[i]))
        }

        Promise.all(detailsPromises).then(() => {
          resolve()
        })
      })
    },
    toggleFavorite (context, ein) {
      return new Promise((resolve, reject) => {
        context.commit('toggleFavorite', ein)
        resolve()
      })
    },
    setShared (context, ein) {
      return new Promise((resolve, reject) => {
        context.commit('setShared', ein)
        resolve()
      })
    },
    fetchResults (context) {
      return new Promise((resolve, reject) => {
        context.commit('clearPage')
        window.$.get(getQueryString(context.state.searchQuery), (data) => {
          context.commit('setSearchResults', data)
          resolve()
        })
      })
    },
    fetchResultsAppend (context) {
      return new Promise((resolve, reject) => {
        context.commit('incrementPage')
        window.$.get(getQueryString(context.state.searchQuery), (data) => {
          context.commit('appendSearchResults', data)
          resolve()
        })
      })
    }
  }
})
