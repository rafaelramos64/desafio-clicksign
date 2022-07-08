<template>
  <v-container class="home">
    <v-row justify="center" align="center">
      <img width="237px" height="200px" src="@/assets/images/ic-book@3x.png" alt="Book Image" />
    </v-row>

    <v-row justify="center" align="center" class="my-6">
      <span class="home__text">Nenhum contato foi criado ainda.</span>
    </v-row>

    <v-row justify="center" align="center">
      <v-btn class="home__create-btn" color="light_yellowish_green">
        <img
          width="16px"
          height="16px"
          src="@/assets/images/ic-plus.png"
          alt="Plus Icon"
          class="mr-2"
        />
        <span>Criar contato</span>
      </v-btn>
    </v-row>

    <new-contact />
  </v-container>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";

.home {
  margin-top: 96px;

  &__text {
    color: $dark;
  }

  &__create-btn {
    width: 237px;
    height: 40px !important;
    padding: 0.75rem 1rem;
    border-radius: 20px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.08),
      inset 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 2px 4px 0.5px rgba(0, 0, 0, 0.16);

    & span {
      font-size: 0.875rem !important;
      font-weight: 500 !important;
      color: $primary;
    }

    @media only screen and (min-width: 600px) {
      /* Aqui foi retirado a largura que está no Zeplin porque acaba que o texto fica muito próximo às bordas,
      deixando o botão despadronizado com relação ao modelo no Zeplin, visualmente falando. */

    /* width: 144px; */
      width: auto;
    }
  }
}

</style>
