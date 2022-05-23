import { GET_CATEGORIES } from "../types";
import { CategoriesService } from "../../services/Categorie-Service"

export const loadCategories = () => {
    return (dispatch) => {
        CategoriesService.fetchCategories()
            .then(res => {
                dispatch({
                    type: GET_CATEGORIES,
                    payload: res.data
                })

            }).catch((error) => console.log(error));

    }
}


