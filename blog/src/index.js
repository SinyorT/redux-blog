import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';



const store = createStore(reducers,applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);