import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [context, setContext] = React.useContext(UserContext);
  let navigate = useNavigate();

  let availPages;
  if(context.loggedIn) {
    availPages = [
      {url: '/', name: 'Home'}
    ];
  }
  else {
    availPages = [
      {url: '/', name: 'Home'},
      {url: '/register', name: 'Register'},
      {url: '/login', name: 'Login'}
    ];
  }
  const pages = availPages;
  const settings = ['Profile', 'Account', 'Logout'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
      setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
      setAnchorElUser(null);
  };

  const logout = (event) => {
      setContext({ loggedIn: false, name: '' });
      navigate('/');
  }

  return (

    <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Link href="/">
          <Avatar alt="Remy Sharp" src="/logo.png" variant="square" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
        </Link>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page, key) => (
              <Link href={page.url} key={key} >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              </Link>
            ))}
          </Menu>
        </Box>
        <Link href="/">
          <Avatar alt="Remy Sharp" src="/logo.png" variant="square" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}/>
        </Link>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page, key) => (
            <Link href={page.url} key={key}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            </Link>
          ))}
        </Box>
        {context.loggedIn &&
        
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" variant="square" src="ProfilePicture.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                {setting !== 'Logout'&&
                  <Typography textAlign="center">{setting}</Typography>
                }
                {setting === 'Logout'&&
                  <Typography onClick={logout} textAlign="center">{setting}</Typography>
                }
              </MenuItem>
            ))}
          </Menu>
        </Box>
        }
      </Toolbar>
    </Container>
  </AppBar>
  );
}

export default Navbar;