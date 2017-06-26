<template lang="pug">
  div#main
    appHeader
    .container
      <router-view></router-view>
</template>

<script>

import appHeader from '../Components/Header.vue';

export default {
  components: {
    appHeader
  }
}
</script>



<style lang="scss" scoped>


</style>
