import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {note:'note bill'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'123abc',
        updates: {
            note: 'note bill'
        }
    })
});

test('should setup edit expense action object with provides values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was latest months rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }   
    })
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
           id: expect.any(String),
           description: '',
           amount: 0,
           note: '',
           createdAt: 0
        }
    })
})