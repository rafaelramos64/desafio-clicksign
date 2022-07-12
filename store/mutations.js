export default {
  
  changeContactInputsContent (state, payload) {
    state.contactInputsContent[payload.inputId] = payload.typedContent
  },
  
  changeStatusAddContactModal (state, payload) {
    state.openAddContactModal.open = payload.open
    state.openAddContactModal.operation = payload.operation
  },
  
  changeContacts (state, payload) {
    state.contacts = payload
  },
}