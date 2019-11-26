import * as actionTypes from './actionTypes'
export const BTN_CLICK = () =>({
    type:actionTypes.GET_TOKEN
})
const GET_MYDATA = (data) =>({
    type:actionTypes.GET_MYDATA,
    data
})
//获取个人信息
export const getmydata = (data) => {
    return (dispatch,getState) => {
        let obj ={user:'赵谭明',xinbie:'男'}
        dispatch(GET_MYDATA(obj))
        // console.log(dispatch)
    }
}