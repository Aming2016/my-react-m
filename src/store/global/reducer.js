import * as actionTypes from './actionTypes';
const defaultState = {
    list:[12,3,4,5]
}
export default (state=defaultState,action)=>{
    switch (action.type) {
        case actionTypes.GET_ALLDATA:
            return state.set('focused','改变redux')
        default:
            return state;
    }
}