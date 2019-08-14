import { addParameters, configure } from '@storybook/angular';
// import {addDecorator} from '@storybook/react';
// import {withThemesProvider} from 'storybook-addon-styled-component-theme';

// automatically import all files ending in *.stories.ts
const req = require.context('../src/', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);

// themes configuration for theme addon
const themes = [dark, light, contrast];
addDecorator(withThemesProvider(themes));
