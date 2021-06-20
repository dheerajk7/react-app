import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App/App';
import { configureStore } from './store';
import { Provider } from 'react-redux';

// creating store to maintain items
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>,
  document.getElementById('root')
);
