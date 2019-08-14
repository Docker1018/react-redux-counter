import { combineReducers } from 'redux';
import { PLUS, MINUS } from '../actions/action';

const initVal = {
    val: 0
}//預設值

function counter(state = initVal, action) {
    switch(action.type){
        case PLUS:
            return {...state, val: state.val + action.val};
        case MINUS:
            return {...state, val: state.val - action.val};
        default:
            return state;
    };    
}

const counterApp = combineReducers({
    counter
});

export default counterApp;