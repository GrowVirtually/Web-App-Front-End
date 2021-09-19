import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import {Link} from "react-router-dom";
import {fadeInDown} from 'react-animations';
import styled , {keyframes} from 'styled-components';
import Middle from './Middle';
import Fab from '@material-ui/core/Fab';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import Login from '../Login/Login';

const Bounce = styled.div`animation: 2s  ${keyframes`${fadeInDown}`} infinite`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor:  '#009900',
    '&:hover': {
      backgroundColor: '#009950',
    },
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex:'10',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#009900',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#fff',
    fontSize: '4rem',
  },
}));
export default function Header() {
  
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            G<span className={classes.colorText}>rovi</span>
          </h1>   
          <Link to="/login">       
          <IconButton>
            <ExitToAppRoundedIcon className={classes.icon} />
          </IconButton> 
          </Link>         
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            G<span className={classes.colorText}>rovi</span>
          </h1>
          <Scroll to="middle" smooth={true}>
            <IconButton>
                <Bounce><ExpandMoreIcon className={classes.goDown} /> </Bounce>
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
      <Scroll to="header" smooth={true}>
        <Fab color="primary" className={classes.fabGreen}>
          <UpIcon/>
        </Fab>  
      </Scroll>
    </div>
    
  );
}
