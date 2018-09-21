import {setFilterText, sortByAmount, sortByDate, setStarDate, setEndDate} from '../../actions/filters';
import moment from 'moment';

test('should setup setFilterText action object', () => {
    const action = setFilterText('rent');
    expect(action).toEqual({
        type: 'SET_FILTER_TEXT',
        text: 'rent'
    })
})

test('should generate setFilterText action object with defauld values', () => {
    const action = setFilterText();
    expect(action).toEqual({
        type: 'SET_FILTER_TEXT',
        text: ''
    })
})

test('should setup sortByAmount action object', () => {
    const action = sortByAmount('amount');
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    })
})

test('should setup setStartDate action object', () => {
    const action = setStarDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should setup setEndDate action object', () => {
    const action = setEndDate(moment(0) );
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should setup sortByDate action object', () => {
    const action = sortByDate('date');
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    })
})