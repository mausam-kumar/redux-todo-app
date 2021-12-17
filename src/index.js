import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {reducer} from './redux/reducer.js'
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
