<template lang="html">
  <div class="">
    <donut-chart
      style="height: 150px;"
      id="financesexpense"
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
        { label: 'Office', value: 0 },
        { label: 'Travel', value: 0 },
        { label: 'Interest', value: 0 },
        { label: 'Accounts Payable', value: 0 },
        { label: 'Rental', value: 0 },
        { label: 'Sales', value: 0 },
        { label: 'Fund Raising', value: 0 },
        { label: 'Gaming', value: 0 },
        { label: 'Other', value: 0 }
      ]

      if (!this.tax) {
        return taxDataArray
      }

      for (var i = 0; i < window.years.length; i++) {
        if (this.tax[window.years[i]] && this.tax[window.years[i]].length) {
          // console.log(JSON.parse(JSON.stringify(this.tax[window.years[i]])))
          taxDataArray[0].value += this.tax[window.years[i]].reduce((prev, next) => {
            return prev + next.officexpns || 0
          }, 0)
          taxDataArray[1].value += this.tax[window.years[i]].reduce((prev, next) => {
            return prev + next.travelofpublicoffcl || 0
          }, 0)
          taxDataArray[2].value += this.tax[window.years[i]].reduce((prev, next) => {
            return prev + next.interestamt || 0
          }, 0)
          taxDataArray[3].value += this.tax[window.years[i]].reduce((prev, next) => {
            return prev + next.accntspayableend || 0
          }, 0)
          taxDataArray[4].value += this.tax[window.years[i]].reduce((prev, next) => {
            return prev + next.rntlexpnsreal || next.rntlexpnsprsnl || 0
          }, 0)
          taxDataArray[5].value += this.tax[window.years[i]].reduce((prev, next) => {
            return prev + next.cstbasisecur || next.cstbasisothr || 0
          }, 0)
          taxDataArray[6].value += this.tax[window.years[i]].reduce((prev, next) => {
            return prev + next.lessdirfndrsng || 0
          }, 0)
          taxDataArray[7].value += this.tax[window.years[i]].reduce((prev, next) => {
            return prev + next.lessdirgaming || 0
          }, 0)
          taxDataArray[8].value += this.tax[window.years[i]].reduce((prev, next) => {
            return prev + (next.othrexpnsa + next.othrexpnsb + next.othrexpnsc + next.othrexpnsd + next.othrexpnse + next.othrexpnsf) || 0
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
