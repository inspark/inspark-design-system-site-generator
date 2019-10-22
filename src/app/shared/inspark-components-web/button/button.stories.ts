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

export default {
  title: 'INSPARK|Button',
  decorators: [withKnobs],
  parameters: {
    knobs: {
      disableDebounce: true,
    },
  },
};

export const simple = () => {
  const name = text('name', 'John Doe');
  const age = number('age', 0);
  const phoneNumber = text('phoneNumber', '555-55-55');
  const text1 = text('text', 'Hello Storybook');
  const disabled = boolean('disabled', false);

  return {
    moduleMetadata: {
      entryComponents: [ButtonComponent],
      declarations: [ButtonComponent],
    },
    template: `
        <app-inspark-button-component text1="Sdfa"></app-inspark-button-component>
      `,
    props: {
      name,
      age,
      phoneNumber,
    },
  };
};

simple.story = {
  name: 'Simple',
};

export const allKnobs = () => {
  const name = text('name', 'Jane');
  const stock = number('stock', 20, {
    range: true,
    min: 0,
    max: 30,
    step: 5,
  });
  const fruits = {
    Apple: 'apples',
    Banana: 'bananas',
    Cherry: 'cherries',
  };
  const fruit = select('fruit', fruits, 'apples');
  const otherFruits = {
    Kiwi: 'kiwi',
    Guava: 'guava',
    Watermelon: 'watermelon',
  };
  const otherFruit = radios('Other Fruit', otherFruits, 'watermelon');
  const price = number('price', 2.25);

  const border = color('border', 'deeppink');
  const today = date('today', new Date('Jan 20 2017'));
  const items = array('items', ['Laptop', 'Book', 'Whiskey']);
  const nice = boolean('nice', true);
  button('Arbitrary action', action('You clicked it!'));

  return {
    component: ButtonComponent,
    props: {
      name,
      stock,
      fruit,
      otherFruit,
      price,
      border,
      today,
      items,
      nice,
    },
  };
};

allKnobs.story = {
  name: 'All knobs',
};


//
// const stories = storiesOf('Inspark Button', module);
//
// // "withKnobs" decorator should be applied before the stories using knobs
// stories.addDecorator(withKnobs);
//
// stories
//   .add('with a button', () => ({
//     component: ButtonComponent,
//     props: {
//       text: text('text', 'Hello Storybook'), // The first param of the knob function has to be exactly the same as the component input.
//       disabled: boolean('disabled', false),
//     },
//   }))
//   .add('default', () => ({
//     component: ButtonComponent,
//     props: {
//       text: text('text', 'Hello Storybook'),
//       class: '',
//       disabled: boolean('disabled', false),
//     },
//   }))
//   .add('primary', () => ({
//       component: ButtonComponent,
//       props: {
//         text: text('text', 'Hello Storybook'),
//         class: 'c-btn_primary',
//         disabled: boolean('disabled', false),
//       },
//     }),
//     {notes: 'Button for primary action'})
//   .add('secondary', () => ({
//     component: ButtonComponent,
//     props: {
//       text: text('text', 'Hello Storybook'),
//       class: 'c-btn_secondary',
//       disabled: boolean('disabled', false),
//     },
//   }))
//   .add('bare', () => ({
//     component: ButtonComponent,
//     props: {
//       text: text('text', 'Button bare'),
//       class: 'c-btn_bare',
//       disabled: boolean('disabled', false),
//     },
//   }))
//   .add('tertiary', () => ({
//     component: ButtonComponent,
//     props: {
//       text: text('text', 'Button tertiary'),
//       class: 'c-btn_tertiary',
//       disabled: boolean('disabled', false),
//     },
//   }));
