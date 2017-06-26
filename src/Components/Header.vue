<template lang="pug">
  header
    .container
      .row
        .col-md-4
          h1.nav__logo STARTER
        .col-md-8
          ul.nav__list
            li
              <router-link to='/'>Home</router-link>
            li
              <router-link to='/typography'>Typography</router-link>
            li
              <router-link to='/Components'>Components</router-link>
</template>

<script>
  export default {

  }
</script>

<style scoped lang='scss'>

.nav__list {
  @include cf;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    float: left;
    margin-right: 2rem;
  }
}

</style>
