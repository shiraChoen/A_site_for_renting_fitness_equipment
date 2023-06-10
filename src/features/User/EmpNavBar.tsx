import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from '@mui/material';

export default function ButtonAppBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" >
        <Toolbar className='appNav'>
        <div>
      <Button className='nav'
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
        <MenuItem onClick={handleClose}>Add Employee</MenuItem>
        <MenuItem onClick={handleClose}>Add Category</MenuItem>
        <MenuItem onClick={handleClose}>Stairs</MenuItem> 
        <MenuItem onClick={handleClose}>Ball</MenuItem>
        <MenuItem onClick={handleClose}>Bicycle</MenuItem>
        <MenuItem onClick={handleClose}>Kits</MenuItem>
        <MenuItem onClick={handleClose}>Walker</MenuItem>
        <MenuItem onClick={handleClose}>Trampoline</MenuItem>
      </Menu>
    </div>
      </Toolbar>
      </AppBar>
    </Box>
  );
}