import { GET_CATEGORIES } from '../types';
const initialState = {
    categories: []
};
const categoriesReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,

            };
        default: return state
    }
}
export default categoriesReducers