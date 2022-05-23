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
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exiforientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
const AjoutMontre = () => {
    const [isbn, setId] = useState("");
    const [titre, setMarque] = useState("");
    const [annedition, setCouleur] = useState("");
    const [prix, setPrix] = useState("");
    const [qtestock, setQtestock] = useState("");
    const [specialite, setCategorie] = useState("");
//    const [maised, setMaised] = useState("");
//    const [lesauteurs, setLesauteurs] = useState([]);
    const [files, setFiles] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(loadCategories());
        dispatch(loadClients());
    }, [dispatch]);
    const categories = useSelector((state) => state.allcategories.categories);
    const auteurs = useSelector((state) => state.allclients.clients);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const liv = {
            id: id,
            marque: marque,
            couleur: couleur,
            prix: prix,
            qtestock: qtestock,
            //couverture: files[0].file.name,
            categorie: categorie
            //auteurs: lesauteurs
        };
        dispatch(addmontre(mont));
        navigate("/");
    }
    return (

        <div className="container">

            <form style={{ marginLeft: 8 }}>
                <div>
                    <Button variant="contained"
                        onClick={(event) => handleSubmit(event)}>Ajout</Button>
                </div>
                <FormControl>
                    <TextField
                        variant="outlined"
                        label="Id"
                        value={id}
                        onChange={e => setIsbn(e.target.value)}
                        required />
                    <TextField
                        variant="outlined"
                        label="Marque"
                        value={marque}
                        onChange={e => setTitre(e.target.value)}
                        required />
                    <TextField
                        variant="outlined"
                        label="Couleur"
                        value={couleur}
                        onChange={e => setAnnedition(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        type="Number"
                        label="Prix"
                        value={prix}
                        onChange={e => setPrix(e.target.value)}
                    />
                    {/* <TextField
                        variant="outlined"
                        type="Number"
                        label="Quantité"
                        value={qtestock}
                        onChange={e => setQtestock(e.target.value)}
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
                            categories.map((spec) =>
                                    <MenuItem key={spec._id}
                                        value={spec._id}>{spec.nomcategories}</MenuItem>
                                )
                                : null
                        }
                    </TextField>
                    <TextField
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
                                clients.map((aut) =>
                                    <MenuItem key={aut._id}
                                        value={aut._id}>{aut.nomclient}</MenuItem>
                                )
                                : null
                        }
                    </TextField>
                </FormControl>
            </form>

            <h4>Télécharger Image</h4>
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
export default AjoutMontre ;