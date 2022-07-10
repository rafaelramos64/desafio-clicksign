<template>
  <div class="main-container">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <div class="main-container__contact-card ">
          <v-form @submit.prevent="saveContact()">
            <span class="main-container__title">Criar novo contato</span>

            <hr>

            <v-text-field
               label="Last Name"
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

            <hr>

            <div class="d-flex justify-end">
              <v-btn class="mr-4" type="cancel" tilec>Cancelar</v-btn>

              <v-btn type="subimit" rounded disabled>Salvar</v-btn>
            </div>
          </v-form>
          <hr>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";

.main-container {
  min-width: 100vh;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);

  &__contact-card {
    width: 432px;
    height: 342px;
    padding: 16px 0;
    border-radius: 16px;
    box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
    background-color: #fff;
  }
}
</style>