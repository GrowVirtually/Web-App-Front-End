import React, {useContext, useEffect, useState} from 'react';
import { Paper, Card, Typography, makeStyles, Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    minHeight: '25vh',
    backgroundColor: '#7986cb',
    borderRadius:'10px',
    color: theme.palette.text.secondary,
    '&:hover': {
        background: "#b0bec5",
        transition: "background 1s, color 1s",
     },
  },
  fontStyle:{
    fontFamily: 'Nunito',
    fontWeight:'600',
    fontSize:'1.2rem',
    color:'#1a237e',
  },
  pageIcon:{
    display:'inline-block',
    padding:theme.spacing(2),
    color:'#7986cb'
  },
  userdata:{
      textAlign:'left',
  }
}));


export default function ProfileCard(props) {
  const classes = useStyles();
  let [responseData, setResponseData] = React.useState('')

  useEffect(() => {
    getProfile();
  }, []);
  
  const getProfile = async () => {
    try {
      const response = await axios.get(`https://grovi-backend.herokuapp.com/api/v1/users/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }, 
      });
      console.log(response);
      // const udata = console.log(response.data.data.profile);
      sessionStorage.setItem('fname',response.data.data.profile.fname);
      sessionStorage.setItem('lname',response.data.data.profile.lname);
      setResponseData(response.data.data.profile);
      
    } catch (error) {
      console.error(error);
    }
  };
  console.log(props)
  return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
            <Card className={classes.pageIcon}>
                <AccountCircleIcon fontSize="large"/>
            </Card>
            <div className={classes.userdata}>
                <h3>User Name :{responseData.fname} {responseData.lname}</h3>
                <h3>Telephone :   {responseData.phone}</h3>
                <h3>DOB : {responseData.dob} </h3>
                <h3>NIC: {responseData.nic} </h3>
                <h3>E-Mail : {responseData.email} </h3>
                <h3>Gender: {responseData.gender} </h3>
                <h3>Status    : Admin</h3>
            </div>
        </Paper>
    </div>
  );
}


// _____________________________________________________________________________________________
// useEffect(() =>{
//   fetchData();
// },[]);

// let userId=userData.id;

// const fetchData = async () => {
//   const searchtext = {
//       "uId": userData.id
//   }
//   console.log(searchtext);

//   axios.post("http://localhost:5000/api/lgs/acd", searchtext, {
//       headers: {
//           "access-control-allow-origin": "*",
//           "Content-type": "application/json; charset=UTF-8"
//       }
//   }).then((response) => {
//       console.log(response.data);
//       SetMap(response.data);
//   })

// }

// {mapset.map(student=> (
//   <FormRow title={student.title} id={student.lgId} url={student.url} />
// ))}

// function FormRow (props){
//   var id = props.id;
//   //var link="/viewLg?id="+id;
//   var link="/viewLg";
//   var imglink=LG;

//   return (
//       <React.Fragment>
//           <Grid item xs={4}>
//               <Card className={classes.root}>

//                   <CardActionArea>
//                       <CardMedia
//                           component="img"
//                           height="100"
//                           src= {imglink}
//                       />
//                       <CardContent>
//                           <Typography gutterBottom variant="h5" component="h2">
//                               {props.title}
//                           </Typography>
//                       </CardContent>
//                   </CardActionArea>

//                   <CardActions className={classes.cardFooter}>
//                       <Link to={link} className={classes.nounderline}>
//                           <Button size="small"
//                                   className={classes.donateButton}
//                                   startIcon={<VideoCameraBackIcon/>}
//                           >
//                               Join Now
//                           </Button>
//                       </Link>

//                   </CardActions>

//               </Card>
//           </Grid>
//       </React.Fragment>
//   );
// }
