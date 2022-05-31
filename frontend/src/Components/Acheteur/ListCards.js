import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadMontres } from "../../Redux/actions/montresAction"
import AfficheCards from "./AfficheCards"
const ListCards = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMontres());
    });


    return (

        <div><AfficheCards /></div>
    )
}
export default ListCards 
