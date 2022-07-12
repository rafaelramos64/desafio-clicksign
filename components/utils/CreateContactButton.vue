<template>
  <v-btn
    class="create-btn"
    color="light_yellowish_green"
    @click.prevent="openAddContactModal({ open: true, operation: 'create'})"
  >
    <img
      width="16px"
      height="16px"
      src="@/assets/images/ic-plus.png"
      alt="Plus Icon"
      class="mr-2"
    />
    <span>Criar contato</span>
  </v-btn>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'create-contact-button',

  methods: {
    ...mapActions(['openAddContactModal']),
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";

.create-btn {
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
</style>