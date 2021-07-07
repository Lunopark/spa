<template>
    <div class="warning_wrapper">
    <div class="warning">
        <div class="warning_header">WARNING</div>
        <div class="warning_content">
        <slot>

        </slot>
        </div>
        <div class="warning_footer">
        <button class="btn red btn-small" type="button" @click="deleteContact(idx)">Yes, delete</button>
        <button class="btn btn-small" type="button" @click="closeWarning">No, cancel</button>
        </div>
    </div>
    </div>
</template>

<script>

export default {
name: 'Warning',
computed: {
        contact() {
            return this.$store.getters.contactById(+this.$route.params.id)
        }
    },
components: {

    },
methods: {
    deleteContact() {
      this.$emit('deleteContact')
      
    },
    closeWarning(){
         this.$emit('closeWarning')
    }
  }
}

</script>

<style lang="scss" scoped>
    .warning_wrapper{
        background: rgba(64,64,64, .4);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
    }
    .warning{
        padding: 16px;
        position: fixed;
        top: 30px;
        left: 480px;
        width: 400px;
        background: #ffffff;
        box-shadow: 0 0 17px 0 #e7e7e7;
    }
    .warning_header{
        text-align: center;
        margin-bottom: 5px;
    }
    .warning_content{
        margin-top: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5px;
    }
    .warning_footer{
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
