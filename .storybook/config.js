import { configure } from '@storybook/react';
import 'todomvc-app-css/index.css'
import './bug.css'

function loadStories() {
  require('../components/stories');
}

configure(loadStories, module);