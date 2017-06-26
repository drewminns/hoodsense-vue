<template lang="pug">
  .tag(
    :class="className"
  )
    span.tag__content
      slot
</template>

<script>
export default {
  name: 'hs-tag',
  props: {
    color: {
      type: String,
      default: ''
    },
    inverted: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      const invertedVal = this.inverted ? 'inverted' : '';
      return `${this.color} ${invertedVal}`.trim(); 
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/foundation/variables.scss';
@import '../styles/foundation/utils.scss';

.tag {
  display: inline-block;
  background: $background;
  color: $text;
  font-family: $fontface;
  font-size: $smallpx;
  padding: .4em 1em .6em;
  border-radius: 4em;
  border: 1px solid transparent;

  &.inverted {
    background: $whitebg;
    border: 1px solid $text;
  }
}

.blue, .red, .green, .black {
  color: $white;
}

.blue { 
  background: $blue;
  &.inverted {
    background: lighten($blue, 38%);
    border: 1px solid $blue;
    color: $blue;
  }
}

.red { 
  background: $red; 
  &.inverted {
    background: lighten($red, 38%);
    border: 1px solid $red;
    color: $red;
  }
}

.green { 
  background: $green; 
  &.inverted {
    background: lighten($green, 45%);
    border: 1px solid $green;
    color: $green;
  }
}

.black { 
  background: $black; 
  &.inverted {
    background: lighten($black, 80%);
    border: 1px solid $black;
    color: $black;
  }
}

.yellow { 
  background: $yellow; 
  &.inverted {
    background: lighten($yellow, 45%);
    border: 1px solid $yellow;
    color: $yellow;
  }
}

</style>


