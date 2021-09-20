import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    middle:{
        backgroundColor:'#151515',
        minHeight:'100px',
        textAlign:'center',
    },
    bottomText:{
        color:'#8A8A8A',
        margin:'auto',
        fontFamily:'Nunito',
        fontWeight:'300',        
    },
    hr:{
        color:'#8A8A8A',
        width:'80%',
        margin:'auto',
    },
    bottomLine:{
        color:'#8A8A8A',
        textAlign:'center',
        padding:'1%',
    }
  }));
  
  export default function Footer() {
    const classes = useStyles();
  
    return (
    <React.Fragment>
      <CssBaseline />    
      <Box component="span" m={1} style={{ margin: 0, padding: 0 }}>
        <div className={classes.middle}>
        <Grid container spacing={3} xs={12} justify = "center">
        <Grid item xs={3}>
        <div className={classes.bottomText}>
        <h2>Grow Virtually</h2>
        <img src={process.env.PUBLIC_URL + '../assets/transW.png'} style={{width:'40%'}}/> 
        </div>
        </Grid>
        <Grid item xs={3}>
        <div className={classes.bottomText}>
        <h2>About Us</h2>
        <h3>Facebook</h3>
        <h3>Instagram</h3>
        <h3>Twitter</h3>
        </div>          
        </Grid>
        <Grid item xs={3}>
        <div className={classes.bottomText}>
        <h2>Contact Grovi</h2>
        <h3>No:226,Kirulapone,Colomco 06</h3>
        <h3>+94778892557</h3>
        <h3>+94712126176</h3>
        </div>          
        </Grid>
        <Grid item xs={3}>
        <div className={classes.bottomText}>
        <h2>FAQ</h2>
        <h3>How It Works</h3>
        <h3>Terms of Sevice</h3>
        <h3>Privacy Policy</h3>
        </div>          
        </Grid>
      </Grid>
      <div className={classes.hr}>
            <hr/>
        </div>
        <div className={classes.bottomLine}>
        <p> &copy;{new Date().getFullYear()} GroVi SriLanka | All right reserved </p>                    
        </div>
        </div>
      </Box>
    </React.Fragment>
    
    );
  }