import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'; 

import { addExpense } from './actions/expenses';
import { sortByDate } from './actions/filters';
import getVisibleExpenses from './reducers/expenses';

import 'normalize.css/normalize.css';
import './styles/style.scss';


const store = configureStore();

const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider>
    
)

ReactDOM.render(jsx, document.getElementById('app') );

