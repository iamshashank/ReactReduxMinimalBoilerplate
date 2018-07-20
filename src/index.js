import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import App from './components/app';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <div>
	  <App />
	  <div>
	  	GTA
	  </div>
  </div>
  </Provider>
  ,
  document.getElementById('app')
);

