import React , {useContext, useEffect, useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import axios from 'axios';

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

export default function Deposits(props) {

  useEffect(() => {
    getIncome();
  }, []);

  let [responseData, setResponseData] = React.useState('')
  
  const getIncome = async () => {
  try {
    const response = await axios.get(`https://grovi-backend.herokuapp.com/api/v1/bookings/checkout-session/1/4`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    console.log(response);
    setResponseData(response.data.data);
  } catch (error) {
    console.error(error);
  }
};  

  const classes = useStyles();
  const {income,order} = props;
  return (
    <React.Fragment>
      
      <div className={classes.fontStyle}>Order Income</div>
      <Typography component="p" variant="h4">
        Rs. 18000
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        <TodayDate />
      </Typography>
      <div className={classes.fontStyle}>Order Count</div>
      <Typography component="p" variant="h4">
        {order}
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