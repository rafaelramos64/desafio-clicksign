<template>
  <div class="input-container">
    <input
      class="input-container__search-input"
      type="text"
      placeholder="Buscar..."
      autocomplete="off"
      @click="getFocus(true)"
      @blur="getFocus(false)"
    />
    
    <v-icon
      class="input-container__search-icon"
      :color="focusedSearchIcon ? 'primary' : 'magnify' "
    >
      mdi-magnify
    </v-icon>
  </div>
</template>

<script>

export default {
  name: 'input-contacts-research',
  data () {
    return {
      focusedSearchIcon: false,
      contactsResearch: '',
      searchContactsCorrect: '',
      contactsFound: [],
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

.input-container {
  position: relative;
  margin-top: 8px;

  /* Aqui foi diminuido 1px do valor padrão que está no Zeplin porque eu adicionei uma borda de exatamente
    1px para quando o input de pesquisa estiver em foco, a transição de cor da borda ficar mais fluida 
    sem a sensação que o input aumentou de tamanho */
  height: 31px;

  @media only screen and (min-width: 600px) {
    margin: 0;
    width: 71.6%;
  }

  &__search-input {
    width: 100%;
    height: 100%;
    background-color: $secondary;

    // Adicionando borda de 1px
    border: solid 1px $secondary;
    border-radius: 4px !important;
    color: $bluey-grey;
    padding-left: 8px;

    &:focus-visible {
      outline: none;

      // Adicionando transição de cor
      border: 1px solid $primary;
      transition: 0.5s;
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