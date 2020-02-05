import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const initValue =fromJS(
    {
        focused: false,
        list:[],
        totalPage:1,
        page:1,
        mouseIn:false
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
    if(action.type ===actionTypes.CHANGE_LIST){
        return state.set('list', action.data).set('totalPage', action.totalPage)
    }
    if(action.type ===actionTypes.MOUSE_ENTER){
        return state.set('mouseIn', true)
    }
    if(action.type ===actionTypes.MOUSE_LEAVE){
        return state.set('mouseIn', false)
    }
    if(action.type ===actionTypes.PAGE_CHANGE){
        return state.set('page', action.data)
    }
    return state
}