// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Meta from 'vue-meta'
import Raphael from 'raphael/raphael'
global.Raphael = Raphael

import { taxDescription } from './constants'

import VueMasonryPlugin from 'vue-masonry'
Vue.use(VueMasonryPlugin)
Vue.use(Meta)

Vue.config.productionTip = false

window.years = ['2012', '2013', '2014', '2015', '2016', '2017']

window.apiLocation = 'http://donosaur.org/api'
// window.apiLocation = 'http://localhost:8090'

window.toTitleCase = function (str) {
  if (!str) return ''
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

window.formatMoney = function (val) {
  if (!val) {
    val = 0
  }
  var n = 0
  var x = 3
  var pre = ''
  if (val > 1e9) {
    val = val / 1e9
    pre = ' Billion'
    if (val % 1 !== 0) {
      n = 2
    }
  }
  if (val > 1e6) {
    val = val / 1e6
    pre = ' Million'
    if (val % 1 !== 0) {
      n = 2
    }
  }

  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')'
  return '$' + val.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,') + pre
}

Vue.filter('toTitleCase', window.toTitleCase)

Vue.filter('formatMoney', window.formatMoney)

Vue.filter('taxDescription', function(key) {
  if (taxDescription[key]) {
    return taxDescription[key].desc
  } else {
    console.log('Not Found', key)
    return key
  }
})

Vue.filter('taxValueFormatted', function(row) {
  if (taxDescription[row.key]) {
    if (taxDescription[row.key].type === 'Char') {
      if (row.value === 'Y') {
        return 'Yes'
      } else if (row.value === 'N') {
        return 'No'
      }
      return 'Error'
    } else if (taxDescription[row.key].type === 'Num') {
      return window.formatMoney(row.value)
    }
  }
  return row.value
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
