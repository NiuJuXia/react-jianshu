import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const initValue =fromJS(
    {
        focused: false
    }
)

export default (state = initValue, action) => {
    if(action.type === 'input_change'){
        return {...state, "inputValue": action.value}
    }
    if(action.type === 'button_change'){
        return {...state, "list": action.value}
    }
    if(action.type === actionTypes.SEARCH_FOCUS){
       return state.set('focused', true)
    }
    if(action.type ===actionTypes.SEARCH_BLUR){
        return state.set('focused', false)
    }
    return state
}