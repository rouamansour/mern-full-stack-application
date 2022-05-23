import { combineReducers } from "redux";
import montresReducers from "./montresReducer";
const rootReducer = combineReducers({
    allmontres: montresReducers,
});
export default rootReducer