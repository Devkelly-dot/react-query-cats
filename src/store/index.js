import {createStore} from 'redux';

const reducerFn = (state={favFacts:[]},action) => {

    switch(action.type)
    {
        case 'addFact':
            if(action.fact)
                return {favFacts:[...state.favFacts,action.fact]};
            else return state;
        default:
            return state;
    }
}
const store = createStore(reducerFn)

export default store;