//create store 

import {createStore, combineReducers } from 'redux';
import expenceReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';


export default () => {
    const store = createStore(
        combineReducers({
            expense: expenceReducer,
            filters: filtersReducer            
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
        
    return store;
}




