import { GET_CLIENTS } from '../types';
const initialState = {
    clients: []
};
const clientsReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_CLIENTS:
            return {
                ...state,
                clients: action.payload,

            };
        default: return state
    }
}
export default clientsReducers