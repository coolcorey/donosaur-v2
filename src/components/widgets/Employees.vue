<template lang="html">
  <div class="">
    <bar-chart
      id="employees"
      :data='employeeData'
      xkey="year"
      ykeys='[ "employees", "employeesOver", "contractorsOver" ]'
      labels='["Number of Employees", "Employees Income Over 100k", "Contractors Income Over 100k"]'
      bar-colors='[ "#00A1D4", "#18AB7E", "#FF4C40" ]'
      grid="true"
      grid-text-weight="bold"
      resize="true"
    />
  </div>
</template>

<script>
import { BarChart } from 'vue-morris'

export default {
  props: ['tax'],
  components: {
    BarChart
  },
  computed: {
    employeeData() {
      let ret = []
      for (var i = 0; i < window.years.length; i++) {
        let year = window.years[i]
        let yearDocs = (this.tax[year] || []).length ? this.tax[year] : []
        ret.push({
          year: year,
          employees: 0,
          employeesOver: 0,
          contractorsOver: 0
        })
        for (var j = 0; j < yearDocs.length; j++) {
          if (yearDocs[j].hasOwnProperty('noemplyeesw3cnt')) {
            ret[ret.length - 1].employees += yearDocs[j]['noemplyeesw3cnt']
          }
          if (yearDocs[j].hasOwnProperty('noindiv100kcnt')) {
            ret[ret.length - 1].employeesOver += yearDocs[j]['noindiv100kcnt']
          }
          if (yearDocs[j].hasOwnProperty('nocontractor100kcnt')) {
            ret[ret.length - 1].contractorsOver += yearDocs[j]['nocontractor100kcnt']
          }
        }
      }
      return ret
    }
  }
}
</script>

<style lang="css">
</style>
