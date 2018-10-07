import React from 'react';
import Header from '../Header';
import { storiesOf, action } from '@storybook/react';

storiesOf('Header', module)
  .add('default view', () => {
    return (
      <div className="todoapp">
        <Header addTodo={action('Add Todo')}/>
      </div>
    );
  });
