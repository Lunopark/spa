<template>
  <div class="row">
    <div class="col s12">
      <h1>Add contact</h1>

      <form @submit.prevent="submitContact"> 
        <div class="row">
          <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="person" v-model="person" type="text" class="validate" required>
          <label for="person">First Name</label>
          <span class="helper-text" data-error="Contact name is required"></span>
          </div>
          <div class="input-field col s6">
          <i class="material-icons prefix">phone</i>
          <input id="phone" v-model="phone" type="tel" class="validate" required>
          <label for="phone">Telephone</label>
          <span class="helper-text" data-error="Contact number is required"></span>
          </div>
        </div>
        <div class="panel">
          <button class="btn" type="submit">Save contact</button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
export default {
    name: 'Add',
    data: () => ({
        person: '',
        phone: '',
        email: '',
        comment: ''
    }),
    methods: {
        submitContact(){
            const contact = {
                person: this.person,
                phone: this.phone,
                id: Date.now()
            }
            this.$store.dispatch('addContact', contact)
            this.$router.push('/')
        }
    },
    destroyed() {

    }
}
</script>

<style lang="scss" scoped>
    h1{
        text-align: center;
    }
    .panel{
        padding-top: 15px;
        text-align: center;
    }
    input:focus{
        outline: none;
    }
</style>