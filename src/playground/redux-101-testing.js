import {createStore} from 'redux';


const incrementBy = ({incrementBy = 1}={}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementBy = ({decrementBy }={}) => ({
    type: 'DECREMENT',
    decrementBy
});

const reset = () => ({
    type: 'RESET'
});

const set = ({set=101} = {}) => ( {
    type: 'SET',
    set
})


const store = createStore( (state= {count: 0}, action) =>  {
    switch(action.type){
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        }
        case 'DECREMENT':
        return{
            count: state.count - action.decrementBy
        }
        case 'SET':
        return{
            count: action.set
        }
        case 'RESET':
        return{
            count: 0
        }
    }

    return state;
});


store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(incrementBy());
store.dispatch(incrementBy({incrementBy:10}));
store.dispatch(incrementBy());
store.dispatch(decrementBy({decrementBy:2}))
store.dispatch(reset(reset()))
store.dispatch(set())