<template lang="html">
  <div class="">
    <table class="ui celled table compact">
      <thead>
        <tr>
          <!--<th>Description</th>
          <th>Key</th>
          <th>Value</th>-->
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tablePage">
          <td>{{row.key | taxDescription}}</td>
          <!--<td>{{row.key}}</td>-->
          <td>{{row | taxValueFormatted}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="3">
            <div class="ui right floated pagination menu">
              <a class="icon item" v-on:click="decrementPage()" :class="{disabled: !canPageDecrement}">
                <i class="left chevron icon"></i>
              </a>
              <a class="icon item" v-on:click="incrementPage()" :class="{disabled: !canPageIncrement}">
                <i class="right chevron icon"></i>
              </a>
            </div>
          </th>
        </tr>
      </tfoot>
    </table>
  </div>

</template>

<script>
export default {
  props: ['obj'],
  data() {
    return {
      currentPage: 0,
      perPage: 10
    }
  },
  computed: {
    tablePage() {
      let start = this.currentPage * this.perPage
      let end = start + this.perPage
      delete this.obj._id
      let chunk = Object.keys(this.obj).map((key) => { return {key: key, value: this.obj[key]} }).slice(start, end)
      return chunk
    },
    canPageIncrement() {
      return this.canPageIncrementTest()
    },
    canPageDecrement() {
      return this.canPageDecrementTest()
    }
  },
  methods: {
    canPageIncrementTest() {
      return (this.currentPage <= Math.floor(Object.keys(this.obj).length / this.perPage) - 1)
    },
    canPageDecrementTest() {
      return (this.currentPage !== 0)
    },
    incrementPage() {
      if (this.canPageIncrementTest()) {
        this.currentPage++
      }
    },
    decrementPage() {
      if (this.canPageDecrementTest()) {
        this.currentPage--
      }
    }
  }
}
</script>

<style lang="css">

</style>
