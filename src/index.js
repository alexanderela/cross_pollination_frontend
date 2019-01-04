import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
// && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
