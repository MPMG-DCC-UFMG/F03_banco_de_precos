import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { configureActions } from '@storybook/addon-actions';
addDecorator(withInfo);
configureActions({
  depth: 100,
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.jsx?$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
