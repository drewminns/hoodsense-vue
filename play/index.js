
import { play } from 'vue-play';

import HsCard from '../src/Components/Card.vue';
import HsTag from '../src/Components/Tag.vue';
import HsButton from '../src/Components/Button.vue';

play(HsCard)
  .add('default', `<hs-card>Hello</hs-card>`)

play(HsTag)
  .add('Default', `<hs-tag>Content goes here</hs-tag>`)
  .add('Blue', `<hs-tag color='blue'>Content goes here</hs-tag>`)
  .add('Blue Inverted', `<hs-tag color='blue' inverted='true'>Content goes here</hs-tag>`)
  .add('Red', `<hs-tag color='red'>Content goes here</hs-tag>`)
  .add('Red Inverted', `<hs-tag color='red' inverted='true'>Content goes here</hs-tag>`)
  .add('Green', `<hs-tag color='green'>Content goes here</hs-tag>>`)
  .add('Green Inverted', `<hs-tag color='green' inverted='true'>Content goes here</hs-tag>`)
  .add('Black', `<hs-tag color='black'>Content goes here</hs-tag>`)
  .add('Black Inverted', `<hs-tag color='black' inverted='true'>Content goes here</hs-tag>`)
  .add('Yellow', `<hs-tag color='yellow'>Content goes here</hs-tag>`)
  .add('Yellow Inverted', `<hs-tag color='yellow' inverted='true'>Content goes here</hs-tag>`);

play(HsButton)
  .add('Default', `<hs-button>Click Me</hs-button>`)
  .add('Submit', `<hs-button type='submit'>Click Me</hs-button>`)
  .add('Disabled', `<hs-button :disabled='true'>Click Me</hs-button>`)
  .add('Full Width', `
  <div>
    <hs-button full='true' theme='blue'>Click Me</hs-button>
    <hs-button full='true' theme='red'>Click Me</hs-button>
    <hs-button full='true' theme='black'>Click Me</hs-button>
    <hs-button full='true' theme='green'>Click Me</hs-button>
    <hs-button full='true' theme='yellow'>Click Me</hs-button>
  </div>
  `)
  .add(
    'Theme', `
  <div>
    <hs-button theme='blue'>Click Me</hs-button>
    <hs-button theme='red'>Click Me</hs-button>
    <hs-button theme='black'>Click Me</hs-button>
    <hs-button theme='green'>Click Me</hs-button>
    <hs-button theme='yellow'>Click Me</hs-button>
  </div>
  `)
  .add(
    'Loading', `
  <div>
    <hs-button theme='blue' loading='true'>Click Me</hs-button>
    <hs-button theme='red' loading='true'>Click Me</hs-button>
    <hs-button theme='black' loading='true'>Click Me</hs-button>
    <hs-button theme='green' loading='true'>Click Me</hs-button>
    <hs-button theme='yellow' loading='true'>Click Me</hs-button>
  </div>
  `)
