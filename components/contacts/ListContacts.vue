<template>
  <v-container fluid >
    <v-row>
      <v-col cols="12" class="pa-0">
        <v-simple-table
          fixed-header
          class="table"
        >
          <template v-slot:default>
            <thead>
              <tr>
                <th class="table__th text-left">
                  <span class="ml-sm-9">Contatos</span>
                </th>
                <th class="table__th text-left">
                  E-mail
                </th>
                <th class="table__th text-left">
                  Telefone
                </th>
                <th class="table__th text-right">
                  <span class="mr-5">Ações</span>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(contact, index) in getFoundContacts || getContacts"
                :key="index"
                class="table__tr"
                :class="{ 'table__new-contact': contact.newContact }"
              >
                <td class="table__td pl-2">
                  <v-btn
                    icon
                    height="24px"
                    width="24px"
                    class="mr-xs-2 mr-sm-4 text-uppercase table__contact-button d-inline-flex align-center"
                    :style="`background-color: ${contactColors[index]}`"
                  >
                    <span class="table__contact-letter">{{ getFirstCharacter(contact.name) }}</span>
                  </v-btn>

                  <v-tooltip top color="primary">
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on" >{{ getNameSurname(contact.name) }}</span>
                    </template>

                    <span>{{ contact.name }}</span>
                  </v-tooltip>
                </td>

                <td class="table__td">{{ contact.email }}</td>
                <td class="table__td">{{ contact.phoneNumber }}</td>

                <td class="d-flex justify-end align-center">
                  <v-btn
                    class="table__icon"
                    icon
                    color="primary"
                    @click.prevent="editContact(index)"
                  >
                    <img width="16px" height="16px" src="@/assets/images/ic-edit@2x.png" alt="Edit Icon">
                  </v-btn>

                  <v-btn
                    class="table__icon"
                    icon
                    color="primary"
                    @click.prevent="removeContact(index)"
                  >
                    <img width="16px" height="16px" src="@/assets/images/ic-delete@2x.png" alt="Delete Icon">
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'lit-contacts',
  data () {
    return {
      contactColors: []
    }
  },

  created () {
    this.getContactColors()
  },

  computed: {
    ...mapGetters(['getOpenAddContactModal', 'getContacts', 'getContactsLength', 'getFoundContacts',])
  },

  watch: {
    getContactsLength () {
      if (this.getOpenAddContactModal.operation === 'create') this.removeContactFocus()
    }
  },

  methods: {
    ...mapActions(['openAddContactModal', 'searchContacts']),

    getContactColors () {
      const colors = [
        '#fa8d68',
        '#90d26c',
        '#68a0fa',
        '#fab668',
        '#8368fa',
        '#fa68b5',
        '#5fe2c4',
        '#f55a5a',
      ]

      for (let index = 0; index < 30; index++) {
        this.contactColors.push(...colors)
      }
    },

    getFirstCharacter (name) {
      return name.charAt(0)
    },

    getNameSurname (fullName) {
      const fullNameSplited = fullName.split(' ')

      const firstName = fullNameSplited[0]
      const lastName = fullNameSplited.length > 1 ? 
        fullNameSplited[fullNameSplited.length - 1] : ''

      return firstName + ' ' + lastName
    },

    editContact (index) {
      this.openAddContactModal({ open: true, operation: 'edit', contactId: index })
    },

    removeContact (index) {
      this.openAddContactModal({ open: true, operation: 'delete', contactId: index })
    },

    removeContactFocus () {
      let contactsList = JSON.parse(localStorage.contactsList || '[]')
      
      setTimeout(() => {
        if (contactsList.length > 0) {
          contactsList = contactsList.map( contact => {
            if (contact.newContact === true) contact.newContact = false
            
            return contact
          })
        }

        const sortedContactsList = this.sortContacts(contactsList)

        localStorage.setItem('contactsList', JSON.stringify(sortedContactsList))

        this.searchContacts()

      }, 10000)
    },

    sortContacts (contacsToSort) {
      const contactsSorted = contacsToSort.sort((x,y) => {
        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase()
        return a === b ? 0 : a > b ? 1 : -1
      })

      return contactsSorted
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";


.v-data-table {
  background-color: #fff;
  border: 1px solid $border-table;
}

.table {
  &__th, &__td, &__contact-button  {
    font-size: 0.813rem !important;
    font-weight: normal !important;
    font-stretch: normal !important;
    font-style: normal !important;
    line-height: normal !important;
    letter-spacing: normal !important;
    color: $bluey-grey !important;
  }

  &__tr:hover {
    background-color: $very-light-pink !important;
  }

  &__new-contact {
    background-color: $very-light-pink !important;
    box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.08),
      inset 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 1px 2px 0.5px rgba(0, 0, 0, 0.16) !important;
  }

  &__td {
    font-size: 0.875rem !important;
    color: $dark !important;
  }

  &__contact-button {
    font-size: 1rem !important;
    color: #fff !important;
    pointer-events: none;
  }

  &__contact-letter {
    margin-top: 1px;
    margin-right: 1px;
  }

  &__icon:hover {
    transform: scale(1.1);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.08),
      inset 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 2px 4px 0.5px rgba(0, 0, 0, 0.16) !important;
  }
}
</style>