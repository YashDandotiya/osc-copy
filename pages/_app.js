// pages/_app.js
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalDataContextProvider } from '../lib/GlobalData';
import DrawerContents from '../components/DrawerContents';
import LoginDialog from '../components/LoginDialog';
import { AppBar, Box, Toolbar, Typography, IconButton, Badge, styled, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import Link from '@mui/material/Link';
import { blue, cyan, green, grey, lime, orange, pink, purple, red, teal } from '@mui/material/colors';
import {routes} from '../components/routes';

// Define the theme options
const themeOptions = {
  palette: {
    primary: {
      light: "#2a6685",
      main: "#2a6685",
    },
    secondary: {
      light: "#b7275b",
      main: "#b7275b",
    },
    success: {
      light: "#409043",
      main: "#409043",
    },
  },
  typography: {
    body: {
      fontSize: 14
    },
    body2: {
      fontSize: 14
    }
  },
  scores: {
    0: grey[400], // no data
    1: green[800], // low
    2: orange[800], // medium
    3: red[700], // high
    4: red[900], // red flag
    other: grey[400] // other
  },
  graphs: {
    0 : pink[800],
    1 : cyan[800],
    2 : purple[900], 
    3 : lime[800],
    4 : teal[900], 
    5 : blue[900] 
  }
};

const appTheme = createTheme(themeOptions);

// Styled components
const drawerWidth = 175;

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
}));

export default function MyApp({ Component, pageProps }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [open] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogin = () => {
    setLoginOpen(!loginOpen);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  return (
    <GlobalDataContextProvider>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <AppBarStyled position="absolute" open={open} elevation={0} sx={{ color: theme => theme.palette.grey[800], backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900] }}>
            <Toolbar>
              <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                {/* You can add a custom header component here */}
                Header
              </Typography>
              <IconButton color="inherit" onClick={handleLogin}>
                <Badge color="secondary">
                  <PersonIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit" sx={{ ml: 0 }}>
                <Badge badgeContent={0} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ ml: 0, display: { sm: 'none' } }}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBarStyled>
          <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
            <Drawer
              sx={{
                width: drawerWidth,
                height: '100vh',
                flexShrink: 0,
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: drawerWidth,
                },
              }}
              anchor="right"
              variant="temporary"
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
              open={mobileOpen}
            >
              <DrawerContents routes={routes} />
            </Drawer>
            <Drawer
              sx={{
                width: drawerWidth,
                height: '100%',
                flexShrink: 0,
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                },
              }}
              variant="permanent"
              anchor="left"
              open={open}
            >
              <DrawerContents routes={routes} />
            </Drawer>
          </Box>
          <Box component="main" sx={{ backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900], flexGrow: 1, m: 0, p: 0, minHeight: '100vh', width: `calc(100% - ${drawerWidth}px)` }}>
            <Toolbar />
            <LoginDialog open={loginOpen} handleClose={handleLoginClose} fullScreen={false} />
            <Component {...pageProps} />
          </Box>
        </Box>
      </ThemeProvider>
    </GlobalDataContextProvider>
  );
}
