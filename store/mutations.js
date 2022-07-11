export default {
  changeContactInputsContent (state, payload) {
    state.contactInputsContent[payload.inputId] = payload.typedContent
  }
}