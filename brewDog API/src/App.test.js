import React from 'react';
import ReactDOM from 'react-dom';
import BeerApp from './BeerApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BeerApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
