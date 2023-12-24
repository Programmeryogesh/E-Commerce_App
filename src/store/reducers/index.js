import ProductReducer from "./productReducer";
import { combineReducers } from 'redux'
import userReducer from "./userReducer";


const rootReducer = combineReducers({
    cart:ProductReducer,
    user: userReducer,
});
export default rootReducer;