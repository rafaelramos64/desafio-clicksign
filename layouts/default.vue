<template>
  <v-app class="main-sheet">
    <nav-bar />
    
    <v-main class="main-background">
      <Nuxt />
    </v-main>
    
    <footer-bar />
  </v-app>
</template>

<script>
import NavBar from '~/components/app/NavBar.vue'
export default {
  components: { NavBar },
  name: 'DefaultLayout',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";

.main-background {
  background-color: $background;
}

.main-sheet {
  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
  }
}
</style>
