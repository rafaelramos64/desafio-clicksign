<template>
  <v-container fluid class="main-container d-flex">
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="12" md="4" class="pa-0 ma-0">
        <div class="main-container__contact-card pt-4 px-4">
          <v-form @submit.prevent="saveContact()">
            <span class="main-container__title">{{ title }}</span>

            <hr class="main-container__divisor1">
            
            <div v-if="operation === 'Create Contact'">
              <div v-for="(input, index) in inputs" :key="index">
                <form-input
                  :label="input.label"
                  :inputType="input.inputType"
                  :width="input.width"
                  :height="input.height"
                  :input="input.input"
                  :id="input.index"
                />
              </div>
            </div>

            <hr class="main-container__divisor2">

            <div class="d-flex justify-end">
              <v-btn
                class="main-container__cancel-button mr-4"
                :type="firstButton.type"
                color="primary"
                depressed
                rounded
                text
                @click.prevent="openAddContactModal(false)"
              >
                {{ firstButton.text }}
              </v-btn>
              <v-btn
                class="main-container__save-button"
                :class="{ 'main-container__save-button--disabled': verifyEmptyInputs }"
                :type="secondButton.type"
                color="primary"
                @click="saveContact()"
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
      default: 'Create Contact'
    },

    inputs: {
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
    }
  },

   computed: {
    ...mapGetters(['getContactInputsContent']),

    verifyEmptyInputs () {
      const values = Object.values(this.getContactInputsContent)
      const hasEmptyValue = values.some(value => !value === false)

      return !hasEmptyValue
    },
  },

  methods: {
    ...mapActions(['openAddContactModal']),

    saveContact () {
      if (localStorage.listContacts) {
        const oldListContacts = localStorage.getItem('listContacts')
        const oldListContactsJson = JSON.parse(oldListContacts)

        oldListContactsJson.push(this.getContactInputsContent)

        const listContactsString = JSON.stringify(oldListContactsJson )

        localStorage.setItem('listContacts', listContactsString)

      } else {
        const listContacts = []
        
        listContacts.push(this.getContactInputsContent)

        localStorage.setItem('listContacts', JSON.stringify(listContacts))
      }
    }
  }
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
    /* Quando coloquei a altura padrão do Zeplin, o conteúdo não cabia no card,
      mesmo seguindo à risca cada pixel dos components do card, então aumentei para 350px. 
      Também diminui em 2px os margins de cada inpu para tornar o layout mais fidedigno possível, visualmente falando */

    /* height: 342px; */
    height: 350px;
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

  &__save-button, &__cancel-button {
    width: 4.5rem !important;
    height: 2rem !important;
    font-size: 0.875rem !important;
    font-weight: 500 !important;
    border-radius: 16px !important;
    padding: 0.5rem 1rem !important;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.08),
    inset 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 2px 4px 0.5px rgba(0, 0, 0, 0.16)  !important;

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