import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export const state = () => ({
  contactInputsContent: {
    name: '' ,
    email: '' ,
    phoneNumber: '' ,
  },
})

export default {
  getters,
  state,
  mutations,
  actions,
}