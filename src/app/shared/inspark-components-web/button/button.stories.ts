import {storiesOf} from '@storybook/angular';
import ButtonComponent from './button.component';
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  radios,
  color,
  date,
  button,
} from '@storybook/addon-knobs';

import { action } from '@storybook/addon-actions';
const stories = storiesOf('Inspark Button', module);

// "withKnobs" decorator should be applied before the stories using knobs
stories.addDecorator(withKnobs);

stories
  .add('with a button', () => ({
    component: ButtonComponent,
    props: {
      text: text('text', 'Hello Storybook'), // The first param of the knob function has to be exactly the same as the component input.
      disabled: boolean('disabled', false),
    },
  }))
  .add('default', () => ({
    component: ButtonComponent,
    props: {
      text: text('text', 'Hello Storybook'),
      class: '',
      disabled: boolean('disabled', false),
    },
  }))
  .add('primary', () => ({
      component: ButtonComponent,
      props: {
        text: text('text', 'Hello Storybook'),
        class: 'c-btn_primary',
        disabled: boolean('disabled', false),
      },
    }),
    {notes: 'Button for primary action'})
  .add('secondary', () => ({
    component: ButtonComponent,
    props: {
      text: text('text', 'Hello Storybook'),
      class: 'c-btn_secondary',
      disabled: boolean('disabled', false),
    },
  }))
  .add('bare', () => ({
    component: ButtonComponent,
    props: {
      text: text('text', 'Button bare'),
      class: 'c-btn_bare',
      disabled: boolean('disabled', false),
    },
  }))
  .add('tertiary', () => ({
    component: ButtonComponent,
    props: {
      text: text('text', 'Button tertiary'),
      class: 'c-btn_tertiary',
      disabled: boolean('disabled', false),
    },
  }));
