import React, {useContext, useEffect, useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import IncomeChart from './IncomeChart';
import NewuserChart from './NewuserChart';
import TotaladsChart from './TotaladsChart';
import Deposits from './Income';
import Cards from './Cards';
import HeaderDB from './Header';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Grovi Official
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    '&:hover': {
        background: "#cfd8dc",
        transition: "background 1s, color 1s",
     },
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  // const {loginState} = useContext(AuthContext);
  const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5NDc2MjQyMDA1MiIsImlhdCI6MTYzMjE3NTE1MSwiZXhwIjoxNjM5OTUxMTUxfQ.NO5FdshYXlGvLNrdnUos3dpqke9gPU03HusmBj6oPFU";

  // const getData = () => {
    
  //   axios.get(`https://grovi-backend.herokuapp.com/api/v1/bookings/checkout-session/1/4`)
  //   .then((response) =>{
  //     console.log(response);
  //   });
 
  // }

  useEffect(() => {
    getData();
  }, []);

  const name = localStorage.getItem('Adminname');
  const getData = async () => {
    try {
      const response = await axios.get(`https://grovi-backend.herokuapp.com/api/v1/admins/dashboard`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      console.log(response);
      console.log(localStorage.getItem('token'));
      // setProfile(response.data.data.profile);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className={classes.root} >
      <CssBaseline />
      <HeaderDB name={name}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Daily Order Revenue */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <IncomeChart/>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            {/* <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid> */}
          </Grid>
          {/* card grid */}          
            <Cards/>
          <Grid container spacing={3}>
            {/* new user count */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <NewuserChart/>
              </Paper>
            </Grid>
            {/* new ad Chart */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <TotaladsChart/>
              </Paper>
            </Grid>
          </Grid>         
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}


// export default function OrderTable() {

//   useEffect(() => {
//    orderData();
//   }, []);

//   let [responseData, setResponseData] = React.useState([])
  
//   const orderData = async () => {
//   try {
//     const response = await axios.get(`https://grovi-backend.herokuapp.com/api/v1/gigs/all/5.977553814423967,80.34890374890934?distance=60000&searchTag=rro`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     })
//     console.log(response.data.data.gigs);
//     setResponseData(response.data.data.gigs);
//   } catch (error) {
//     console.error(error);
//   }
// }; 