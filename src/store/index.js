import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: JSON.parse(localStorage.getItem('contacts') || '[]')
  },
  mutations: {
    addContact(state, contact){
      state.contacts.push(contact)

      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },
    updateContact(state, {id, person, phone, email, comment}) {
      const contacts = state.contacts.concat()

      const idx = contacts.findIndex(c => c.id === id)
      const contact = contacts[idx]

      contacts[idx] = {...contact, person, phone, email, comment}

      state.contacts = contacts
      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },
    deleteContact(state, idx) {
      state.contacts.splice(idx, 1)
    }
  },
  actions: {
    addContact({commit}, contact) {
      commit('addContact', contact)
    },
    updateContact({commit}, contact) {
      commit('updateContact', contact)
    },
    deleteContact({commit}, idx){
      commit('deleteContact', idx)
    }
  },
  getters: {
    contacts: s => s.contacts,
    contactById: s => id => s.contacts.find(c => c.id === id)
  },
  modules: {
  }
})
