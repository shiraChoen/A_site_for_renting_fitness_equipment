import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from '@mui/material';
import { Navigate, NavLink, redirect, Router, useNavigate } from 'react-router-dom';
import ViewProduct from '../Product/ViewProduct';

export default function ButtonAppBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const navigate=useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    navigate('/ViewProduct');
  };


  
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" >
        <Toolbar className='appNav'>
        <div>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>




      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Elliptical</MenuItem>
        <MenuItem onClick={handleClose}>Stepper</MenuItem>
        <MenuItem onClick={handleClose}>Stairs</MenuItem> 
        <MenuItem onClick={handleClose}>Ball</MenuItem>
        <MenuItem onClick={handleClose}>Bicycle</MenuItem>
        <MenuItem onClick={handleClose}>Kits</MenuItem>
        <MenuItem onClick={handleClose}>Walker</MenuItem>
        <MenuItem onClick={handleClose}>Trampoline</MenuItem>
      </Menu>
    </div>
    <Box sx={{ flexGrow: 0.2 }} />
          <NavLink to="CheckOut" className={"nav"}>check out</NavLink>
      </Toolbar>
      </AppBar>
    </Box>
  );
}