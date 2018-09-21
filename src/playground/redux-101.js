import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1}= {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = (payload= {}) => ({
    type: 'DECREMENT',
    decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
})
const resetCount = () => ({
    type: 'RESET'
})


const store = createStore( (state = {count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT':
        return{
            count: state.count + action.incrementBy
        }
        case 'DECREMENT':
        return{
            count: state.count - action.decrementBy
        }
        case 'SET':
        return{
            count: action.count
        }
        case 'RESET':
        return{
            count: 0
        }
        default:
        return state;
    }
});

store.subscribe( () => {
console.log(store.getState())
});


store.dispatch(incrementCount({incrementBy: 8}));
store.dispatch(incrementCount());
store.dispatch(decrementCount({decrementBy: 2}));
store.dispatch(resetCount() );

