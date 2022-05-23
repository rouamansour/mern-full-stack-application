import { GET_CLIENTS } from "../types"
import { ClientService } from "../../services/Client-Service";
export const loadClients = () => {
    return (dispatch) => {
        ClientService.fetchClients()
            .then(res => {
                dispatch({
                    type: GET_CLIENTS,
                    payload: res.data
                })

            }).catch((error) => console.log(error));

    }
} 
