import { storiesOf } from '@storybook/angular';
import { linkTo } from '@storybook/addon-links';
import ButtonComponent from './button.component';

storiesOf('Inspark Button', module)
  .add('default', () => ({
    component: ButtonComponent,
    props: {
      text: 'Go to Welcome Story 123',
      class: '',
      onClick: linkTo('Welcome'),
    },
  }))
  .add('primary', () => ({
      component: ButtonComponent,
      props: {
        text: 'Go to Welcome Story 123',
        class: 'c-btn_primary',
        onClick: linkTo('Welcome'),
      },
    }),
    {notes: 'Button for primary action'})
  .add('secondary', () => ({
    component: ButtonComponent,
    props: {
      text: 'Go to Welcome Story 123',
      class: 'c-btn_secondary',
      onClick: linkTo('Welcome'),
    },
  }));
