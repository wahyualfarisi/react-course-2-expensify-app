import moment from 'moment';

const getVisibleExpenses = (expenses, {text,sortBy, startDate, endDate} ) => {
    return expenses.filter( (expense) => {
        const createdAtMoment = moment(expense.createAt);
        const startDateMacth  = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
        const endDateMatch    = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMacth       = expense.description.toLowerCase().includes(text.toLowerCase());


        return startDateMacth && endDateMatch && textMacth;
    }).sort( (a,b) => {
        if(sortBy === 'date'){
            return a.createAt < b.createAt ? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

export default getVisibleExpenses;