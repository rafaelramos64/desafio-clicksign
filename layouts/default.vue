<template>
  <v-app>
    <nav-bar />
    
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
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
