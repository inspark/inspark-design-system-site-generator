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

const label = 'Your Name';
const defaultValue = 'Arunoda Susiripala';
const groupId = 'GROUP-ID1';
const groupId2 = 'GROUP-ID2';

export default {
  title: 'INSPARK|Button/Default',
  decorators: [withKnobs],
  parameters: {
    knobs: {
      disableDebounce: true,
    },
  },
};

export const buttonDefault = () => ({
  component: ButtonComponent,
  props: {
    text: text('text', 'I`m default'),
    class: '',
    disabled: boolean('disabled', false),
  },
});

export const buttonDefaultSmall = () => ({
  component: ButtonComponent,
  props: {
    text: text('text', 'I`m default'),
    class: 'c-btn_small',
    disabled: boolean('disabled', false),
  },
});

export const buttonPrimary = () => ({
  component: ButtonComponent,
  props: {
    text: text('text', 'I`m primary'),
    class: 'c-btn_primary',
    disabled: boolean('disabled', false),
  },
});

export const buttonSecondary = () => ({
  component: ButtonComponent,
  props: {
    text: text('text', 'Button'),
    class: 'c-btn_secondary',
    disabled: boolean('disabled', false),
  },
});

export const buttonBare = () => ({
  component: ButtonComponent,
  props: {
    text: text('text', 'Button'),
    class: 'c-btn_bare',
    disabled: boolean('disabled', false),
  },
});

export const buttonTertiary = () => ({
  component: ButtonComponent,
  props: {
    text: text('text', 'Button'),
    class: 'c-btn_tertiary',
    disabled: boolean('disabled', false),
  },
});


