import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider } from '@mui/material/styles';
import {
  Outlet
} from "react-router-dom";
import Theme from '../themes/Theme';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
            <Outlet />
        </main>
        
        <Footer></Footer>
      </Box>
    </ThemeProvider>
  );
};
export default App;
