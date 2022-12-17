import {createStore} from 'redux';

const reducerFn = (state={favFacts:[]},action) => {

    switch(action.type)
    {
        case 'addFact':
            if(action.fact!==undefined)
                return {favFacts:[...state.favFacts,action.fact]};
            else return state;

        case 'remFact':
            if(action.index!==undefined)
            {
                return {favFacts:[...state.favFacts.slice(0,action.index), ...state.favFacts.slice(action.index+1)]}
            }
            else return state;

        default:
            return state;
    }
}
const store = createStore(reducerFn)

export default store;