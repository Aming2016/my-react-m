import * as actionTypes from './actionTypes'
const defaultState = {
    token:'2131321',
    mydata:{name:'zhaotanming',tag:'17'}
}
// function newdata(value,content){
//     let data = JSON.parse(JSON.stringify(defaultState))
//     data[value] = content;
//     return data
// }
export default (state=defaultState,action)=>{
    switch (action.type) {
        case actionTypes.GET_TOKEN:
            return state.set('focused','改变redux');
        case actionTypes.GET_MYDATA:
            state.mydata = action.data
            //  newdata('mydata',action.data)
            return state
        default:
            return state;
    }
}