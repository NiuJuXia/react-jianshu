import * as actionTypes from './constants'
import axios from 'axios'
import { fromJS } from 'immutable';

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data:fromJS(data),
    totalPage: Math.ceil(data.length / 4)
})

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/headerList.json').then((res) => {
            const data = res.data
            const action = changeList(data.data);
            dispatch(action)
        }).catch(() => {
            console.log('error')
        })
    }
}

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
})

export const pageChange = (page) => ({
    type: actionTypes.PAGE_CHANGE,
    data:page
})



