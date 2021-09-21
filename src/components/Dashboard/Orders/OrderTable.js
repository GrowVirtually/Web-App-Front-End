import React, {useContext, useEffect, useState} from 'react';
import SearchBar from "material-ui-search-bar";
import { DataGrid } from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';
import axios from 'axios';


export default function OrderTable() {

  useEffect(() => {
   orderData();
  }, []);

  let [responseData, setResponseData] = React.useState('')
  
  const orderData = async () => {
  try {
    const response = await axios.get(`https://grovi-backend.herokuapp.com/api/v1/bookings/checkout-session/1/4`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    console.log(response.data.session);
    setResponseData(response.data.session);
  } catch (error) {
    console.error(error);
  }
};  


  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

const columns = [
  { field: 'name', headerName: 'Order Item', width: 180, editable: false },
  { field: 'age', headerName:  'Id', type: 'number', editable: false },
  {
    field: 'dateCreated',
    headerName: 'Ordered Date',
    type: 'date',
    width: 180,
    editable: false,
  },
  {
    field: 'lastLogin',
    headerName: 'Deliverd At',
    type: 'dateTime',
    width: 220,
    editable: false,
  },
  { field: 'Location', headerName: 'Location', width: 180, editable: false },
  { field: 'Seller', headerName: 'Seller', width: 180, editable: false },
  { field: 'Price', headerName: 'Price', width: 180, editable: false },
];


const rows = [
  {
    id: 1,
    name: randomTraderName(),
    age: '23',
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    Location: 'Galle',
    Seller:'abcd',
    Price:'200',
  },
  // {
  //   id: 2,
  //   name: randomTraderName(),
  //   age: 36,
  //   dateCreated: randomCreatedDate(),
  //   lastLogin: randomUpdatedDate(),
  //   Location: 'Galle',
  // },
  // {
  //   id: 3,
  //   name: randomTraderName(),
  //   age: 19,
  //   dateCreated: randomCreatedDate(),
  //   lastLogin: randomUpdatedDate(),
  //   Location: 'Galle',
  // },
  // {
  //   id: 4,
  //   name: randomTraderName(),
  //   age: 28,
  //   dateCreated: randomCreatedDate(),
  //   lastLogin: randomUpdatedDate(),
  //   Location: 'Galle',
  // },
  // {
  //   id: 5,
  //   name: randomTraderName(),
  //   age: 23,
  //   dateCreated: randomCreatedDate(),
  //   lastLogin: randomUpdatedDate(),
  //   Location: 'Galle',
  // },
  // {
  //   id: 6,
  //   name: randomTraderName(),
  //   age: 23,
  //   dateCreated: randomCreatedDate(),
  //   lastLogin: randomUpdatedDate(),
  //   Location: 'Galle',
  // },
  // {
  //   id: 7,
  //   name: randomTraderName(),
  //   age: 23,
  //   dateCreated: randomCreatedDate(),
  //   lastLogin: randomUpdatedDate(),
  //   Location: 'Galle',
  // },
  // {
  //   id: 8,
  //   name: randomTraderName(),
  //   age: 23,
  //   dateCreated: randomCreatedDate(),
  //   lastLogin: randomUpdatedDate(),
  //   Location: 'Galle',
  // },
  // {
  //   id: 9,
  //   name: randomTraderName(),
  //   age: 23,
  //   dateCreated: randomCreatedDate(),
  //   lastLogin: randomUpdatedDate(),
  //   Location: 'Galle',
  // },
];
