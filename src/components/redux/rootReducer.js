import { combineReducers } from "redux";
import MylistReducer from './mylist/mylist-reducer'
const rootReducer=combineReducers({
    
      mylist:  MylistReducer
    
 });
export default rootReducer