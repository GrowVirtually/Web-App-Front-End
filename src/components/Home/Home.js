import React from 'react'
import Header from './Header';
import Middle from './Middle';
import { makeStyles } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import Team from './Team';
import Footer from '../Footer';

const useStyles = makeStyles((theme) => ({
    root: {
      maxHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '../assets/cab.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  }));

export default function Home() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        {/* <BackToTop/> */}
        <Header />
        <CssBaseline />
        <Middle />
        <Team/>
        <Footer/>
      </div>
    );
  }
