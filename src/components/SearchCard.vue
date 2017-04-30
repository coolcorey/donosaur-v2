<template lang="html">
  <div class="ui card raised link yellow" v-on:click="viewProfile()">
    <div class="content">
      <div class="truncate name_text">{{name | toTitleCase}}</div>

      <span class="location_text">{{city | toTitleCase}}, {{state}}</span>
      <div class="description">

        <div class="ui middle aligned divided list" style="margin-top: 15px;">
          <div class="item">
            <div class="right floated content">
              <div class="ui">{{income | formatMoney}}</div>
            </div>
            <div class="content">
              Income
            </div>
          </div>
          <div class="item">
            <div class="right floated content">
              <div class="ui">{{revenue | formatMoney}}</div>
            </div>
            <div class="content">
              Revenue
            </div>
          </div>
          <div class="item">
            <div class="right floated content">
              <div class="ui">{{asset | formatMoney}}</div>
            </div>
            <div class="content">
              Assets
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="extra content">
      <span class="left floated share" v-on:click.stop="openShare()">
        <i class="share icon" :class="{shared: shared}"></i>
        Share
      </span>

      <span class="right floated star" v-on:click.stop="toggleFavorite()">
        <i class="star icon" :class="{stared: stared}"></i>
        Favorite
      </span>
    </div>
    <Share
      :ein="ein"
      :open="shareOpen"
      :name="name"
      v-on:close="closeShare"
    />
  </div>
</template>

<script>
import store from '../store'
import Share from './Share'

export default {
  components: {
    Share
  },
  props: ['income', 'asset', 'revenue', 'city', 'state', 'name', 'ein'],
  data() {
    return {
      shareOpen: false
    }
  },
  methods: {
    openShare() {
      store.dispatch('setShared', this.ein)
      this.shareOpen = true
    },
    closeShare() {
      this.shareOpen = false
    },
    toggleFavorite() {
      store.dispatch('toggleFavorite', this.ein)
    },
    viewProfile() {
      this.$router.push({
        name: 'profile',
        params: {
          ein: this.ein
        }
      })
    }
  },
  computed: {
    stared() {
      return store.state.favorites.indexOf(this.ein) !== -1
    },
    shared() {
      return store.state.shares.indexOf(this.ein) !== -1
    }
  }
}
</script>

<style lang="css">

.result {
  width: 300px;
  margin: 10px;
}

.location_text {
  color: grey;
  font-size: small;
}

.name_text {
  font-size: medium;
}

.ui.card>.content .share.icon:hover, .ui.cards>.card>.content .share.icon:hover {
    opacity: 1;
    color: lightgreen;
}

.share.icon.shared {
  color: sandybrown;
}

.star.icon.stared {
  color: sandybrown;
}
</style>
