import * as actionTypes from './actionTypes'
const defaultState = {
    token:'2131321',
    mydata:{name:'zhaotanming',tag:'17'}
}
export default (state=defaultState,action)=>{
    switch (action.type) {
        case actionTypes.GET_TOKEN:
            return state.set('focused','改变redux')
        default:
            return state;
    }
}