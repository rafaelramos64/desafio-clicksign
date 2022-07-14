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
    const contactsList = JSON.parse(localStorage.contactsList || '[]')

    context.commit('changeContacts', contactsList)

    /* let contactsListnew = contactsList */

    

    /* setTimeout( async () => {
      if (contactsListnew.length > 0) {
        contactsListnew = contactsListnew.map( contact => {
          if (contact.newContact == true) contact.newContact = false
    
          return contact
        })
      }

      await context.commit('changeContacts', contactsListnew)

      localStorage.setItem('contactsList', JSON.stringify(contactsListnew))
    }, 10000)*/
  },
}