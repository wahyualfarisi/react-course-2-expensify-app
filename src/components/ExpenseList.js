import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';


const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.map( (expense, index) => {
                return <ExpenseListItem key={index} {...expense} />
            })
        }
    </div>
);

const mapStateToProps = (state) => {
    return{
        expenses: getVisibleExpenses(state.expense, state.filters)
    }
}


export default connect(mapStateToProps)(ExpenseList) ;