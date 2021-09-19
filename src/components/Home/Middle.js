import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: '#F0F0F0',
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
      },
    heading:{
        color: '#009900',
        textAlign:'center',
        fontSize: '2rem',
        fontFamily: 'Nunito',
        fontWeight:'600',
        marginBottom:'7%',
    },
    cardText:{
        color: '#151515',
        textAlign:'center',
        fontFamily: 'Nunito',
        fontSize: '1.5rem',
        fontWeight:'300',
    },
    middle:{
        backgroundColor:'#003e00',
        minHeight:'50vh',
    },
    description:{
        color:'#fff',
        fontFamily:'Nunito',
        fontWeight:'400',
        margin:'2%',
        padding:'5%',
        linkStyle:'none',
    },
    media: {
        height: 540,
        width:'40%',
        margin:'auto',
        textAlign:'center',
      },
    downBtn:{
        '& > *': {
            margin: theme.spacing(1),
            color:'#fff',
            width:'80%',
            borderRadius: 20,
            border: "1px solid #fff",
          },
    },
  }));
  
  export default function Middle() {
    const classes = useStyles();
  
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="m">
        <div className={classes.heading} id="middle">
            <h2>Best Marketplace For Your Organic and Surplus Harvest</h2>
        </div>
      <div className={classes.root}>
        <Box component="span" m={1}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + '../assets/sell.png'}
          title="Grovi Mobile App"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
          Buy And Sell
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Find your organic lifestyle while
selling what you have in your home garden
          </Typography> */}
        <div className={classes.cardText}>
            <h5>Buy And Sell</h5>
            <h6> Find your organic lifestyle while
selling what you have in your home garden</h6>
        </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={6}>
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + '../assets/ad.png'}
          title="Grovi Mobile App"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
          Friendly UI
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Access and post advertisements easily.
Find what you want withinn 10 seconds.
          </Typography> */}
                  <div className={classes.cardText}>
            <h5>Friendly UI</h5>
            <h6>Access and post advertisements easily.
Find anything withinn 10 seconds.</h6>
        </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
          </Grid>
        </Grid>
        </Box>
      </div>
      <div className={classes.heading}>
      <h3>The Platform Where Growers Meet Customers</h3>
        </div>
      </Container>
      <Box component="span" m={1} style={{ margin: 0, padding: 0 }}>
        <div className={classes.middle}>
            <Grid container spacing={3} xs={12}>
            <Grid item xs={4}>
            <img src={process.env.PUBLIC_URL + '../assets/transW.png'} style={{width:'60%', marginLeft:'10%'}}/> 
        </Grid>
        <Grid item xs={8}>
          <div className={classes.description}>
              <h1>GroVi Mobile App</h1>
              <p>Surplus produce happens because of lack of selling opportunities, loss in demand or result of overproduction. There can be a lot of surplus product available 
                  in Sri Lanka without any consumer. Without a buyer, farmers are forced to leave their produce to rot on the farm or on the excess marketplace. Food consumption forecasting is also difficult because supply and demand each other. So we are making a platform for continous demand to supply.</p>
                  <div className={classes.downBtn}>
                <Button variant="outlined" href="https://play.google.com/store/apps" component={Link} style={{ textDecoration: 'none' }}>Download</Button>
                </div>
          </div>
        </Grid>
            </Grid>
        </div>
      </Box>

      </React.Fragment>
    
    );
  }