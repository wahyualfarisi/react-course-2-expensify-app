import {createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import { start } from 'repl';

//------------------------------------------------------------

//add expense 
const addExpense = ({description = '', note = '', amount = 0 , createAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
});
//remove expense 
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
//editing expense 
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id, 
    updates
})

//setFilterText 
const setFilterText = (filter = '') => ({
    type: 'SET_FILTER_TEXT',
    filter
})

//sortBy 
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStarDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})





//------------------------------------------------------------



//-----------------REDUCERS-----------------------------------
const expenseDefault = [];

const expenceReducer = ( state = expenseDefault, action ) => {
    switch(action.type){

        case 'ADD_EXPENSE':
        return [...state, action.expense];

        case 'REMOVE_EXPENSE':
        return state.filter( ({id}) => id !== action.id );
        
        case 'EDIT_EXPENSE':
        return state.map( (expense) => {
           if(expense.id === action.id){
               return{
                   ...state, 
                   ...action.updates
               }
           }else{
               return expense
           }
        })

        default:
        return state;
    }
}
//-------------------------------------------------------------
const filtersDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state=filtersDefault, action) => {
    switch (action.type){
        case 'SET_FILTER_TEXT':
        return {
            ...state,
            text: action.filter
        }

        case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy: 'amout'
        }

        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy: 'date'
        }

        case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.startDate
        }

        case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.endDate
        }


        default:
        return state;
    }
}
//--------------------------------------------------------------

//get visible expenses 
const getVisibleExpenses = (expenses, {text,sortBy, startDate, endDate} ) => {
    // return expenses.filter( (expense) => {
    //     const startDateMacth = typeof startDate !== 'number' || expense.createAt >= startDate;
    //     const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
    //     const textMacth = true ;


    //     return startDateMacth && endDateMatch && textMacth;
    // })
}



//create store 
const store = createStore(
    combineReducers({
        expense: expenceReducer,
        filters: filtersReducer
    })
);














store.subscribe( () => { 
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expense, state.filters);

    console.log(visibleExpenses);
})
const expenseOne =  store.dispatch(addExpense({description:'Rent', amount:100, createAt: 1000 }));
const expenseTwo =  store.dispatch(addExpense({description:'Coffe', amount:200, createAt: -1000 }))

// //removing 
// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// //edit expense
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500} ))

// //setTextfilter
store.dispatch(setFilterText('rent'));
// store.dispatch(setFilterText());

// //sortBy 
// store.dispatch(sortByAmount() ); //amount 
// store.dispatch(sortByDate() ); //date  

// store.dispatch(setStarDa 


//------------------MY STORE---------------------------------
const demoState = {
    expense: [{
        id: 'kdkjddjkdj',
        description: 'January Rent',
        note: 'this was the final payment for that addess',
        amount: 54500,
        createAt:0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};
//-----------------------------------------------------------
