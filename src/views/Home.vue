<template>
  <div>
    <Warning v-if="WarningWindowVisible" @closeWarning="closeWarningWindow" @deleteContact="deleteContact" @contactById="contactById">
     <p v-contact.person>Delete?</p>
     </Warning>
    <h1>Contact List</h1>

    <hr>

    <table v-if="contacts.length">
      <thead>
        <tr>
          <th>№</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Open</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(contact, idx) of contacts" :key="contact.id">
          <td>{{idx + 1}}</td>
          <td>{{contact.person}}</td>
          <td>{{contact.phone}}</td>
          <td>
            <router-link tag="button" class="btn btn-small" :to="'/information/' + contact.id">
            Go to
            </router-link>
          </td>
          <td>
            <button class="btn red btn-small" type="button" @click="ShowWarning">
            Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No contacts</p>
  </div>
</template>

<script>
import Warning from '@/components/Warning'
export default {
  name: 'Home',
  components: {
    Warning
  },
  data(){
    return{
      WarningWindowVisible: false
    }
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts
    }
  },
  methods: {
    ShowWarning() { 
      this.WarningWindowVisible = true
    },
    deleteContact(idx) {
      this.$store.dispatch('deleteContact', idx)
      this.WarningWindowVisible = false
      
    },
    closeWarningWindow(){
      this.WarningWindowVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
  h1{
    text-align: center;
  }
</style>