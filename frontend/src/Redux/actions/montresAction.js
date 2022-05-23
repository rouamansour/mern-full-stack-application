import { GET_MONTRES, DELETE_MONTRE, ADD_MONTRE, GET_SINGLE_MONTRE, UPDATE_MONTRE } from "../types";
import { MontreService } from "../../services/Montre-Service";
export const loadMontres = () => {
    return (dispatch) => {
        MontreService.fetchMontres()
            .then(res => {
                dispatch({
                    type: GET_MONTRES,
                    payload: res.data
                })

            }).catch((error) => console.log(error));

    }
}
export const loadSinglemontre = (_id) => {
    return (dispatch) => {
        MontreService.fetchMontreById(_id)
            .then((res) => {
                dispatch({
                    type: GET_SINGLE_MONTRE,
                    payload: res.data
                });
            }).catch((error) => console.log(error));

    }
}
export const addmontre = (montre) => {
    return (dispatch) => {
        MontreService.addMontre(montre)
            .then((res) => {
                dispatch({
                    type: ADD_MONTRE,
                    payload: res.data
                })

            }).catch((error) => console.log(error));

    }
}
export const deletemontre = (_id) => {
    return dispatch => {
        MontreService.deleteMontre(_id)
            .then((res) => {
                dispatch({
                    type: DELETE_MONTRE,
                    payload: _id
                })
            }).catch((error) => console.log(error));

    }
}
export const updatemontre = (montre) => {
    return dispatch => {
        MontreService.editMontre(montre)
            .then((res) => {
                dispatch({
                    type: UPDATE_MONTRE,
                    payload: res.data
                })
            }).catch((error) => console.log(error));

    }
} 
