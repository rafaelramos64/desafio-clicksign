<template>
  <div class="navbar d-sm-flex align-center justify-space-between">
    <img class="navbar__logo" src="@/assets/images/ic-logo.png" alt="Ubook Logo" />
  
    <div class="navbar__input-container">
      <input
        class="navbar__search-input"
        type="text"
        placeholder="Buscar..."
        @click="getFocus(true)"
        @blur="getFocus(false)"
      />
      
      <v-icon
        class="navbar__search-icon"
        :color="focusedSearchIcon ? 'primary' : 'magnify' "
      >
        mdi-magnify
      </v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

  data () {
    return {
      focusedSearchIcon: false,
    }
  },

  methods: {
    getFocus (focus) {
      this.focusedSearchIcon = focus
    }
  }
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

  &__input-container {
    position: relative;
    margin-top: 8px;
    height: 32px;

    @media only screen and (min-width: 600px) {
      margin: 0;
      width: 71.6%;
    }
  }

  &__search-input {
    width: 100%;
    height: 100%;
    background-color: $secondary;
    border-radius: 4px !important;
    color: $search-text;
    padding-left: 8px;

    &:focus-visible {
      outline: none;
    }
  }


  &__search-icon {
    position: absolute;
    right: 8px;
    top: 8px;
    height: 16px;
    width: 16px;
    object-fit: contain;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      color: $primary !important;
    }
  }
}
</style>