<template>
  <v-footer
    fixed
    app
    tile
    color="background"
    class="border-footer"
  >
    <v-container fluid class="pa-0">
      <v-row v-if="$vuetify.breakpoint.smAndDown" justify="center" align="center">
        <v-col cols="12" class="text-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            class="mx-4 increase-btn"
            icon
          >
            <a :href="icon.link" target="_blank">
              <v-icon 
                color="primary" size="28px">
                {{ icon.icon }}
              </v-icon>
            </a>
          </v-btn>
        </v-col>
      </v-row>

      <v-divider v-if="$vuetify.breakpoint.smAndDown"></v-divider>

      <v-row justify="space-between" align="center" no-gutters class="py-1">
        <v-col cols="8" sm="4">
          <span class="rafael-ramos">&copy; Copyleft || <b> Rafael Ramos </b> </span>
        </v-col>

        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="4" class="text-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            class="mx-4 increase-btn"
            icon
          >
            <a :href="icon.link" target="_blank">
              <v-icon 
                color="primary" size="28px">
                {{ icon.icon }}
              </v-icon>
            </a>
          </v-btn>
        </v-col>

        <v-col cols="4" class="d-flex justify-end">
          <img width="40px" src="@/assets/images/clicksign.png" alt="Clicksign logo" />
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      icons: [
        { icon: 'mdi-github', link: 'https://github.com/rafaelramos64' },
        { icon: 'mdi-email', link: 'mailto:<rafaelramos64@protonmail.com>' },
        { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/rafael-ramos64' },
      ],
    } 
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/variables.scss';

.border-footer {
  border-top: 1px solid rgba(0,0,0,.075) !important;
}
.rafael-ramos {
  color: $dark !important;
}
.increase-btn:hover {
  transform: scale(1.1) !important;
  & .v-icon {
    color: $primary--hover!important;
  }
}
a {
  text-decoration: none !important;
}
</style>