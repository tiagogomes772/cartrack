import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combinedStore } from './reducers/';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
    combinedStore,
    composeWithDevTools(applyMiddleware(thunk))
  );
  
  

ReactDOM.render(
    <Router>
    <Provider store={store}>
        <App />
    </Provider>
    </Router>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
