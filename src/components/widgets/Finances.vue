<template lang="html">

  <div class="">
    <line-chart
      id="totfinances"
      :data='taxData'
      xkey="year"
      ykeys='[ "income", "expense", "asset", "liability" ]'
      labels='["Income", "Expense", "Asset", "Liability"]'
      line-colors='[ "#00A1D4", "#18AB7E", "#FF4C40", "#CC1447" ]'
      grid="true"
      event-stroke-width="5"
      resize="true"
      preUnits="$"
      xLabels="year"
    />
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
        var year = window.years[i]
        let yearDocs = (this.tax[year] || []).length ? this.tax[year] : []
        taxDataArray.push({
          year: year,
          income: yearDocs.reduce((prev, next) => {
            return prev + next.totrevenue || next.totrevnue || 0
          }, 0),
          asset: yearDocs.reduce((prev, next) => {
            return prev + next.totassetsend || 0
          }, 0),
          liability: yearDocs.reduce((prev, next) => {
            return prev + next.totliabend || 0
          }, 0),
          expense: yearDocs.reduce((prev, next) => {
            return prev + next.totfuncexpns || 0
          }, 0)
        })
      }

      return taxDataArray
    }
  }
}
</script>

<style lang="css">
</style>
