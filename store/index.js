import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export const state = () => ({
  contactInputsContent: {
    name: '' ,
    email: '' ,
    phoneNumber: '' ,
  },
  openAddContactModal: {
    open: false,
    operation: '',
    contactId: 0,
  },
  contacts: [],
  foundContacts: [],
})

export default {
  getters,
  state,
  mutations,
  actions,
}