<template>
  <div class="navbar d-sm-flex align-center justify-space-between">
    <v-btn to="/" text color="transparent" class="pa-0">
      <img class="navbar__logo" src="@/assets/images/ic-logo@2x.png" alt="Ubook Logo" />
    </v-btn>

    <create-contact-button v-if="getContacts.length > 0" :block="$vuetify.breakpoint.xs" />
  
    <input-contacts-research />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  

  computed: {
    ...mapGetters(['getContacts']),
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";

.navbar {
  min-height: 64px;
  padding: 16px;
  background-color: $background;

  @media only screen and (min-width: 600px) {
    height: 64px;
  }

  &__logo {
    width: 148px;
    height: 32px;
    object-fit: contain;
  }

}
</style>