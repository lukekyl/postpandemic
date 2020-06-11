import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import managePost from './reducers/managePost'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(managePost)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

