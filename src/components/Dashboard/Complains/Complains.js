import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Header from './../Header';
import WarningIcon from '@material-ui/icons/Warning';
import PageHeader from '../../PageHeader';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ComplainTable from './ComplainTable';

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
}));

export default function Complains() {
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
                title="Check User Complains"
                subTitle="Grovi Official"
                icon={<WarningIcon fontSize="large" />}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
            <ComplainTable/>
            </Grid>
        </Grid>
        </Container>
      </main>
    </div>
  );
}