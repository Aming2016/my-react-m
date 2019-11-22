
import { combineReducers } from 'redux';
import  {reducer as userreducer} from './user';
import  {reducer as globalreducer} from './global';
const reducer = combineReducers({
    user:userreducer,
    global:globalreducer
})
export default reducer;