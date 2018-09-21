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
store.dispatch(sortByDate());
store.dispatch(addExpense({description: 'water bill', amount: 4500}))
store.dispatch(addExpense({description: 'gas bill', createdAt: 300}))
store.dispatch(addExpense({description: 'Rent Bill', amount: 109500}))



const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpense);

const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider>
    
)

ReactDOM.render(jsx, document.getElementById('app') );

