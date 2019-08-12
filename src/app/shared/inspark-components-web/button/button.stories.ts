import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '@storybook/angular/demo';

storiesOf('Inspark Button', module).add('button with link to another story 123', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story 123',
    onClick: linkTo('Inspark'),
  },
}));
