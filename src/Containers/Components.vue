<template lang="pug">
  div
    .row
      .col-md-12
        h1 Components
      .col-md-12
        .block
          h2 Cards
    .row
      .col-md-6
        Card(
          title="text.title"
        )
      .col-md-6
        Card(
          title="text.title"
        )
</template>

<script>
import Card from '../Components/Card.vue';

export default {
  components: {
    Card
  },
  data() {
    return {
      text: {
        title: 'This is the card Title'
      }
    }
  }
}
</script>

