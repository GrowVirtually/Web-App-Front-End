import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React , {useContext, useEffect, useState}from 'react';
import Header from './../Header';
import BarChartIcon from '@material-ui/icons/BarChart';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import PageHeader from '../../PageHeader';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import ActiveExpireChart from './ActiveExpireChart';
import MostSellChart from './MostSellCategory';
import MostSellType from './MostSellType';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import Button from '@material-ui/core/Button';
import axios from 'axios';

function TodayDate(){
  return(      
      new Date().toLocaleDateString()     
  );
}

const name =TodayDate();

const ref = React.createRef();
const rootElement = document.getElementById("root");
ReactDOM.render(<ActiveExpireChart />, rootElement);
const options = {
    orientation: 'portrait',
    unit: 'in',
    format: [14,12]
};

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
    // '&:hover': {
    //     background: "#cfd8dc",
    //     transition: "background 1s, color 1s",
    //  },
  },
  fixedHeight: {
    height: '55vh',
  },
}));

export default function Reports() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  
  useEffect(() => {
    getData();
  }, []);

  const name = localStorage.getItem('Adminname');

  let [responseData, setResponseData] = React.useState('')
  const getData = async () => {
    try {
      const response = await axios.get(`https://grovi-backend.herokuapp.com/api/v1/admins/dashboard`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      console.log(response);
      // console.log(localStorage.getItem('token'));
      setResponseData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };  
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container} ref={ref}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>            
              <PageHeader
                title="Grovi Usage Reports "
                subTitle="Grovi Official"
                icon={<BarChartIcon  fontSize="large" />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>            
              <PageHeader
                title="Total No of Orders "
                subTitle={responseData.orderCount}
                icon={<ShowChartIcon  fontSize="large" />}
              />
            </Grid>            
          </Grid>
          {/* Daily Active Ads Vs Expire Ads Chart */}
          <Grid container className={classes.container}>
            <Grid itemxs={12} md={12} >              
              <Paper className={fixedHeightPaper}>
                <h2>Daily Active Gigs Vs Expire Gigs</h2>
                <ActiveExpireChart/>
              </Paper>        
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>            
              <PageHeader
                title="Fruit Gig Count "
                subTitle={responseData.fruitCount}
                icon={<BarChartIcon  fontSize="large" />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>            
              <PageHeader
                title="Vegitable Gig Count "
                subTitle={responseData.vegetableCount}
                icon={<BarChartIcon  fontSize="large" />}
              />
            </Grid>            
          </Grid>
          {/* Most Selling Category chart */}
          <Grid container className={classes.container}>
            <Grid itemxs={12} md={6} >              
              <Paper className={fixedHeightPaper}>
                <h2>Most Selling Category</h2>
                <MostSellChart
                fruit = {responseData.fruitCount}
                vegi = {responseData.vegetableCount}
                />
              </Paper>        
            </Grid>
            <Grid itemxs={12} md={6} >              
              <Paper className={fixedHeightPaper}>
                <h2>Most Selling Type</h2>
                <MostSellType/>
              </Paper>        
            </Grid>
          </Grid>
          <Pdf  targetRef={ref} filename={name} options={options} x={.5} y={.5} scale={0.8}>
        {({toPdf}) => (
            <Button variant="contained" onClick={toPdf} style={{backgroundColor:'#263238',color:'#E8E8E8'}}>Generate Report</Button>
        )}
          </Pdf >
          
        </Container>
      </main>
    </div>
  );
}