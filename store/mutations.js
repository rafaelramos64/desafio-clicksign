export default {
  
  changeContactInputsContent (state, payload) {
    state.contactInputsContent[payload.inputId] = payload.typedContent
  },
  
  changeStatusAddContactModal (state, payload) {
    state.openAddContactModal = payload
  },
  
  changeContacts (state, payload) {
    state.contacts = payload
  },
}