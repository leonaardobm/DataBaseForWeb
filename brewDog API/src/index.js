import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BeerApp from './BeerApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BeerApp />, document.getElementById('root'));
registerServiceWorker();
