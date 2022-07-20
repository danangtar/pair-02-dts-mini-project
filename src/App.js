import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Theme from './themes/Theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './containers/Home';
import MovieDetail from './containers/MovieDetail';

const App = () => {

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Navbar></Navbar>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <main>
          
        <BrowserRouter> 
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Box sx={{ mt: 10 }}>Halaman Login</Box>}/>
              <Route path="/register" element={<Box sx={{ mt: 10 }}>Halaman Register</Box>}/>
              <Route path="/movie/:movieId" element={<MovieDetail/>}/>
          </Routes>
        </BrowserRouter>
        </main>
        
        <Footer></Footer>
      </Box>
    </ThemeProvider>
  );
};
export default App;
