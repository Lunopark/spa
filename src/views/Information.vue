<template>
<div>
    <Warning v-if="WarningWindowVisible" @closeWarning="closeWarningWindow" @deleteContact="deleteContact" @contactById="contactById">
     <p v-contact.person>Delete?</p>
     </Warning>

    <div class="row">
        <div v-if="contact" class="col s12">
        <h1>{{contact.person}}</h1>

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
          <h3>More information</h3>
          <div class="input-field col s6">
          <i class="material-icons prefix">email</i>
          <input id="email" v-model="email" type="text" class="validate">
          <label for="email">Email</label>
          </div>
          <div class="input-field col s6">
          <i class="material-icons prefix">comment</i>
          <input id="comment" v-model="comment" type="text" class="validate">
          <label for="comment">Comment</label>
          </div>
        </div>
        <div class="panel">
          <button class="btn" type="submit" style="margin-right: 1rem;">Update</button>
          <button class="btn red" type="button" @click="ShowWarning">Delete</button>
        </div>
        </form>

        </div>
        <h2 v-else>Contact not found</h2>
    </div>
    </div>
</template>

<script>
import Warning from '@/components/Warning'

export default {
    components: {
    Warning
  },
    computed: {
        contact() {
            return this.$store.getters.contactById(+this.$route.params.id)
        }
    },
    name: 'Information',
    data: () => ({
        person: '',
        phone: '',
        email: '',
        comment: ''
    }),
    mounted(){
        this.person = this.contact.person
        this.phone = this.contact.phone
        this.email = this.contact.email
        this.comment = this.contact.comment

        setTimeout(() => {
            M.updateTextFields()
        }, 0)
    },
    methods: {
        submitContact(){
            this.$store.dispatch('updateContact', {
                id: this.contact.id,
                person: this.person,
                phone: this.phone,
                email: this.email,
                comment: this.comment
            })
            this.$router.push('/')
        },
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
    },
    destroyed() {

    }
}
</script>

<style lang="scss" scoped>
    h1, h2, h3{
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