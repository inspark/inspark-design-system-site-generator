import {storiesOf} from '@storybook/angular';
import LinkComponent from './link.component';
import {boolean, number, text, withKnobs} from '@storybook/addon-knobs';

const stories = storiesOf('Inspark Link', module);

// "withKnobs" decorator should be applied before the stories using knobs
stories.addDecorator(withKnobs);

stories
  .add('Inspark Link', () => ({
    component: LinkComponent,
    props: {
      text: text('text', 'Hello Storybook'), // The first param of the knob function has to be exactly the same as the component input.
      disabled: boolean('disabled', false),
    },
  }))
  .add('default', () => ({
    component: LinkComponent,
    props: {
      text: text('text', 'Hello Storybook'),
      class: ''
    },
  }))
  .add('Link button', () => ({
    component: LinkComponent,
    props: {
      text: text('text', 'Hello Storybook'),
      class: 'c-btn c-btn_link'
    },
  }))
  .add('Link button disabled', () => ({
    component: LinkComponent,
    props: {
      text: text('text', 'Hello Storybook'),
      class: 'c-btn c-btn_link c-btn_link-disabled'
    },
  }));
