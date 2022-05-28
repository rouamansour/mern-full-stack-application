import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addmontre } from "../../Redux/actions/montresAction";
import { loadCategories } from "../../Redux/actions/categoriesAction";
import { loadClients} from "../../Redux/actions/clientsAction";
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


const AjoutMontre = () => {
    const [id, setId] = useState("");
    const [marque, setMarque] = useState("");
    const [couleur, setCouleur] = useState("");
    const [prix, setPrix] = useState("");
    const [qtestock, setQtestk] = useState("");
    const [categorie, setCategorie] = useState("");
//    const [maised, setMaised] = useState("");
    //const [lesclients, setLesclients] = useState([]);
    const [files, setFiles] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(loadCategories());
        dispatch(loadClients());
    }, [dispatch]);
    const categories = useSelector((state) => state.allcategories.categories);
    console.log(categories);
    //const clients = useSelector((state) => state.allclients.clients);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const mont = {
            id: id,
            marque: marque,
            couleur: couleur,
            prix: prix,
            qtestock: qtestock,
            image: files[0].file.name,
            categorie: categorie,
            //clients: lesclients
        };
        dispatch(addmontre(mont));
        navigate("/");
    }
    return (

        <div className="container">

            <form style={{ margin: 60 }}>
                
                <FormControl>
                    <TextField
                        variant="outlined"
                        label="Id"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        required />
                    <TextField
                        variant="outlined"
                        label="Marque"
                        value={marque}
                        onChange={e => setMarque(e.target.value)}
                        required />
                    <TextField
                        variant="outlined"
                        label="Couleur"
                        value={couleur}
                        onChange={e => setCouleur(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        type="Number"
                        label="Prix"
                        value={prix}
                        onChange={e => setPrix(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        type="Number"
                        label="Quantité"
                        value={qtestock}
                        onChange={e => setQtestk(e.target.value)}
                    />
                    {/* <TextField
                        variant="outlined"
                        type="text"
                        label="Categories"
                        value={categorie}
                        onChange={e => setCategorie(e.target.value)}
                    /> */}
                    <TextField
                        variant="outlined"
                        select
                        label="Categories"
                        value={categorie}
                        helperText="Sélectionner une categorie"
                        onChange={e => setCategorie(e.target.value)}
                    >
                        {
                            categories ?
                            categories.map((cat) =>
                                    <MenuItem key={cat._id}
                                        value={cat._id}>{cat.nomcategorie}
                                    </MenuItem>
                                )
                                : null
                        }
                    </TextField>
                    {/* <TextField
                        variant="outlined"
                        select
                        label="Clients"
                        SelectProps={{ multiple: true }}
                        value={lesclients}
                        helperText="Sélectionner des clients"
                        onChange={e => setLesclients(e.target.value)}
                    >
                        {
                            clients ?
                                clients.map((clt) =>
                                    <MenuItem key={clt._id}
                                        value={clt._id}>{clt.nomclient}</MenuItem>
                                )
                                : null
                        }
                    </TextField> */}
                </FormControl>
            </form>

            <h4 style={{ margin: 60 }}>Download Picture</h4>
            <FormControl style={{ margin: 40}}>
                <div style={{ width: 300, height: 50 }}>
                    <FilePond
                        files={files}
                        allowMultiple={false}
                        onupdatefiles={setFiles}
                        labelIdle='<span class="filepond--label-action">Browse One</span>'
                    />
                </div>
            </FormControl>
            <br></br>
            <div>
                    <Button style={{ margin: 60 }} variant="contained"
                        onClick={(event) => handleSubmit(event)}>Add
                    </Button>
            </div>
        </div>
    );
}
export default AjoutMontre ;