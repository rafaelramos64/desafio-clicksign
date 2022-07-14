
export default {
  getContactInputsContent: state => state.contactInputsContent,
  getOpenAddContactModal: state => state.openAddContactModal,
  getContacts: state => state.contacts,
  getContactsLength: state => state.contacts.length,

  getContactById (state) {
    let contactByIndex = state.contacts.find(contact => contact.id === state.openAddContactModal.contactId)

    let contactByIndexLikeArray = []

    for (let item in contactByIndex) {
      contactByIndexLikeArray.push(contactByIndex[item])
    }

    return contactByIndexLikeArray
  },

  getFoundContacts: state => state.foundContacts,
}