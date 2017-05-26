<template lang="html">
  <div class="ui container" style="padding-top:20px">

    <div class="ui header inverted">
      <div class="row">
        <div class="col-xs-9">
          <h2 class="truncate">{{metaData.NAME | toTitleCase}}</h2>
        </div>
        <div class="col-xs-3" style="padding-left: 0;">
          <button class="ui button basic right floated inverted tiny" v-on:click.stop="openShare()">
            <i class="share icon"></i>
            Share
          </button>
        </div>
      </div>
      <div class="sub header">{{metaData.CITY | toTitleCase}}, {{metaData.STATE}}</div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-md-6">
        <div class="widget-margin">
          <h4 class="ui horizontal divider header inverted">
            <i class="world icon"></i>
            Location
          </h4>
          <div class="ui raised segment" style="padding:0px;">
            <LocationMap
            :meta="metaData"
            />
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
        <div class="widget-margin">
          <h4 class="ui horizontal divider header inverted">
            <i class="file icon"></i>
            Filing
          </h4>
          <div class="ui raised segment">
            <FilingStatus
            :meta="metaData"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 col-xs-12">
            <div class="widget-margin">
              <h4 class="ui horizontal divider header inverted">
                <i class="pie chart icon"></i>
                Income Volume
              </h4>
              <div class="ui raised segment">
                <FinancesRevenue
                :tax="taxData"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="widget-margin">
              <h4 class="ui horizontal divider header inverted">
                <i class="pie chart icon"></i>
                Expense Volume
              </h4>
              <div class="ui raised segment">
                <FinancesExpense
                :tax="taxData"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="widget-margin">
      <h4 class="ui horizontal divider header inverted">
        <i class="line chart icon"></i>
        Finances
      </h4>
      <div class="ui raised segment">
        <Finances
        :tax="taxData"
        />
      </div>
    </div>

    <div class="widget-margin">
      <h4 class="ui horizontal divider header inverted">
        <i class="line chart icon"></i>
        Employee Data
      </h4>
      <div class="ui raised segment">
        <Employees
        :tax="taxData"
        />
      </div>
    </div>

    <div class="widget-margin">
      <h4 class="ui horizontal divider header inverted">
        <i class="line chart icon"></i>
        Fact Sheet
      </h4>
      <div class="ui raised segment">
        <FactSheet
        :tax="taxData"
        />
      </div>
    </div>

    <div v-for="(data, year) in taxData">
      <div v-for="obj in data" class="widget-margin">
        <h4 class="ui horizontal divider header inverted">
          <i class="newspaper icon"></i>
          {{obj.type}} / {{year}}
        </h4>
        <div class="ui raised segment">
          <TaxTable
          :obj="obj"
          />
        </div>
      </div>
    </div>

    <Share
    :ein="metaData.EIN"
    :open="shareOpen"
    :name="metaData.NAME"
    v-on:close="closeShare"
    />

  </div>
</template>

<script>
import store from '../store'
import TaxTable from './widgets/TaxTable'
import FilingStatus from './widgets/FilingStatus'
import Share from './Share'
import LocationMap from './widgets/LocationMap'
import Finances from './widgets/Finances'
import FinancesRevenue from './widgets/FinancesRevenue'
import FinancesExpense from './widgets/FinancesExpense'
import FactSheet from './widgets/FactSheet'
import Employees from './widgets/Employees'

export default {
  components: {
    TaxTable,
    FilingStatus,
    Share,
    LocationMap,
    Finances,
    FinancesRevenue,
    FinancesExpense,
    FactSheet,
    Employees
  },
  data() {
    return {
      ein: this.$route.params.ein,
      loading: false,
      shareOpen: false
    }
  },
  metaInfo() {
    return {
      title: 'Donosaur',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'og:url',
          content: 'http://donosaur.org/#/profile/' + this.ein
        },
        {
          name: 'og:title',
          content: this.metaData ? this.metaData.NAME : ''
        },
        {
          name: 'og:image',
          content: 'http://donosaur.org/logo/logo.png'
        }
      ]
    }
  },
  methods: {
    closeShare() {
      this.shareOpen = false
    },
    openShare() {
      store.dispatch('setShared', this.ein)
      this.shareOpen = true
    }
  },
  computed: {
    metaData() {
      return store.state.organization.meta
    },
    taxData() {
      return store.state.organization.tax
    },
    twurl() {
      let encoded = encodeURIComponent(`www.donosaur.org/#!/profile/${this.metaData.EIN}`)
      return `https://twitter.com/intent/tweet?text=${this.metaData.NAME} is awesome!&url=${encoded}`
    },
    gpurl() {
      let encoded = encodeURIComponent(`www.donosaur.org/#!/profile/${this.metaData.EIN}`)
      return `https://plus.google.com/share?url=${encoded}`
    },
    fburl() {
      let encoded = encodeURIComponent(`www.donosaur.org/#!/profile/${this.metaData.EIN}`)
      return `https://www.facebook.com/sharer/sharer.php?u=${encoded}&t=${this.metaData.NAME} is awesome!`
    }
  },
  mounted() {
    this.loading = true
    store.dispatch('clearOrgData').then(() => {
      store.dispatch('getOrgData', this.ein).then(() => {
        this.loading = false
      })
    })
  }
}
</script>

<style lang="css">

.widget-margin {
  margin-top: 35px;
}

.morris-hover.morris-default-style {
  text-align: start
}

.morris-hover.morris-default-style .morris-hover-row-label {
  text-align: center;
}

</style>
