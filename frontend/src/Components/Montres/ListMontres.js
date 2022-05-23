import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadMontres } from "../../Redux/actions/montresAction.js";
import AfficheMontres from "./AfficheMontres.js"  ;
const ListMontres = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMontres());
    });


    return (

        <div><AfficheMontres /></div>
    )
}
export default ListMontres 