<template>
  <div class="navbar d-sm-flex align-center justify-space-between">
    <img class="navbar__logo" src="@/assets/images/ic-logo.png" alt="Ubook Logo" />
    
   <!--  <v-text-field
      planceholder="Append"
      solo
      dense
      flat
      background-color="secondary"
      append-icon="mdi-magnify"
    ></v-text-field> -->
  
    <div class="navbar__input-container">
      <input
          class="navbar__search"
          type="text"
          placeholder="Buscar..."
        />

        <img
          class="navbar__search-icon"
          src="@/assets/images/ic-search.png"
          alt="Search Image"
        />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
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

    @media only screen and (min-width: 600px) {
      width: 71.6%;
    }
  }

  &__search {
    height: 32px;
    width: 100%;
    background-color: $secondary;
    border-radius: 4px !important;
    color: $search-text;
    padding-left: 8px;
  }

  &__search-icon {
    position: absolute;
    right: 8px;
    top: 8px;
    height: 16px;
    width: 16px
  }
}
</style>