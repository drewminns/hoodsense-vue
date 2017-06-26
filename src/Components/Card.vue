<template lang="pug">
  .card
    .card__header
      h2.card__title {{ title }}
    .card__body
      p(v-if='body') {{ body }}
      slot
</template>

<script>
export default {
  name: 'hs-card',
  props: {
    title: String,
    meta: String,
    body: String,
  }
}
</script>

<style lang="scss" scoped>

@import '../styles/foundation/variables.scss';
.card {
  font-family: $fontface;
  background: $white;
  border: 1px solid #F1F1F1;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.05);

  figure {
    margin: 0;
  }

  img {
    width: 100%;
    display: block;
  }

  &__media--padding {
    padding: 1.8rem 2.3rem 0;
  }

  &__body, &__header {
    padding: 1.8rem 2.3rem;
  }
}
</style>


