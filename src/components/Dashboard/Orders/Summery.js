import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function TodayDate(){
    return(
      <Typography color="textSecondary" variant="body1">
        {'('}
        {new Date().toLocaleDateString()}
        {' at '}         
        {new Date().getHours() + ":" + new Date().getMinutes()}
        {')'} 
      </Typography>
    );
 }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  midAlign:{
      textAlign:'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    minHeight: '50vh',
    color: theme.palette.text.secondary,
    '&:hover': {
        background: "#cfd8dc",
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

export default function Summery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>        
          <Paper className={classes.paper}>
              <div className={classes.midAlign}>
                <h2>Order Summery Today</h2>
                <h3><TodayDate/></h3>
                <hr style={{width:'80%'}} />
               </div> 
                <h3>Total No Of Orders : 25</h3>
                <h3>Total No Of Delivers : 25</h3>
                <h3>Total No Of Sellers : 25</h3>
                <h3>Total No Of Buyers : 25</h3>
                {/* <h3>Total No Of Orders : 25</h3> */}
               <div className={classes.midAlign}>
               <Button variant="contained" style={{color:'#E8E8E8',backgroundColor:'#009900'}}>
                    Download Report
               </Button>
                </div> 
          </Paper>
      </Grid>
    </div>
  );
}
