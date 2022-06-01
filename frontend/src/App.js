import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import ListMontres from './Components/Montres/ListMontres';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import AjoutMontre from './Components/Montres/AjoutMontre';
import EditMontre from './Components/Montres/EditMontre';

import Login from './Authentification/Login';

import ListCards from './Components/Acheteur/ListCards';

//import { CartProvider } from "react-use-cart"; 
function App() {
  return (
    // <CartProvider> 
    <>
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Montre
              </Typography>

              <Link to="/"><Button color="error">Liste des montres</Button></Link>
              {/* <Link
                component="button"
                variant="body2"
                to="/"
              >
                Liste des Montres
              </Link> */}
            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          {/* <Route exact path="/" element={<ListMontres />}></Route> */}
          <Route exact path="/montres" element={<ListMontres/>}></Route>

          <Route path="/addMontres" element={<AjoutMontre />}></Route>
          <Route path="/editMontres/:_id" element={<EditMontre />}></Route>
          <Route path="/admin" element={<Login/>}></Route>
          <Route path="/" element={<ListCards/>}></Route>
          {/* <Route path="/admin" element={<Login/>}></Route> */}

        </Routes>
      </Router>
    </>
    // </CartProvider> 
  );
}
export default App; 