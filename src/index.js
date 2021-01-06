import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router } from 'react-router-dom';
import History from './history';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';
import App from './App';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(reduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)


ReactDOM.render(
    <Provider store={store}>
      <Router history={History}>
        <App />
      </Router>
    </Provider> ,
  document.getElementById('root')
);

