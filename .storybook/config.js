import {
  configure,
  addDecorator,
  addParameters,
  storiesOf
} from "@storybook/angular";
import { withRootAttribute } from "storybook-addon-root-attribute";
import "node_modules/@inspark/components-web/index.css";

// global
addDecorator(withRootAttribute);
addParameters({
  rootAttribute: {
    root: "body",
    attribute: "class",
    defaultState: {
      name: "Dark",
      value: "theme-dark"
    },
    states: [
      {
        name: "Light",
        value: "theme-light"
      }
    ]
  }
});

// automatically import all files ending in *.stories.ts
configure(require.context('../src', true, /\.stories\.[tj]s$/), module);

