import Axios from "../Axios/Api";
const CLIENT_API = "/clients"
const fetchClients = async () => {
    return await Axios.get(CLIENT_API);
}

export const ClientService = {
    fetchClients
} 