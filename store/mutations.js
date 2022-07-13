const capitalize = require('capitalize-pt-br')

export default {
  
  changeContactInputsContent (state, payload) {
    if (payload.inputId === 'name') {
      state.contactInputsContent[payload.inputId] = capitalize(payload.typedContent)
    } else {
      state.contactInputsContent[payload.inputId] = payload.typedContent
    }
  },

  clearContactInputsContent (state) {
    state.contactInputsContent.name = '' ,
    state.contactInputsContent.email = '' ,
    state.contactInputsContent.phoneNumber = ''
  },
  
  changeStatusAddContactModal (state, payload) {
    state.openAddContactModal.open = payload.open
    state.openAddContactModal.operation = payload.operation || ''
    state.openAddContactModal.contactId = payload.contactId || 0
  },
  
  changeContacts (state, payload) {
    state.contacts = payload
  },
}