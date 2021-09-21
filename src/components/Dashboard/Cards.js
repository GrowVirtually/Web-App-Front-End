import React , {useContext, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    minHeight: '25vh',
    color: theme.palette.text.secondary,
    '&:hover': {
        background: "#a5d6a7",
        transition: "background 1s, color 1s",
     },
  },
  fontStyle:{
    fontFamily: 'Nunito',
    fontWeight:'600',
    fontSize:'1.2rem',
    color:'#1a237e',
  },
}));

export default function Cards() {
  const classes = useStyles();
  
  useEffect(() => {
    getGigs();
  }, []);

  let [responseData, setResponseData] = React.useState('')
  
  const getGigs = async () => {
  try {
    const response = await axios.get(`https://grovi-backend.herokuapp.com/api/v1/admins/dashboard`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    console.log(response);
    setResponseData(response.data.data);
  } catch (error) {
    console.error(error);
  }
};  

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <div className={classes.fontStyle}>Total Users</div>
          <br/>
          <Typography component="p" variant="h3">
            {responseData.userCount}
          </Typography>
          {/* <PersonIcon/>
          <h5>
           Total no of users using the mobile app
           </h5>              */}
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <div className={classes.fontStyle}>Total GIGs</div> 
          <br/>
          <Typography component="p" variant="h3">
              {responseData.gigCount}
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <div className={classes.fontStyle}>Expiring GIGs</div>
          <br/>
          <Typography component="p" variant="h3">
            0
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <div className={classes.fontStyle}>New GIGs</div>
          <br/>
          <Typography component="p" variant="h3">
          {responseData.gigCount}
          </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
