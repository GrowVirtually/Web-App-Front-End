import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';

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

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <div className={classes.fontStyle}>Total Users</div>
          <br/>
          <Typography component="p" variant="h3">
            320
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
            456
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <div className={classes.fontStyle}>Expiring GIGs</div>
          <br/>
          <Typography component="p" variant="h3">
            30
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <div className={classes.fontStyle}>New GIGs</div>
          <br/>
          <Typography component="p" variant="h3">
            79
          </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
