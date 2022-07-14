export default {
  getContactInputsContent: state => state.contactInputsContent,
  getOpenAddContactModal: state => state.openAddContactModal,
  getContacts: state => state.contacts,
  getContactsLength: state => state.contacts.length,

  getContactById (state) {
    const contacts = state.contacts[state.openAddContactModal.contactId]
    const contactsToArray = []

    for (let contact in contacts) {
      contactsToArray.push(contacts[contact])
    }

    return contactsToArray
  },

  getFoundContacts: state => state.foundContacts
}