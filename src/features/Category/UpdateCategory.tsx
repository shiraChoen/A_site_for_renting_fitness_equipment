import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import {User} from "../../models/User";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, store } from '../../app/store';
import { Category } from '../../models/Category';
import AddCategory from '../Product/AddProduct';
import { deleteCategoryById, postCategory } from './CategorySlice';
import { deleteCategory } from '../../service/Category';




function Copyright(props: any) {
  
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function UseCategory() {
  // const users=useSelector((state:any)=>state.UserSlice.users);
  //משפט שצריך להוסיף בשביל להשתמש ב dispatch
  const dispatch: AppDispatch= useDispatch();
  const categories=useSelector((state:RootState )=> state.Category.categories);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    
    const data = new FormData(event.currentTarget);
    
   
    const newCategory:Category={
      id: (data.get('id')?.toString()),
      name: (data.get('name')?.toString()),
      numOfProduct: Number(data.get('numOfProduct')),
      description: (data.get('description')?.toString()),
     image:(data.get('image')?.toString())
    };
    let category:Category|any=categories.find((u:Category)=>u.name===data.get('name'))

    
    dispatch(deleteCategoryById(category));
    dispatch(postCategory(newCategory));
   
   
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
           
          </Avatar>
          <Typography component="h1" variant="h5">
           hi, update category
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="numOfProduct"
                  label="numOfProduct"
                  name="numOfProduct"
                  autoComplete="numOfProduct"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="description"
                  name="description"
                  autoComplete="description"
                />
              </Grid>
              
            
            
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              
             
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
               
               
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}