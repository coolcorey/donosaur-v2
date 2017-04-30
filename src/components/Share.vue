<template lang="html">
  <div class="ui modal small" :id="isolatedID()">
    <i class="close icon"></i>
    <div class="header">
      <div class="truncate">
        {{name}}
      </div>
    </div>
    <div class="content" style="text-align: center;">

      <div>
        <div class="ui labeled button">
          <a class="ui facebook button" target="_blank" :href="fburl" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=480');return false;">
            <i class="facebook icon"></i>
            Facebook
          </a>
          <a class="ui basic left pointing label">
            {{fbshares}}
          </a>
        </div>
      </div>

      <div class="ui divider"></div>

      <div>
        <div class="ui labeled button">
          <a class="ui google plus button" target="_blank" :href="gpurl">
            <i class="google plus icon"></i>
            Google+
          </a>
          <a class="ui basic left pointing label">
            {{gpshares}}
          </a>
        </div>
      </div>

      <div class="ui divider"></div>

      <div>
        <div class="ui labeled button">
          <a class="ui twitter button" target="_blank" :href="twurl">
            <i class="twitter icon"></i>
            Twitter
          </a>
          <a class="ui basic left pointing label">
            {{twshares}}
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['ein', 'open', 'name'],
  data() {
    return {
      fbshares: Math.floor(Math.random() * (1 + 1000)),
      twshares: Math.floor(Math.random() * (1 + 2500)),
      gpshares: Math.floor(Math.random() * (1 + 100))
    }
  },
  computed: {
    twurl() {
      let encoded = encodeURIComponent(`www.donosaur.org/#!/profile/${this.ein}`)
      return `https://twitter.com/intent/tweet?text=${this.name} is awesome!&url=${encoded}`
    },
    gpurl() {
      let encoded = encodeURIComponent(`www.donosaur.org/#!/profile/${this.ein}`)
      return `https://plus.google.com/share?url=${encoded}`
    },
    fburl() {
      let encoded = encodeURIComponent(`www.donosaur.org/#!/profile/${this.ein}`)
      return `https://www.facebook.com/sharer/sharer.php?u=${encoded}&t=${this.name} is awesome!`
    }
  },
  watch: {
    open() {
      window.$(`#${this.isolatedID()}`).modal('show')
      // reset the state of the open flag
      this.$emit('close')
    }
  },
  mounted() {
    window.$(`#${this.isolatedID()}`).modal()
  },
  methods: {
    isolatedID() {
      return `ID${this.ein}`
    }
  }
}
</script>

<style lang="css">

</style>
