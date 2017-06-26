<template lang="pug">
  button.btn(
    :type='type'
    :disabled='disabled'
    :class='className'
  )
    slot
</template>

<script>
export default {
  name: 'hs-button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    full: String,
    loading: String,
    disabled: Boolean,
    theme: {
      type: String,
      default: '',
    },
    size: String,
  },
  computed: {
    className() {
      const loadingVal = this.loading === 'true' ? 'btn--loading' : '';
      const fullVal = this.full === 'true' ? 'btn--full' : '';
      const themeVal = this.theme !== '' ? `btn--${this.theme}` : '';
      return `${themeVal} ${loadingVal} ${fullVal}`.trim();
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/foundation/variables.scss';
@import '../styles/foundation/utils.scss';

.btn {
  display: inline-flex;
  appearance: none;
  font-family: $fontface;
  font-size: $basepx;
  border: 1px solid $border;
  padding: .8em 2em 1em;
  background: $white;
  border-radius: .2em;
  cursor: pointer;
  line-height: 1;
  transition: all .3s;
  white-space: nowrap;
  outline: nowrap;
  box-sizing: border-box;
  margin-bottom: .3em;

  &:disabled {
    cursor: not-allowed;
  }

  &--full {
    display: flex;
    width: 100%;
    justify-content: center;
  }
}

.btn--blue {
  background: $blue;
  border: 1px solid $blue;
  color: $white;

  &:hover {
    background: lighten($blue, 10%);
  }

  &:disabled {
    background: desaturate($blue, 70%);
    border: 1px solid desaturate($blue, 70%);
  }
}

.btn--red {
  background: $red;
  border: 1px solid $red;
  color: $white;

  &:hover {
    background: lighten($red, 10%);
  }

  &:disabled {
    background: desaturate($red, 70%);
    border: 1px solid desaturate($red, 70%);
  }
}

.btn--green {
  background: $green;
  border: 1px solid $green;
  color: $white;

  &:hover {
    background: lighten($green, 10%);
  }

  &:disabled {
    background: desaturate($green, 60%);
    border: 1px solid desaturate($green, 60%);
  }
}

.btn--yellow {
  background: $yellow;
  border: 1px solid $yellow;
  color: $white;

  &:hover {
    background: lighten($yellow, 10%);
  }

  &:disabled {
    background: desaturate($yellow, 70%);
    border: 1px solid desaturate($yellow, 70%);
  }
}

.btn--black {
  background: $black;
  border: 1px solid $black;
  color: $white;

  &:hover {
    background: lighten($black, 10%);
  }

  &:disabled {
    background: desaturate($black, 70%);
    border: 1px solid desaturate($black, 70%);
  }
}

</style>


