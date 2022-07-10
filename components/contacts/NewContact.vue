<template>
  <v-container fluid class="main-container d-flex">
    <v-row align="center" justify="center">
      <v-col cols="12" md="4">
        <div class="main-container__contact-card ">
          <v-form @submit.prevent="saveContact()">
            <span class="main-container__title">Criar novo contato</span>

            <hr class="main-container__divisor1">

            <div class="px-2">
              <v-text-field
                label="Nome"
                height="32px"
                outlined
                single-line
                solo
              />

              <v-text-field
                label="E-mail"
                outlined
                single-line
                solo
              />

              <v-text-field
                label="Telefone"
                outlined
                single-line
                solo
              />
            </div>

            <hr class="main-container__divisor2">

            <div class="d-flex justify-end">
              <v-btn class="mr-4" type="cancel" tilec>Cancelar</v-btn>

              <v-btn type="subimit" rounded disabled>Salvar</v-btn>
            </div>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";

.main-container {
  position: fixed;
  inset: 0;
  min-width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;

  &__contact-card {
    width: 100%;
    height: 342px;
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
    background-color: #fff;

    @media only screen and (min-width: 600px) {
      width: 432px;
    }
  }

  &__title {
    color: $dark;
  }

  &__divisor1, &__divisor2 {
    width: calc(100% + 32px);
    height: 2px;
    margin: 12.5px 0 19.5px -16px ;
    border: solid 1px $divisor;
  }

  &__divisor2 { 
    margin: 22px 0 15px -16px;
  }
}


// Formatando configurações para text-fields
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
  box-shadow: none !important;
}

.v-text-field--filled > .v-input__control > .v-input__slot, .v-text-field--full-width > .v-input__control > .v-input__slot, .v-text-field--outlined > .v-input__control > .v-input__slot {
  align-items: stretch;
  min-height: 32px;
}
</style>