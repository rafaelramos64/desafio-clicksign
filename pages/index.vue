<template>
  <div class="pa-4">
    <list-contacts v-if="getContacts.length > 0" />
    
    <v-container v-else class="home">
      <v-row justify="center" align="center">
        <img width="237px" height="200px" src="@/assets/images/ic-book@3x.png" alt="Book Image" />
      </v-row>

      <v-row justify="center" align="center" class="my-6">
        <span class="home__text">Nenhum contato foi criado ainda.</span>
      </v-row>

      <v-row justify="center" align="center">
        <create-contact-button />
      </v-row>
    </v-container>

    <contact-modal
      v-if="getOpenAddContactModal.open && getOpenAddContactModal.operation === 'create'" 
      :centralContent="inputs" 
    />

     <contact-modal
      v-if="getOpenAddContactModal.open && getOpenAddContactModal.operation === 'edit'"
      :operation="getOpenAddContactModal.operation" 
      title="Editar contato"
      :centralContent="inputs" 
    />

     <contact-modal
      v-if="getOpenAddContactModal.open && getOpenAddContactModal.operation === 'delete'" 
      :operation="getOpenAddContactModal.operation"
      title="Excluir contato"
      :secondButton="{ buttonType: 'delete', text: 'Excluir' }"
      :centralContent="['Deseja realmente excluir o contato?']"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      inputs: [
        { label: 'Nome', input: 'name', inputType: 'text',  width: '100%', height: '32px', autofocus: true},
        { label: 'E-mail', input: 'email', inputType: 'email',  width: '100%', height: '32px', },
        { label: 'Telefone', input: 'phoneNumber', inputType: 'number',  width: '128px', height: '32px', },
      ],
    }
  },

  mounted () {
    this.searchContacts()
  },

  computed: {
    ...mapGetters(['getOpenAddContactModal', 'getContacts']),
  },

  methods: {
    ...mapActions(['searchContacts']),
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";

.home {
  margin-top: 80px;

  &__text {
    color: $dark;
  }
}

</style>
