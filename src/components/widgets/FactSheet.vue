<template lang="html">
  <div class="limit-height">
    <div class="ui relaxed divided list">
      <div class="item" v-for="fact in factData">
        <i class="large checkmark middle aligned icon olive" v-if="fact.value === 'Y'"> Y</i>
        <i class="large minus middle aligned icon red" v-if="fact.value === 'N'"> N</i>
        <div class="content">
          <div class="header">
            <span>{{fact.key | taxDescription}}</span>
            <span class="right floated">{{fact.year}}</span>
          </div>
          <div class="description">{{fact.year}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tax'],
  data() {
    return {
      facts: [
        'prohibtdtxshltrcd',
        'politicalactvtscd',
        'lbbyingactvtscd',
        'dnradvisedfundscd',
        'maintwrkofartcd',
        'hldassetsintermpermcd',
        'rptincgamingcd',
        'frgnrevexpnscd',
        'frgnofficecd',
        'operatehosptlcd',
        'loantofficercd',
        'grantoofficercd',
        'fmlybusnreltdcd',
        'recvartcd',
        // 'noemplyeesw3cnt',
        'frgnacctcd',
        'rcvdpdtngcd'
        // 'noindiv100kcnt',
        // 'nocontractor100kcnt'
      ]
    }
  },
  computed: {
    factData() {
      let ret = []
      for (var i = 0; i < window.years.length; i++) {
        let year = window.years[i]
        let yearDocs = this.tax[year] || this.tax[parseInt(year)]
        for (var j = 0; j < yearDocs.length; j++) {
          for (var k = 0; k < this.facts.length; k++) {
            if (yearDocs[j].hasOwnProperty(this.facts[k])) {
              ret.push({
                key: this.facts[k],
                value: yearDocs[j][this.facts[k]],
                year: year
              })
            }
          }
        }
      }
      return ret.sort((thisOne, nextOne) => {
        return thisOne > nextOne
      })
    }
  }
}
</script>

<style lang="css" scoped>
.content {
  width: 100%
}
.limit-height {
  max-height: 280px;
  overflow: auto;
}
</style>
