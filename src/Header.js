import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { auth, provider, signInWithPopup, signOut } from "./components/Auth/firebase";
import { useAuth } from './contexts/AuthContext';

const drawerWidth = 240;
const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ];
  
function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {user} = useAuth();

  const handleGoogleAuth = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Task Management
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', fontSize: "14px", textTransform: "capitalize" }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: 'black'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', fontSize: "16px", textTransform: "uppercase", fontStyle: "italic", textShadow: "2px 2px blue" } }}
          >
            Task Management
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
             {/*  {navItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  sx={{ color: '#fff', fontSize: '14px', textTransform: "capitalize" }}
                  component={Link} // Use the Link component for navigation
                  to={item.path} // Specify the target path
                  >
                {item.label}
              </Button>
              ))} 
              */}

 {/* 
              {user ? (
                  <>
                    <Button  color="inherit" sx={{ color: '#fff', fontSize: '12px', textTransform: "capitalize" }}>
                        Name: Mumpy Sutradhar
                    </Button>
                    <Button  color="inherit"  type="button" variant="outlined" sx={{ color: '#fff', fontSize: '12px', textTransform: "capitalize" }} onClick={handleLogout}>
                      Log Out
                   </Button>
                  </>
              )  : (
                <>
                  <Button  type="button" variant="outlined" color="#fff" sx={{ mb: 2, fontSize: "12px", marginTop: "15px" }} onClick={handleGoogleAuth}>
                      Get Started
                  </Button>
                </>
               
              )}
             */}     
           
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Header;