<template lang="html">
  <div>
      <iframe
        style="border:0;"
        width="100%"
        height="450"
        frameborder="0"
        :src="mapsurl"
        allowfullscreen
      />
  </div>
</template>

<script>
export default {
  props: ['meta'],
  data() {
    return {
      key: 'AIzaSyAU_0Coc_Lx2q-YU-Q8HIHAfDnsNxEimKg'
    }
  },
  computed: {
    mapsurl() {
      //         src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAU_0Coc_Lx2q-YU-Q8HIHAfDnsNxEimKg&q=Space+Needle,Seattle+WA" allowfullscreen>
      return `https://www.google.com/maps/embed/v1/place?q=${this.meta.STREET},+${this.meta.CITY},+${this.meta.STATE}&key=${this.key}`
    }
  }
}
</script>

<style lang="css">
</style>
