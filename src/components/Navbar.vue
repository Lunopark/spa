<template>
    <nav class="teal darken-1">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo"><i class="large material-icons">phone</i></router-link>
      <ul class="right hide-on-med-and-down">
        <router-link tag="li" to="/" exact><a href="#">Contact list</a></router-link>
        <router-link tag="li" to="/add" exact><a href="#">Add contact</a></router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
    nav{
        padding: 0 2rem;
    }
</style>