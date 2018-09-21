import { moment } from 'moment';
import selecExpenses from '../../selectors/expenses';


const expenses = [{
        id: '1',
        description: 'Gum',
        note: '',
        amount: 195,
        createdAt: 0
    }, {
        id: '2',
        description: 'Rent',
        note: '',
        amount: 109500,
        createdAt: moment(0)
    }, {
        id: '3',
        description: 'Credit Card',
        note: '',
        amount: 4500,
        createdAt: moment(0)
    }];

test('should filter by Text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined ,
        endDate: undefined
    }
    const result = selecExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2] ])
})

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selecExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[2]] ); 
})