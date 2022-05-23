import { GET_MONTRES, DELETE_MONTRE, ADD_MONTRE, GET_SINGLE_MONTRE, UPDATE_MONTRE } from '../types';
const initialState = {
    montres: [],
    montre: {}

};
const montresReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_MONTRES:
            return {
                ...state,
                montres: action.payload,

            };
        case ADD_MONTRE:
            return {
                ...state,
                montres: [...state.montres, action.payload],
                montre: action.payload
            };
        case DELETE_MONTRE:
            return {
                ...state,
                montres: state.montres.filter(montre => montre._id !==
                    action.payload)
            };
        case UPDATE_MONTRE:
            return {
                ...state,
                montres: state.montres.map(montre => montre._id ===
                    action.payload._id ? (montre = action.payload) : montre)
            };
        case GET_SINGLE_MONTRE:
            return {
                ...state,
                montre: action.payload
            };
        default: return state
    }
}
export default montresReducers ;
