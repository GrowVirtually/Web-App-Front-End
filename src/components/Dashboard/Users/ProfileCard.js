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


export default function ProfileCard() {
  const classes = useStyles();
  useEffect(() => {
    console.log(localStorage.getItem('token'));
    console.log('abcd');
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
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
            <Card className={classes.pageIcon}>
                <AccountCircleIcon fontSize="large"/>
            </Card>
            <div className={classes.userdata}>
                <h3>User Name :</h3>
                <h3>Telephone    :</h3>
                <h3>DOB :</h3>
                <h3>NIC:</h3>
                <h3>E-Mail :</h3>
                <h3>Gender:</h3>
                <h3>Status    : Admin</h3>
            </div>
        </Paper>
    </div>
  );
}
