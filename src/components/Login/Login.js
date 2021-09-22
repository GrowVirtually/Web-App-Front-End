import React,{useState,useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CallToActionSharp } from '@material-ui/icons';
import axios from 'axios';
import '../../App.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link style={{color:'#009900'}} href="https://material-ui.com/">
        Grovi Official
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  typography: {
    fontFamily: 'Nunito',
  },
  image: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '../assets/potato.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    fontFamily: 'Nunito',
    fontSize: '1.5rem',
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#009900',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function Login() {

  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  // The regular exprssion to validate the email pattern
  // It may not be 100% perfect but can catch most email pattern errors and assures that the form is mostly right
  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage('Your email looks good!');
    } else {
      setIsValid(false);
      setMessage('Please enter a valid email!');
    }
  };
  
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try{
  //     const logindetails = await axios.post(`https://grovi-backend.herokuapp.com/api/v1/admins/login`,{
  //       email,
  //       password,        
  //     })
  //     // .then((response) => {
  //     //   console.log(response.status);
  //     // }, (error) => {
  //     //   console.log(error);
  //     // })
  //     console.log(process.env.HOST_PORT);
  //     console.log(logindetails);         
      
  //     if(logindetails.data.status === "success"){
  //       console.log(logindetails.data.user.fname);
  //       localStorage.setItem('token',logindetails.data.token);
  //       localStorage.setItem('Adminname',logindetails.data.fname);
  //       window.location = "/dashboard";     
  //     }
  //   } 

  //   catch(error){
  //     console.error(error);
  //     console.log('failed'); 
  //     alert("Only Admins Allow To Use");       
  //   }
  // }

  const handleLogin = async (e) => {
    e.preventDefault();
    axios.post(`https://grovi-backend.herokuapp.com/api/v1/admins/login`,{
        email,
        password,        
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem('token',response.data.token);
        console.log(localStorage.getItem('token'));
        localStorage.setItem('Adminname',response.data.user.fname);
          if(response.data.status === "success"){
            window.location = "/dashboard";     
        }
      }, (error) => {
        console.log(error);
        alert("Only Admins Allow To Use Dashboard");
      })
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <div className={`message ${isValid ? 'success' : 'error'}`}>
        {message}
      </div>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <h3>Admin Login</h3>
          <form className={classes.form} noValidate>
          
            <TextField              
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={validateEmail}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}              
            />
            
            <TextField
              color="#009900"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>{
                setPassword(e.target.value)
              }} 
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" style={{color:'#009900'}} />}
              label="Remember me"
            /> */}
            
            <Button
              onClick={handleLogin}
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              style={{backgroundColor:'#009900', color:'#fff', borderRadius:'50px'}}
            >
              Sign In
            </Button>
            
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>

              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}