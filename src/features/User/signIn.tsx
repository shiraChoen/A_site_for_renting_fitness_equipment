import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import p from "../../pictures/p10.jpg";
import {AppDispatch, RootState} from '../../app/store'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, postuser, userSlice } from './UserSlice';
import { useEffect } from 'react';
import { User } from '../../models/User';


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

export default function SignInSide() {

  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);

  const navigate=useNavigate();

  const users=useSelector((state:RootState )=> state.User.users);
  const dispatch:AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
    
 const data = new FormData(event.currentTarget);
 const user:User|any=users.find((u:User)=>u.eMail===data.get('email')&&u.password===data.get('password'))

 if(user==null)
     {
      //console.log(users)
      navigate('/SignUp')
     }
     else 
     {  
      dispatch(userSlice.actions.saveUser(user))
       
      if(user?.status===0)
     {
       navigate('/CategoryViewNew')
       }
       else 
       navigate('/ViewManager')
     }
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    //const currentUser={email:data.get('email'),password:data.get('password')}
   
    //initialState.loginUser=users.filter((user:User)=>user.eMail==currentUser.email&&user.password==currentUser.password)
    // initialState.loginUser=
    // console.log(initialState.loginUser+"bbbbb")
  };
  const handleClose = () => {
   setAnchorEl1(null);
   };
  return (<>
      {/* ({users.map((u:User)=>{
        alert(u.firstName)
      })}) */}
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '95vh'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:`url(${p})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} >
              <TextField 
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address" 
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button 
              onClick={handleClose}
               className='button'
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >Sign In
                  {/* <Link href="UserNavBar" variant="body2" >
                    {"Sign In"}
                  </Link> */}
              </Button>
              <Grid container>
                <Grid item xs>
                 
                </Grid>
                <Grid item>
                  <Link href="SignUp" variant="body2" >
                    {"Don't have an account? Sign Up"}
                  </Link>
                 {/* <NavLink to="SignUp">Don't have an account? Sign Up1</NavLink> */}
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider></>
  );
}