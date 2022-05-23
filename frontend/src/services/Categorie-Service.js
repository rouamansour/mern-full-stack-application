import Axios from "../Axios/Api";
const CATEGORIE_API = "/specialites"
const fetchCategories = async () => {
    return await Axios.get(CATEGORIE_API);
}

export const CategoriesService = {
    fetchCategories
}