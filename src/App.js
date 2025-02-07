import './App.css';
import { Outlet, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import { Box, Toolbar } from "@mui/material";


function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Navbar */}
      <Header />
      <Toolbar/>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3}}>
        <Outlet /> {/* This will render Home, About, or Contact */}
      </Box>
    </Box>
  );
}

export default App;
