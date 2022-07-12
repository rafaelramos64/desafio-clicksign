export default {
  
  addContactInputsContent (context, payload) {
    context.commit('changeContactInputsContent', payload)
  },
  
  clearContactInputsContent (context) {
    context.commit('clearContactInputsContent')
  },

  openAddContactModal (context, payload) {
    context.commit('changeStatusAddContactModal', payload)
  },
  
  searchContacts (context) {
    context.commit('changeContacts', JSON.parse(localStorage.listContacts || '[]'))
  },
}