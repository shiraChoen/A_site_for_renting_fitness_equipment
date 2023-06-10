import React, { useEffect, useState} from 'react';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Radio, Space } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppBar, Box, Menu, MenuItem, Toolbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Category } from '../../models/Category';
import { AppDispatch, RootState } from '../../app/store';
import { getCategories } from '../Category/CategorySlice';
import CategoryView from '../Category/CategoryView';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const navigate=useNavigate();
  const open1 = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    // setAnchorEl(null);
    navigate('/ViewProduct');
  };
  
  return (
    <>
      <Space>
        <Radio.Group value={placement} onChange={onChange}>
          {/* <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio> */}
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
     
      <Drawer
        title="Basic Drawer"
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      > 

     <CategoryView />
           
      {/* <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" >
        {/* <Toolbar className='appNav'> 
        <div> */}
     
     
        {/* <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button> */}




       {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }} 
      >*/}
        {/* <MenuItem onClick={handleClose}>Elliptical</MenuItem>
        <MenuItem onClick={handleClose}>Stepper</MenuItem>
        <MenuItem onClick={handleClose}>Stairs</MenuItem> 
        <MenuItem onClick={handleClose}>Ball</MenuItem>
        <MenuItem onClick={handleClose}>Bicycle</MenuItem>
        <MenuItem onClick={handleClose}>Kits</MenuItem>
        <MenuItem onClick={handleClose}>Walker</MenuItem>
        <MenuItem onClick={handleClose}>Trampoline</MenuItem>  */}
      {/* </Menu> */}
    {/* </div>
    <Box sx={{ flexGrow: 0.2 }} /> */}
         
   



      </Drawer>
    </>
  );
};

export default App;

