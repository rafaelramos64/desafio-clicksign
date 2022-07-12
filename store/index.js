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
    contactId: undefined,
  },
  contacts: [],
})

export default {
  getters,
  state,
  mutations,
  actions,
}