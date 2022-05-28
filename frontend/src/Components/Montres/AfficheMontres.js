import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
//import AddIcon from '@material-ui/icons/Add';
//import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch, useSelector } from "react-redux";
import { deletemontre } from "../../Redux/actions/montresAction"
import { Link, useNavigate } from 'react-router-dom';

const AfficheMontres = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        if (window.confirm("delete category Y/N ?")) {
            dispatch(deletemontre(id));
            navigate("/");
        }
    }
    
    const montres = useSelector((state) => state.allmontres.montres);
    return (
        <>
            <Button variant="contained"  color="secondary" size="medium"  style={{ margin: 40 }}>
                <Link to={"/addMontres/"}
                    style={{ "textDecoration": "none", "color": "white" }}>
                    Add
                </Link>
            </Button>
            <Grid container spacing={2} columns={15} marginTop={10}>
                {montres.map((row) => (
                    <Grid item xs={5} key={row._id}>
                        <Card sx={{ maxWidth: 250 }} key={row._id}>
                            <CardMedia
                                component="img"
                                height={230}
                                image={"images/" + row.image}
                                alt={row.marque}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {row.marque}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {row.prix} TND
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {row.couleur}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={"/editMontres/" + row._id}
                                    style={{ "textDecoration": "none", "color": "white" }}> <Button variant="contained"
                                        color="primary" size="small">Update</Button></Link>
                                <Button variant="outlined" color="error"   size="small" 
                                    onClick={() => handleDelete(row._id)}>Delete</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
                )
                }

            </Grid>
        </>
    )
}
export default AfficheMontres;