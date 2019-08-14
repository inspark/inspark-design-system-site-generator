import {storiesOf} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import ButtonComponent from './button.components';

storiesOf('Inspark Button', module)
  .add('default', () => ({
    component: ButtonComponent,
    props: {
      text: 'Go to Welcome Story 123',
      class: '',
      onClick: linkTo('Inspark'),
    },
  }))
  .add('primary', () => ({
      component: ButtonComponent,
      props: {
        text: 'Go to Welcome Story 123',
        class: 'c-btn_primary',
        onClick: linkTo('Inspark'),
      },
    }),
    {notes: 'Button for primary action'})
  .add('secondary', () => ({
    component: ButtonComponent,
    props: {
      text: 'Go to Welcome Story 123',
      class: 'c-btn_secondary',
      onClick: linkTo('Inspark'),
    },
  }));
