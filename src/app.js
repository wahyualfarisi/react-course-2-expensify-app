import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'; 

import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
console.log('test');
const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider>
    
)

ReactDOM.render(jsx, document.getElementById('app') );

