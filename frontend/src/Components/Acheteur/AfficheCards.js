import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";

const AfficheCards = () => {

    const montres = useSelector((state) => state.allmontres.montres);
    return (
        <>

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
                                <Button disabled={row.qtestock <= 1}
                                    variant="contained" color="primary" size="large"
                                >
                                    {row.qtestock <= 1 ? "En rupture de stock" : "Ajouter au panier"}
                                </Button>
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
export default AfficheCards 