import { storiesOf } from '@storybook/angular';
import { linkTo } from '@storybook/addon-links';
import ButtonComponent from './button.component';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Storybook Knobs', module);

// "withKnobs" decorator should be applied before the stories using knobs
stories.addDecorator(withKnobs);

// Knobs for Angular props
// Knobs for Angular props
stories.add('with a button', () => ({
  component: ButtonComponent,
  props: {
    text: text('text', 'Hello Storybook'), // The first param of the knob function has to be exactly the same as the component input.
    disabled: boolean('disabled', false),
  },
}));

storiesOf('Inspark Button', module)
  .add('default', () => ({
    component: ButtonComponent,
    props: {
      text: text('text', 'Hello Storybook'),
      class: ''
    },
  }))
  .add('primary', () => ({
      component: ButtonComponent,
      props: {
        text: text('text', 'Hello Storybook'),
        class: 'c-btn_primary'
      },
    }),
    {notes: 'Button for primary action'})
  .add('secondary', () => ({
    component: ButtonComponent,
    props: {
      text: text('text', 'Hello Storybook'),
      class: 'c-btn_secondary'
    },
  }));
