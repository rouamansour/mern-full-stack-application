import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { loadSinglemontre, updatemontre } from "../../Redux/actions/montresAction";
import { loadCategories } from "../../Redux/actions/categoriesAction";
import { loadClients } from "../../Redux/actions/clientsAction";
import { useDispatch, useSelector } from "react-redux";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';


import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)


const EditMontre = () => {
    const [state, setState] = useState({
        id: "", marque: "", couleur: "",
        prix: "", qtestock: "", categorie: "", clients: []
    });

    const [clt, setClt] = useState([])
    const [files, setFiles] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const _id = params._id;
    useEffect(() => {
        dispatch(loadSinglemontre(_id));
        dispatch(loadCategories());
        dispatch(loadClients());
        setFiles("");
    }, [_id, dispatch]);

    const montre = useSelector((state) => state.allmontres.montre);
    const categories = useSelector((state) => state.allcategories.categories);
    const listeclients = useSelector((state) => state.allclients.clients);

    useEffect(() => {
        setState(montre);
        setFiles(montre.couverture)
    }, [montre]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(clt)
        const mont = {
            _id: _id,
            marque: state.marque,
            couleur: state.couleur,
            prix: state.prix,
            qtestock: state.qtestock,
            couverture: files[0].file.name,
            categorie: state.categorie,
            clients: clt.length > 0 ? clt : state.clients
        };
        dispatch(updatemontre(mont));
        navigate("/");
    }
    const handelInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const labelcategorie = () => {
        if (state.categorie) {
            if (state.categorie.nomcategorie) return "Categorie : "+state.categorie.nomcategorie
        }
        else return null
    }
    const labelclient = () => {
        if (state.clients) {
            let ch = ""
            state.clients.map((clt) => {
                if (clt.nomclient)
                    ch = ch + clt.nomclient
            })
            return ch
        }
        else return null
    }
    const handleClients = (event) => {
        setState({ ...state, "clients": [] });

        setClt(event.target.value);

    }
    return (

        <div className="container">

            <form style={{ marginLeft: 8 }}>
                <div>
                    <Button color="secondary" variant="contained"
                        onClick={(event) => handleSubmit(event)}>Update</Button>
                </div>
                <FormControl>
                    <TextField name="matque"
                        variant="outlined"
                        label="MARQUE"
                        value={state.marque}
                        onChange={handelInputChange}
                        required
                        style={{ margin: 10 }} />
                    <TextField name="couleur"
                        variant="outlined"
                        label="Couleur"
                        value={state.couleur}
                        onChange={handelInputChange}
                        required
                        style={{ margin: 10 }} />

                    <TextField name="prix"
                        variant="outlined"
                        type="Number"
                        label="Prix"
                        value={state.prix}
                        onChange={handelInputChange}
                        style={{ margin: 10 }} />
                    <TextField name="qtestock"
                        variant="outlined"
                        type="Number"
                        label="Quantité"
                        value={state.qtestock}
                        onChange={handelInputChange}
                        style={{ margin: 10 }} />

                    <TextField name="categorie"
                        variant="outlined"
                        select
                        label={labelcategorie()}
                        value={state.categorie}
                        onChange={handelInputChange}
                        style={{ margin: 10 }}>

                        {
                            categories ?
                                categories.map((cat) =>
                                    <MenuItem key={cat._id}
                                        value={cat._id}>{cat.nomcategorie}</MenuItem>
                                )
                                : null
                        }
                    </TextField>
                    <TextField
                        name="clients"
                        variant="outlined"
                        select
                        label={labelclient()}
                        SelectProps={{ multiple: true }}
                        value={clt ? clt : state.clients}
                        helperText="Sélectionner des clients"
                        onChange={(event) => handleClients(event)}
                    >
                        {
                            listeclients ?
                                listeclients.map((clt) =>
                                    <MenuItem key={clt._id}
                                        value={clt._id}>{clt.nomclient}</MenuItem>
                                )
                                : null
                        }
                    </TextField>
                </FormControl>
            </form>

            <h4>Download Picture</h4>
            <FormControl>
                <div style={{ width: 300, height: 50 }}>
                    <FilePond
                        files={files}
                        allowMultiple={false}
                        onupdatefiles={setFiles}
                        labelIdle='<span class="filepond--label-action">Browse One</span>'
                    />
                </div>
            </FormControl>
        </div>
    );
}
export default EditMontre ;