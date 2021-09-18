import React from 'react';
import { Paper, Card, Typography, makeStyles, Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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

  return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
            <Card className={classes.pageIcon}>
                <AccountCircleIcon fontSize="large"/>
            </Card>
            <div className={classes.userdata}>
                <h3>User Name :</h3>
                <h3>e-mail    :</h3>
                <h3>Telephone :</h3>
                <h3>Added Date:</h3>
                <h3>Status    : Admin</h3>
            </div>
        </Paper>
    </div>
  );
}
