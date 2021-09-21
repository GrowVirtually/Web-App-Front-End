import React, {useContext, useEffect, useState} from 'react';
import { Paper, Card, Typography, makeStyles, Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    minHeight: '25vh',
    backgroundColor: '#7986cb',
    borderRadius:'10px',
    color: theme.palette.text.secondary,
    '&:hover': {
        background: "#b0bec5",
        transition: "background 1s, color 1s",
     },
  },
  fontStyle:{
    fontFamily: 'Nunito',
    fontWeight:'600',
    fontSize:'1.2rem',
    color:'#1a237e',
  },
  pageIcon:{
    display:'inline-block',
    padding:theme.spacing(2),
    color:'#7986cb'
  },
  userdata:{
      textAlign:'left',
  }
}));


export default function ProfileCard(props) {
  const classes = useStyles();
  let [responseData, setResponseData] = React.useState('')

  useEffect(() => {
    getProfile();
  }, []);
  
  const getProfile = async () => {
    try {
      const response = await axios.get(`https://grovi-backend.herokuapp.com/api/v1/users/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }, 
      });
      console.log(response);
      setResponseData(response.data.data.profile);
      
    } catch (error) {
      console.error(error);
    }
  };
  console.log(props)
  return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
            <Card className={classes.pageIcon}>
                <AccountCircleIcon fontSize="large"/>
            </Card>
            <div className={classes.userdata}>
                <h3>User Name :{responseData.fname} {responseData.lname}</h3>
                <h3>Telephone :   {responseData.phone}</h3>
                <h3>DOB : {responseData.dob} </h3>
                <h3>NIC: {responseData.nic} </h3>
                <h3>E-Mail : {responseData.email} </h3>
                <h3>Gender: {responseData.gender} </h3>
                <h3>Status    : Admin</h3>
            </div>
        </Paper>
    </div>
  );
}

