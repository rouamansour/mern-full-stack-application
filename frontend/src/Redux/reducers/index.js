import { combineReducers } from "redux";
import montresReducers from "./montresReducer";

import clientsReducers from "./clientsReducers";
import categoriesReducers from "./categoriesReducer";

const rootReducer = combineReducers({
    allmontres: montresReducers,
    allcategories: categoriesReducer,
    allclients: clientsReducers,
});
export default rootReducer