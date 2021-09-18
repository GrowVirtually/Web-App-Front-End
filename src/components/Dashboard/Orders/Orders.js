import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Header from './../Header';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Summery from './Summery';
import OrderTable from './OrderTable';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PageHeader from '../../PageHeader';

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
  heading:{
    display: 'flex',
    fontFamily: 'Nunito',
    fontWeight:'600',
  },
}));

export default function Orders() {
  const classes = useStyles();
  console.log("blaa")

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>            
              <PageHeader
                title="Check Recent Orders And Order Summery"
                subTitle="Grovi Official"
                icon={<ShoppingCartIcon fontSize="large" />}
              />
            </Grid>
            <Grid item xs={12} sm={9}>
            <Paper className={classes.paper}>
                <OrderTable/>
            </Paper>
            </Grid>
          <Grid item xs={12} sm={3}>
            <Summery/>
          </Grid>
        </Grid>
        </Container>
      </main>
    </div>
  );
}