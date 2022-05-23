import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { useDispatch, useSelector } from "react-redux";
import { deletemontre } from "../../Redux/actions/montresAction"
import { Link, useNavigate } from 'react-router-dom';

const AfficheMontres = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDelete = (id) => {
        if (window.confirm("sipprimer la catégorie O/N")) {
            dispatch(deletemontre(id));
            navigate("/");
        }
    }
    const montres = useSelector((state) => state.allmontres.montres);
    return (
        <>
            <Button variant="contained" color="success" size="medium">
                <Link to={"/addArticles/"}
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
                                image={"images/" + row.couverture}
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
                                <Button variant="contained" color="error" size="small"
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