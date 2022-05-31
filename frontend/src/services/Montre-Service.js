import Axios from "../Axios/Api";
const MONTRE_API = "/montres"
const fetchMontres = async () => {
    return await Axios.get(MONTRE_API);
}
const fetchMontreById = async (montreID) => {
    return await Axios.get(MONTRE_API + '/' +montreID);
}
const deleteMontre = async (montreID) => {
    return await Axios.delete(MONTRE_API + '/' +montreID);
}
const addMontre = async (montre) => {
    return await Axios.post(MONTRE_API, montre);

}
const editMontre = (montre) => {
    return Axios.put(MONTRE_API + '/' + montre._id, montre);

}

export const MontreService = {
    fetchMontres,
    fetchMontreById,
    deleteMontre,
    addMontre,
    editMontre
} 