<template>
  <v-container fluid class="">
    <v-row>
      <v-col cols="12" class="pa-0">
        <v-simple-table
          fixed-header
          height="300px"
        >
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Nome
                </th>
                <th class="text-left">
                  E-mail
                </th>
                <th class="text-left">
                  Telefone
                </th>
                <th class="text-right">
                  <span class="mr-5">Ações</span>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(contact, index) in getContacts"
                :key="index"
              >
                <td>{{ contact.name }}</td>
                <td>{{ contact.email }}</td>
                <td>{{ contact.phoneNumber }}</td>

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

    }
  },

  computed: {
    ...mapGetters(['getContacts'])
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";

</style>