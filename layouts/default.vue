<template>
  <v-app class="main-sheet">
    
    
    <v-main class="main-background">
      <nav-bar />
        <Nuxt />
      <footer-bar />
    </v-main>
    
    
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
