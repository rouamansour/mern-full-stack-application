import { combineReducers } from "redux";
import montresReducers from "./montresReducer";

import clientsReducers from "./clientsReducer";
import categoriesReducers from "./categoriesReducer";

const rootReducer = combineReducers({
    allmontres: montresReducers,
    allcategories: categoriesReducers,
    allclients: clientsReducers,
});
export default rootReducer