<template>
  <div>

    <div class="ui container">

      <div class="ui dimmer inverted active" :class="{fadeOutLoader: !searchPending}">
        <div class="ui text loader massive indeterminate">Loading...</div>
      </div>

      <SearchBreadCrumb/>

      <div class="ui form">
        <div class="fields">
          <div class="seven wide field">
            <label>Search</label>
            <div class="ui search searchOptions icon input">
              <input class="prompt" type="text" placeholder="">
              <i class="search icon"></i>
              <div class="results"></div>
            </div>
          </div>
          <div class="three wide field">
            <label>Sort</label>
            <select class="ui search dropdown compact sortSelect">
              <option value=""></option>
              <option v-for="sort in sorts">{{sort}}</option>
            </select>
          </div>
          <div class="three wide field">
            <label>Type</label>
            <select class="ui search dropdown compact typeSelect">
              <option value=""></option>
              <option v-for="type in types">{{type}}</option>
            </select>
          </div>
          <div class="three wide field">
            <label>Location</label>
            <input type="text" class="ui locationOptions" data-position="bottom left" :placeholder="locationQuery">
            <div class="ui flowing popup bottom left transition hidden">
              <div class="ui center aligned grid" style="max-width:200px">
                <select class="ui search dropdown stateSelect">
                  <option value="">State</option>
                  <option v-for="state in states" :value="state.abbr">{{state.name}}</option>
                </select>
                <input class="ui search zipSearch" type="text" placeholder="Zipcode">
                <input class="ui search citySearch" type="text" placeholder="City">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ui three stackable cards">
        <SearchCard
          v-for="result in searchResults"
          :key="result._id"
          :income="result.INCOME_AMT"
          :asset="result.ASSET_AMT"
          :revenue="result.REVENUE_AMT"
          :state="result.STATE"
          :city="result.CITY"
          :name="result.NAME"
          :ein="result.EIN"
        />
      </div>

    </div>
  </div>
</template>

<script>
import store from '../store'
import { sorts, types, states } from '../constants'
import SearchCard from './SearchCard'
import SearchBreadCrumb from './SearchBreadCrumb'

export default {
  name: 'main',
  components: {
    SearchCard,
    SearchBreadCrumb
  },
  data () {
    return {
      searchPending: false,
      sorts: sorts,
      types: types,
      states: states
    }
  },
  computed: {
    locationQuery() {
      let locationStr = ''
      let state = store.state.searchQuery.searchState
      let zip = store.state.searchQuery.searchZip
      let city = store.state.searchQuery.searchCity

      locationStr += state ? (`${state}, `) : ''
      locationStr += zip ? (`${zip}, `) : ''
      locationStr += city ? (`${city}, `) : ''

      // get rid of that trailing comma
      locationStr = locationStr.slice(0, locationStr.length - 2)

      return locationStr
    },
    searchResults() {
      return store.state.searchResults
    }
  },
  methods: {
    setSearch(query) {
      store.commit('setSearchQuery', {searchString: query.length > 3 ? query : ''})
    },
    setSort(query) {
      store.commit('setSearchQuery', {searchSort: query !== 'None' ? query : ''})
    },
    setType(query) {
      store.commit('setSearchQuery', {searchType: query !== 'Any' ? query : ''})
    },
    setState(query) {
      store.commit('setSearchQuery', {searchState: query !== 'Any' ? query : ''})
    },
    setZip(query) {
      store.commit('setSearchQuery', {searchZip: query})
    },
    setCity(query) {
      store.commit('setSearchQuery', {searchCity: query})
    },
    doSearch() {
      console.log(JSON.parse(JSON.stringify(store.state.searchQuery)))
      this.searchPending = true
      store.dispatch('fetchResults').then(() => {
        this.searchPending = false
      })
    }
  },
  mounted() {
    this.searchPending = true
    store.dispatch('fetchResults').then(() => {
      this.searchPending = false
    })

    window.$('.sortSelect').dropdown({
      onChange: (value, text) => {
        this.setSort(value)
        this.doSearch()
      }
    })

    window.$('.typeSelect').dropdown({
      onChange: (value, text) => {
        this.setType(value)
        this.doSearch()
      }
    })

    window.$('.stateSelect').dropdown({
      onChange: (value, text) => {
        this.setState(value)
        this.doSearch()
      }
    })

    window.$('.locationOptions').popup({
      inline: true,
      on: 'click'
    })

    window.$('.zipSearch').keyup((e) => {
      this.setZip(window.$(e.target).val())
    })

    window.$('.citySearch').keyup((e) => {
      this.setCity(window.$(e.target).val())
    })

    window.$('.shareOptions').popup({
      inline: true,
      on: 'click'
    })

    window.$('.searchOptions')
    .search({
      minCharacters: 3,
      searchFullText: true,
      searchDelay: 300,
      apiSettings: {
        url: `${window.apiLocation}/typeaheadNames?q={query}`,
        onResponse: function(results) {
          let retResults = {
            results: []
          }

          for (let key in results) {
            retResults.results.push({title: window.toTitleCase(results[key].NAME)})
          }

          return retResults
        }
      },
      onSelect: (result, response) => {
        console.log('onSelect')
        this.setSearch(result.title)
        this.doSearch()
      },
      onSearchQuery: (query) => {
        console.log('onSearchQuery')
        this.setSearch(query)
      }
    })

    window.$('.ui.search').keypress((e) => {
      if (e.which === 13) {
        this.doSearch()
      }
    })

    window.$(window).scroll(() => {
      if (window.$(window).scrollTop() + window.$(window).height() > window.$(document).height() - 100) {
        if (this.searchPending) {
          return
        }
        this.searchPending = true
        store.dispatch('fetchResultsAppend').then(() => {
          this.searchPending = false
        })
      }
    })
  }
}
</script>

<style scoped>

.ui.segment {
  background-color: rgba(0, 0, 0, 0.35) !important;
}
.ui.menu {
  background-color: rgba(0, 0, 0, 0.35) !important;
}

.ui.search>.results {
  width: auto !important;
}

.ui.form .field>label {
  color: #eee !important;
}

@-webkit-keyframes fadeOutLoader{
  0%{opacity:1;visibility:visible;}
  99%{opacity:0;}
  100%{opacity:0;visibility: hidden;}
}

.fadeOutLoader {
  -webkit-animation:fadeOutLoader .5s linear;
  visibility:hidden;
}

.ui.stackable.cards {
  margin-top: 15px;
}
</style>
