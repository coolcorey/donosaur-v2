<template lang="html">
  <div style="text-align:right">
    <div class="ui breadcrumb truncate">
      <span v-if="searchString">
        <i class="section">{{searchString}}</i>
      </span>
      <span v-if="searchString && searchSort">
        <i class="right chevron icon divider"></i>
      </span>
      <span v-if="searchSort">
        <i class="section">sort by {{searchSort}}</i>
      </span>
      <span v-if="(searchString || searchSort) && searchType">
        <i class="right chevron icon divider"></i>
      </span>
      <span v-if="searchType">
        <i class="section">of type {{searchType}}</i>
      </span>
      <span v-if="(searchString || searchSort || searchType) && locationQuery">
        <i class="right chevron icon divider"></i>
      </span>
      <span v-if="locationQuery">
        <i class="section">in location {{locationQuery}}</i>
      </span>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
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
    searchString() {
      return store.state.searchQuery.searchString
    },
    searchSort() {
      return store.state.searchQuery.searchSort
    },
    searchType() {
      return store.state.searchQuery.searchType
    },
    searchState() {
      return store.state.searchQuery.searchState
    },
    searchZip() {
      return store.state.searchQuery.searchZip
    },
    searchCity() {
      return store.state.searchQuery.searchCity
    }
  }
}
</script>

<style lang="css">
.ui.breadcrumb {
  color: #eee;
  margin-bottom: 10px !important;
  margin-top: 15px !important;
}
</style>
