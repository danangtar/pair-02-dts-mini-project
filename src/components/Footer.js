import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://pair-02-dts-mini-project.netlify.app/">
        Pair-02
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {

  return (
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto'
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" align="center">
            Made with Haste.
          </Typography>
          <Copyright />
        </Container>
      </Box>
  );
};
export default Footer;
