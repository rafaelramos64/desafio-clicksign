<template>
  <v-container fluid class="">
    <v-row>
      <v-col cols="12" class="pa-0">
        <v-simple-table
          fixed-header
          max-height="300px"
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
                v-for="(contact, index) in getContacts"
                :key="index"
                class="table__tr"
              >
                <td class="table__td px-2">
                  <v-btn
                    icon
                    height="24px"
                    width="24px"
                    class="mr-4 text-uppercase table__contact-button d-inline-flex align-center"
                    :style="`background-color: ${contactColors[index]}`"
                  >
                    <span class="table__contact-letter">{{ contact.name.charAt(0) }}</span>
                  </v-btn>
                  <span class="text-capitalize">{{ contact.name }}</span>
                </td>

                <td class="table__td">{{ contact.email }}</td>
                <td class="table__td">{{ contact.phoneNumber }}</td>

                <td class="d-flex justify-end">
                  <v-btn icon color="primary" @click.prevent="editContact()">
                    <img width="16px" height="16px" src="@/assets/images/ic-edit@2x.png" alt="Edit Icon">
                  </v-btn>

                  <v-btn icon color="primary" @click.prevent="deleteContact()">
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
import { mapGetters } from 'vuex'

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
    ...mapGetters(['getContacts'])
  },

  methods: {

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
    }
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
}
</style>