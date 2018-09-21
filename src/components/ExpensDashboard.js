import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpensDashboard = () => {
    return (
        <div>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    )
}

export default ExpensDashboard;