import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

function TodayDate(){
   return(
     <Typography color="textSecondary" variant="body1">
       {'On '}
       {new Date().toLocaleDateString()} 
       {/* {'from 1/'} {new Date().getMonth()}{'/'}{new Date().getFullYear()} */}
     </Typography>
   );
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  fontStyle:{
    fontFamily: 'Nunito',
    fontWeight:'600',
    fontSize:'1.5rem',
    color:'#1a237e',
  }
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      
      <div className={classes.fontStyle}>Order Income</div>
      <Typography component="p" variant="h4">
        Rs.3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        <TodayDate />
      </Typography>
      <div className={classes.fontStyle}>Order Count</div>
      <Typography component="p" variant="h4">
        25
      </Typography>
      {/* <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}
      
    </React.Fragment>
  );
}