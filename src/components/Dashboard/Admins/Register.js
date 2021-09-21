import {
  Button,
  Chip,
  Grid,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hooks-helper";
import FloatCard from "../../FloatCard";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import MailRoundedIcon from "@material-ui/icons/MailRounded";
import SnackBarAlert from "../../SnackBarAlert";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "stretch",
    },
  },
  lottie: {
    [theme.breakpoints.down("sm")]: {
      width: "200px !important",
    },
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    padding: 20,
    display: "contents",
  },
  submit: {
    boxShadow: "none",
    color: "white",
    backgroundColor: '#388e3c',
    borderRadius: 25,
    "&:hover": {
      backgroundColor: '#388e3c',
      color: "white",
      boxShadow: "none",
    },
  },
  cancel: {
    boxShadow: "none",
    color: "black",
    backgroundColor: "white",
    borderRadius: 25,
    "&:hover": {
      backgroundColor: "white",
      color: "black",
      boxShadow: "none",
    },
  },
  textField: {
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
    "& fieldset": {
      borderColor: '#388e3c',
    },
    "&:hover fieldset": {
      borderColor: "red !important",
    },
  },
  title: {
    marginTop: 10,
    fontWeight: 500,
    marginBottom: 5,
  },
  formGrid: {
    padding: 24,
  },
  actions: {
    marginTop: 20,
  },
  chip: {
    backgroundColor: "#87CEFA",
    height: 40,
    margin: 3,
    marginRight: 5,
    "&.MuiChip-root": {
      padding: 8,
    },
    "& span.MuiChip-label": {
      fontSize: 16,
    },
  },
}));

function Register() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');

  const [alertShow, setAlertShow] = useState(false);
  const [alertData, setAlertData] = useState({ severity: "", msg: "" });

  const RegisterAdmin = async (e) =>{
    e.preventDefault();
    // console.log(phone+fname+lname+password+email);
    console.log(localStorage.getItem('token'));
    // alert(SubmitData);
    var data = JSON.stringify({
      fname,
      lname,
      email,
      phone,
      password
    });
    
    var config = {
      method: 'post',
      url: 'https://grovi-backend.herokuapp.com/api/v1/admins/addNew',
      headers: { 
        'Authorization': `Bearer ${localStorage.getItem('token')}`, 
        'Content-Type': 'application/json',         
      },
      data : data
    };
  
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      if(response.data.status === "success"){
        alert("Admin Added Successfully");     
    }
    
    })
    .catch(function (error) {
      console.log(error);
      alert("Something Went Wrong");
    });
    
  }
  const displayAlert = () => {
    return (
      <SnackBarAlert
        open={alertShow}
        onClose={handleAlertClose}
        severity={alertData.severity}
        msg={alertData.msg}
      />
    );
  };
  const handleAlert = () => {
    setAlertShow(true);
  };
  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertShow(false);
  };

  const [formData, setForm] = useForm({
    name: "",
    email: "",
    nic: "",
    mobile: "",
  });


   const sendMessage = async (e) => {
     e.preventDefault();

    const newMessagerData = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      nic: formData.message,
      date: new Date(),
    };

  //   axios.post(`${BACKEND_URL}/contact/create`, newMessagerData).then((res) => {
  //     if (res.data.success) {
  //       setAlertData({
  //         severity: "success",
  //         msg: "Message has been sent successfully!",
  //       });
  //       handleAlert();
  //     } else {
  //       setAlertData({
  //         severity: "error",
  //         msg: "Failed to send message!",
  //       });
  //       handleAlert();
  //     }
  //   });
   };

  return (
    <Grid
      item
      container
      xs={12}
      spacing={3}
      direction="row"
      justify="space-between"
      alignItems="flex-start"
      className={classes.mainGrid}
    >
      <Grid item xs={12} className={classes.searchGrid}>
        <FloatCard>
          <Grid item container spacing={3} direction="row">
            <Grid item xs={12} lg={6}>
              <Grid item container spacing={3} direction="row">
                <Grid
                  container
                  spacing={3}
                  direction="row"
                  xs={12}
                  style={{ marginTop: 40 }}
                >
                </Grid>
                <Grid item xs={12}>
                  <img
                    src={process.env.PUBLIC_URL + '../assets/logo2.png'}
                    alt="admin image"
                    loading="lazy"
                    style={{ width: "70%", borderRadius:'20px', padding:'20px'}}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={5} style={{ padding: 24 }}>
              <Typography
                style={{
                  textAlign: "left",
                  marginTop: 24,
                  marginBottom: 16,
                  fontSize: 24,
                  fontWeight: 600,
                }}
              >
                Register Admin
              </Typography>
              <Typography
                style={{ textAlign: "left", marginTop: 16, marginBottom: 24 }}
              >
                Admin Can Access To The Grovi Dashboard
              </Typography>
              
                <Grid item container alignItems="center" spacing={3}>
                  <Grid item xs={12} align="left">
                    <TextField
                      fullWidth
                      label="First Name"
                      name="fname"
                      type="text"
                      size="small"
                      variant="outlined"
                      // value={formData.name}
                      // onChange={setForm}
                      value={fname}
                      className={classes.textField}
                      required
                      onChange={(e)=>{
                        setfName(e.target.value)
                      }}    
                    />
                  </Grid>
                  <Grid item xs={12} align="left">
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lname"
                      type="text"
                      size="small"
                      variant="outlined"
                      // value={formData.name}
                      // onChange={setForm}
                      value={lname}
                      className={classes.textField}
                      required
                      onChange={(e)=>{
                        setlName(e.target.value)
                      }}    
                    />
                  </Grid>
                  <Grid item xs={12} align="left">
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      size="small"
                      variant="outlined"
                      // value={formData.email}
                      value={email}
                      // onChange={setForm}
                      className={classes.textField}
                      required
                      onChange={(e)=>{
                        setEmail(e.target.value)
                      }} 
                    />
                  </Grid>
                  <Grid item xs={12} align="left">
                    <TextField
                      label="Mobile"
                      name="phone"
                      // value={formData.mobile}
                      // onChange={setForm}
                      value={phone}
                      variant="outlined"
                      className={classes.textField}
                      size="small"
                      fullWidth
                      required
                      onChange={(e)=>{
                        setPhone(e.target.value)
                      }} 
                      // InputProps={{
                      //   startAdornment: (
                      //     <InputAdornment position="start">+94</InputAdornment>
                      //   ),
                      // }}
                    />
                  </Grid>
                  {/* <Grid item xs={12} align="left">
                    <TextField
                      fullWidth
                      label="NIC"
                      name="nic"
                      type="text"
                      size="small"
                      variant="outlined"
                      // value={formData.nic}
                      value={nic}
                      // onChange={setForm}
                      className={classes.textField}
                      required
                      onChange={(e)=>{
                        setNic(e.target.value)
                      }} 
                    />
                  </Grid> */}
                  <Grid item xs={12} align="left">
                    <TextField
                      fullWidth
                      label="Password"
                      name="Password"
                      type="Password"
                      size="small"
                      variant="outlined"
                      // value={formData.nic}
                      value={password}
                      // onChange={setForm}
                      className={classes.textField}
                      required
                      onChange={(e)=>{
                        setPassword(e.target.value)
                      }} 
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  md={6}
                  className={classes.actions}
                  spacing={2}
                >
                  <Grid item>
                    <Button fullWidth type="submit" className={classes.submit} onClick={RegisterAdmin}>
                      Save
                    </Button>
                  </Grid>
                </Grid>
              
            </Grid>
          </Grid>
        </FloatCard>
      </Grid>
      {displayAlert()}
    </Grid>
  );
}

export default Register;
