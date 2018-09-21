//setFilterText 
export const setFilterText = (text = '') => ({
    type: 'SET_FILTER_TEXT',
    text
})

//sortBy 
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

export const setStarDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
