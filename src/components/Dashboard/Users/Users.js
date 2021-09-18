import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Header from './../Header';
import PeopleIcon from '@material-ui/icons/People';
import PageHeader from '../../PageHeader';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProfileCard from './ProfileCard';

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
  userCard:{
    backgroundColor: '#7986cb',
    borderRadius:'10px',
    textAlign:'center',
  },
}));

export default function Profile() {
  const classes = useStyles();
  
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
                title="See User Profile"
                subTitle="Grovi Official"
                icon={<PeopleIcon  fontSize="large" />}
              />
            </Grid>
          </Grid>
          <Grid>
            <Grid item xs={12} sm={6} className={classes.userCard}>
              <ProfileCard/>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}