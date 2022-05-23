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
function App() {
  return (
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
              <Link to="/"><Button color="error">Liste des Montres</Button></Link>
            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route exact path="/" element={<ListMontres />}></Route>
          <Route path="/addArticles" element={<AjoutMontre/>}></Route>  
        </Routes>
      </Router>
    </>
  );
}
export default App; 