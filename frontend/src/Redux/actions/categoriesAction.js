import { GET_CATEGORIES } from "../types";
import { CategorieService } from "../../services/Categorie-Service";
export const loadCategories = () => {
    return (dispatch) => {
        CategorieService.fetchCategories()
            .then(res => {
                dispatch({
                    type: GET_CATEGORIES,
                    payload: res.data
                })

            }).catch((error) => console.log(error));

    }
}