<template lang="html">
  <div class="">
    <donut-chart
      style="height: 150px;"
      id="financesrevenue"
      :data="taxData"
      colors='[ "#00A1D4", "#00FFB1", "#FF4C40", "#CC1447" ]'
      resize="true"
      :formatter="formatMoney"
    />
  </div>
</template>

<script>
import { DonutChart } from 'vue-morris'

export default {
  props: ['tax'],
  components: {
    DonutChart
  },
  methods: {
    formatMoney(val) {
      return window.formatMoney(val)
    }
  },
  computed: {
    taxData() {
      let taxDataArray = [
        { label: 'Members', value: 0 },
        { label: 'Other', value: 0 },
        { label: 'Investment', value: 0 },
        { label: 'Rental', value: 0 },
        { label: 'Fund Raising', value: 0 },
        { label: 'Gaming', value: 0 },
        { label: 'Sales', value: 0 },
        { label: 'Interest', value: 0 },
        { label: 'Other', value: 0 }
      ]

      if (!this.tax) {
        return taxDataArray
      }

      for (var i = 0; i < window.years.length; i++) {
        if (this.tax[window.years[i]] && this.tax[window.years[i]].length) {
          // console.log(JSON.parse(JSON.stringify(this.tax[window.years[i]])))
          taxDataArray[0].value += this.tax[window.years[i]].reduce((prev, next) => {
            return prev + next.grsincmembers || 0
          }, 0)
          taxDataArray[1].value += this.tax[window.years[i]].reduce((prev, next) => {
            return prev + next.grsincother || 0
          }, 0)
          taxDataArray[2].value += this.tax[window.years[i]].reduce((prev, next) => {
            return prev + next.invstmntinc || 0
          }, 0)
          taxDataArray[3].value += this.tax[window.years[i]].reduce((prev, next) => {
            return prev + next.netrntlinc || 0
          }, 0)
          taxDataArray[4].value += this.tax[window.years[i]].reduce((prev, next) => {
            return prev + next.netincfndrsng || 0
          }, 0)
          taxDataArray[5].value += this.tax[window.years[i]].reduce((prev, next) => {
            return prev + next.grsincgaming || 0
          }, 0)
          taxDataArray[6].value += this.tax[window.years[i]].reduce((prev, next) => {
            return prev + next.netincsales || 0
          }, 0)
          taxDataArray[7].value += this.tax[window.years[i]].reduce((prev, next) => {
            return prev + next.grsinc170 || next.grsinc509 || 0
          }, 0)
          taxDataArray[8].value += this.tax[window.years[i]].reduce((prev, next) => {
            return prev + next.othrinc170 || next.othrinc509 || 0
          }, 0)
        }
      }
      return taxDataArray
    }
  }
}
</script>

<style lang="css">
</style>
