<template>
  <v-container fluid class="container d-flex">
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="12" md="4" class="pa-0 ma-0">
        <div class="container__contact-card pt-4 px-4">
          <v-form @submit.prevent="saveContact()">
            <span class="container__title">{{ title }}</span>

            <hr class="container__divisor1">
            
            <div class="central-content">
              <div v-if="operation === 'create' || operation === 'edit'">
                <form-input
                  v-for="(input, index) in centralContent"
                  :key="index"
                  
                  :id="input.index"
                  :label="input.label"
                  :inputType="input.inputType"
                  :width="input.width"
                  :height="input.height"
                  :input="input.input"
                  :autofocus="input.autofocus"
                  :value="operation === 'edit' ? getContactById[index] : ''"
                />
              </div>

              <div v-else-if="operation === 'delete'" class="central-content__delete">
                <span class="ml-2">{{ centralContent[0] }}</span>
              </div>
            </div>

            <hr class="container__divisor2">

            <div class="d-flex justify-end container-buttons">
              <v-btn
                class="container-buttons__cancel-button mr-4"
                :type="firstButton.type"
                color="primary"
                depressed
                rounded
                text
                @click.prevent="cancelOperation()"
              >
                {{ firstButton.text }}
              </v-btn>
              <v-btn
                class="container-buttons__save-button"
                :class="{ 'container-buttons__save-button--disabled': verifyEmptyInputs && operation == 'create' }"
                :type="secondButton.type"
                color="primary"
                @click.prevent="actionForContact(operation)"
              >
                {{ secondButton.text }}
              </v-btn>
            </div>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'contact-modal',
  props: {
    operation: {
      type: String,
      default: 'create'
    },

    centralContent: {
      type: Array,
    },

    title: {
      type: String,
      default: 'Criar novo contato',
    },

    firstButton: {
      type: Object,
      default() {
        return { buttonType: 'cancel', text: 'Cancelar' }
      }
    },

    secondButton: {
      type: Object,
      default() {
        return { buttonType: 'submit', text: 'Salvar' }
      }
    },
  },

  data () {
    return {
      emptyInputs: true,
      currentContactsList: JSON.parse(localStorage.getItem('contactsList')),
    }
  },

  computed: {
    ...mapGetters(['getContactInputsContent', 'getOpenAddContactModal', 'getContactById']),

    verifyEmptyInputs () {
      const values = Object.values(this.getContactInputsContent)
      const hasEmptyValue = values.some(value => !value === false)

      return !hasEmptyValue
    },
  },

  methods: {
    ...mapActions(['openAddContactModal', 'clearContactInputsContent', 'searchContacts',]),

    cancelOperation () {
      this.clearContactInputsContent()
      this.openAddContactModal({ open: false })
    },

    actionForContact (operation) {
      switch (operation) {
        case 'create':
          this.createContact(this.getContactInputsContent)
          break

        case 'edit':
          this.editContact(this.getContactInputsContent, this.getOpenAddContactModal.contactId)
          break

        case 'delete':
          this.deleteContact(this.getOpenAddContactModal.contactId)
          break
      }
      
      this.searchContacts()
      this.clearContactInputsContent()
      this.openAddContactModal({ open: false, operation: this.operation })
    },

    setId (currentContactsList, currentId) {
      if (!!currentContactsList.find(contact => contact.id == currentId)) {
        currentId++
        this.setId(currentContactsList, currentId)
      }

      return currentId
    },

    createContact (contactInputsContent) {
      if (localStorage.contactsList) {
        contactInputsContent['newContact'] = true
        contactInputsContent['id'] = this.setId( this.currentContactsList, this.currentContactsList.length)

        // Adiciona o item na posição 0 do array substituindo 0 elementos
        this.currentContactsList.splice(0, 0, contactInputsContent)

        const contactsListString = JSON.stringify(this.currentContactsList )

        localStorage.setItem('contactsList', contactsListString)

      } else {
        const contacts = []

        contactInputsContent['newContact'] = true
        contactInputsContent['id'] = 0

        contacts.push(contactInputsContent)

        localStorage.setItem('contactsList', JSON.stringify(contacts))
      }
    },


    editContact (contactInputsContent, contactId) {
      let contactIndex = this.currentContactsList.findIndex(contact => contact.id === contactId)

      this.currentContactsList[contactIndex] = contactInputsContent

      localStorage.setItem('contactsList', JSON.stringify(this.currentContactsList))
    },

    deleteContact (contactId) {
      let contactIndex = this.currentContactsList.findIndex(contact => contact.id === contactId)

      /* Seleciona o contato a ser deletado de oldContactsListJson, remove e destaca ele na variável contactListDeleted.
        Esse valor fica guardado e pode ser usado para restaurar o contato deletado, por exemplo. */
      const contactListDeleted = this.currentContactsList.splice(contactIndex, 1)

      console.log('Contato deletado!')
      console.table(contactListDeleted)

      localStorage.setItem('contactsList', JSON.stringify(this.currentContactsList))
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";

.container {
  position: fixed;
  inset: 0;
  min-width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;

  &__contact-card {
    width: 100%;
    /* Quando coloquei a altura padrão do Zeplin, o conteúdo não cabia no card,
      mesmo seguindo à risca cada pixel dos components do card, então aumentei para 350px. 
      Também diminui em 2px os margins de cada inpu para tornar o layout mais fidedigno possível, visualmente falando */

    /* height: 342px; */
    min-height: 207px;
    max-height: 350px;
    padding: 1rem;
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
   /*  margin: 12.5px 0 19.5px -16px ; */
    margin: 12px 0 19px -16px ;
    border: solid 1px $divisor;
  }

  &__divisor2 { 
    margin: 6px 0 15px -16px;
  }
}

.central-content {
  &__delete {
    font-size: 0.875rem;
    color: $dark;
    margin-top: 0.5px;
    padding-bottom: 57px;
  }
}

.container-buttons {
  &__save-button, &__cancel-button {
    width: 4.5rem !important;
    height: 2rem !important;
    font-size: 0.875rem !important;
    font-weight: 500 !important;
    border-radius: 16px !important;
    padding: 0.5rem 1rem !important;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.08),
    inset 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 2px 4px 0.5px rgba(0, 0, 0, 0.16) !important;

    &--disabled {
      opacity: 0.32;
      pointer-events: none;
    }
  }

  &__cancel-button {
    width: auto!important;
    height: auto !important;
    box-shadow: none !important;
  }
}
</style>