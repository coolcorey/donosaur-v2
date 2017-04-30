<template lang="html">

  <div class="">
    <line-chart
      id="totfinances"
      :data='taxData'
      xkey="year"
      ykeys='[ "income", "expense", "asset", "liability" ]'
      labels='["Income", "Expense", "Asset", "Liability"]'
      line-colors='[ "#00A1D4", "#00FFB1", "#FF4C40", "#CC1447" ]'
      grid="true"
      event-stroke-width="5"
      resize="true"
      preUnits="$"
      xLabels="year"
    />

  <!--
  grid-text-weight="bold"
  events='[ "2015" ]'
  -->
</div>

</template>

<script>
import { LineChart } from 'vue-morris'

export default {
  props: ['tax'],
  components: {
    LineChart
  },
  computed: {
    taxData() {
      let taxDataArray = []

      if (!this.tax) {
        return taxDataArray
      }

      for (var i = 0; i < window.years.length; i++) {
        if (this.tax[window.years[i]] && this.tax[window.years[i]].length) {
          // console.log(JSON.parse(JSON.stringify(this.tax[window.years[i]])))

          taxDataArray.push({
            year: window.years[i],
            income: this.tax[window.years[i]].reduce((prev, next) => {
              return prev + next.totrevenue || next.totrevnue || 0
            }, 0),
            asset: this.tax[window.years[i]].reduce((prev, next) => {
              return prev + next.totassetsend || 0
            }, 0),
            liability: this.tax[window.years[i]].reduce((prev, next) => {
              return prev + next.totliabend || 0
            }, 0),
            expense: this.tax[window.years[i]].reduce((prev, next) => {
              return prev + next.totfuncexpns || 0
            }, 0)
          })
        }
      }

      return taxDataArray
    }
  }
}
</script>

<style lang="css">
</style>
