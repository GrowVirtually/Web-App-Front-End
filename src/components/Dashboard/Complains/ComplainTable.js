// import * as React from 'react';
// import { createTheme } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/styles';
// import { DataGrid } from '@mui/x-data-grid';
// import { randomPrice } from '@mui/x-data-grid-generator';

// function getThemePaletteMode(palette) {
//   return palette.type || palette.mode;
// }

// const defaultTheme = createTheme();

// const useStyles = makeStyles(
//   (theme) => {
//     const isDark = getThemePaletteMode(theme.palette) === 'dark';

//     return {
//       root: {
//         '& .MuiDataGrid-cell--editing': {
//           backgroundColor: 'rgb(255,215,115, 0.19)',
//           color: '#1a3e72',
//         },
//         '& .Mui-error': {
//           backgroundColor: `rgb(126,10,15, ${isDark ? 0 : 0.1})`,
//           color: theme.palette.error.main,
//         },
//       },
//     };
//   },
//   { defaultTheme },
// );

// const columns = [
//   { field: 'expense', headerName: 'Order ID', width: 160, editable: true},
//   {
//     field: 'price',
//     headerName: 'Price',
//     type: 'number',
//     width: 120,
//     editable: true,
//   },
//   { field: 'dueAt', headerName: 'Date', type: 'date', width: 160, editable: true },
//   {
//     field: 'isPaid',
//     headerName: 'Is Checked?',
//     type: 'boolean',
//     width: 180,
//     editable: true,
//   },
//   {
//     field: 'paidAt',
//     headerName: 'Paid at',
//     type: 'date',
//     width: 160,
//     editable: true,
//   },
// ];

// const rows = [
//   {
//     id: 1,
//     expense: 'Light',
//     price: randomPrice(0, 1000),
//     dueAt: new Date(2021, 6, 8),
//     isPaid: false,
//   },
//   {
//     id: 2,
//     expense: 'Rent',
//     price: randomPrice(0, 1000),
//     dueAt: new Date(2021, 7, 1),
//     isPaid: false,
//   },
//   {
//     id: 3,
//     expense: 'Car insurance',
//     price: randomPrice(0, 1000),
//     dueAt: new Date(2021, 7, 4),
//     isPaid: true,
//     paidAt: new Date(2021, 7, 2),
//   },
// ];

// export default function ComplainTable() {
//   const classes = useStyles();
//   const [editRowsModel, setEditRowsModel] = React.useState({});

//   const handleEditRowsModelChange = React.useCallback((newModel) => {
//     const updatedModel = { ...newModel };
//     Object.keys(updatedModel).forEach((id) => {
//       const hasError =
//         updatedModel[id].isPaid.value && !updatedModel[id].paidAt.value;
//       updatedModel[id].paidAt = { ...updatedModel[id].paidAt, error: hasError };
//     });
//     setEditRowsModel(updatedModel);
//   }, []);

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         className={classes.root}
//         rows={rows}
//         columns={columns}
//         editMode="row"
//         editRowsModel={editRowsModel}
//         onEditRowsModelChange={handleEditRowsModelChange}
//       />
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';

import axios from 'axios';
import { Alert, AlertTitle } from '@material-ui/lab';


// regex for email validation
const validateEmail = (email) => {
  const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
}


const ComplainTable = () => {

  const [user, setUser] = useState([]);
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  let columns = [
    { title: 'Rew ID', field: 'id' },
    { title: 'Consumer ID', field: 'consumerId' },
    { title: 'Review', field: 'content' },
    { title: 'Review Date', field: 'createdAt' },
    { title: 'Updated Date', field: 'updatedAt' },
  ]

  // let data = [
  //   { name: 'manish', username: 'traptrick', email: 'themk85@gmail.com', phone: '9999999999', website: 'https://github.com/traptrick' }
  // ]  

  useEffect(() => {
    axios.get(`https://grovi-backend.herokuapp.com/api/v1/admins/dashboard`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(res => {
        const users = res.data.data.reviews.rows;
        setUser(users);
        console.log(users);
      })
  }, [])



  //function for updating the existing row details
  const handleRowUpdate = (newData, oldData, resolve) => {
    //validating the data inputs
    let errorList = []
    if (newData.name === "") {
      errorList.push("Try Again, You didn't enter the name field")
    }
    if (newData.username === "") {
      errorList.push("Try Again, You didn't enter the Username field")
    }
    if (newData.email === "" || validateEmail(newData.email) === false) {
      errorList.push("Oops!!! Please enter a valid email")
    }
    if (newData.phone === "") {
      errorList.push("Try Again, Phone number field can't be blank")
    }
    if (newData.website === "") {
      errorList.push("Try Again, Enter website url before submitting")
    }

    if (errorList.length < 1) {
      axios.put(`https://jsonplaceholder.typicode.com/users/${newData.id}`, newData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then(response => {
          const updateUser = [...user];
          const index = oldData.tableData.id;
          updateUser[index] = newData;
          setUser([...updateUser]);
          resolve()
          setIserror(false)
          setErrorMessages([])
        })
        .catch(error => {
          setErrorMessages(["Update failed! Server error"])
          setIserror(true)
          resolve()

        })
    } else {
      setErrorMessages(errorList)
      setIserror(true)
      resolve()

    }
  }


  //function for deleting a row
  const handleRowDelete = (oldData, resolve) => {
    axios.delete(`https://grovi-backend.herokuapp.com/api/v1/admins/edit/${oldData.id}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => {
        const dataDelete = [...user];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setUser([...dataDelete]);
        resolve()
      })
      .catch(error => {
        setErrorMessages(["Delete failed! Server error"])
        setIserror(true)
        resolve()
      })
  }


  //function for adding a new row to the table
  const handleRowAdd = (newData, resolve) => {
    //validating the data inputs
    let errorList = []
    if (newData.name === "") {
      errorList.push("Try Again, You didn't enter the name field")
    }
    if (newData.username === "") {
      errorList.push("Try Again, You didn't enter the Username field")
    }
    if (newData.email === "" || validateEmail(newData.email) === false) {
      errorList.push("Oops!!! Please enter a valid email")
    }
    if (newData.phone === "") {
      errorList.push("Try Again, Phone number field can't be blank")
    }
    if (newData.website === "") {
      errorList.push("Try Again, Enter website url before submitting")
    }

    if (errorList.length < 1) {
      axios.post(`https://jsonplaceholder.typicode.com/users`, newData)
        .then(response => {
          let newUserdata = [...user];
          newUserdata.push(newData);
          setUser(newUserdata);
          resolve()
          setErrorMessages([])
          setIserror(false)
        })
        .catch(error => {
          setErrorMessages(["Cannot add data. Server error!"])
          setIserror(true)
          resolve()
        })
    } else {
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }
  }


  return (
    <div className="app">
      
      <MaterialTable
        title="Consumer Reviews"
        columns={columns}
        data={user}
        options={{
          headerStyle: { borderBottomColor: 'green', borderBottomWidth: '3px', fontFamily: 'verdana' },
          actionsColumnIndex: -2
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              // handleRowUpdate(newData, oldData, resolve);

            }),
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              // handleRowAdd(newData, resolve)
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              // handleRowDelete(oldData, resolve)
            }),
        }}
      />

      <div>
        {iserror &&
          <Alert severity="error">
            <AlertTitle>ERROR</AlertTitle>
            {errorMessages.map((msg, i) => {
              return <div key={i}>{msg}</div>
            })}
          </Alert>
        }
      </div>

    </div>
  );
}

export default ComplainTable;