<template lang="html">
  <div>
    <strong>Deductiblity</strong>
    <br>
    <small>{{deductabilityType}}</small>
    <div class="ui divider"></div>
    <strong>990 Filing</strong>
    <br>
    <small>{{filingReq}}</small>
    <div class="ui divider"></div>
    <strong>990 PF Filing</strong>
    <br>
    <small>{{PFfilingReq}}</small>
  </div>
</template>

<script>
export default {
  props: ['meta'],
  computed: {
    deductabilityType() {
      if (!this.meta) {
        return 'Unknown'
      }
      switch (parseInt(this.meta.DEDUCTIBILITY)) {
        case 0:
          return 'Not required to file 990PF'
        case 1:
          return 'Required to file 990PF'
        default:
          // console.log('DEDUCTIBILITY', this.meta.DEDUCTIBILITY)
          return 'Unknown'
      }
    },
    filingReq() {
      if (!this.meta) {
        return 'Unknown'
      }
      switch (parseInt(this.meta.FILING_REQ_CD)) {
        case 1:
          return 'Contributions are deductible.'
        case 2:
          return 'Contributions are not deductible.'
        case 4:
          return 'Contributions are deductible by treaty (foreign organizations).'
        default:
          // console.log('FILING_REQ_CD', this.meta.FILING_REQ_CD)
          return 'Unknown'
      }
    },
    PFfilingReq() {
      if (!this.meta) {
        return 'Unknown'
      }
      switch (parseInt(this.meta.PF_FILING_REQ_CD)) {
        case 0:
          return 'Not required to file (all other)'
        case 1:
          return '990 or 990EZ'
        case 2:
          return 'Required to file Form 990-N - Income less than $25,000 per year'
        case 3:
          return 'Group return'
        case 4:
          return 'Required to file Form 990-BL, Black Lung Trusts'
        case 6:
          return 'Not required to file (church)'
        case 7:
          return 'Government 501(c)(1)'
        case 13:
          return 'Not required to file (religious organization)'
        case 14:
          return 'Not required to file (instrumentalities of states or political subdivisions)'
        default:
          // console.log('PF_FILING_REQ_CD', this.meta.PF_FILING_REQ_CD)
          return 'Unknown'
      }
    }
  }
}
</script>

<style lang="css">
</style>
