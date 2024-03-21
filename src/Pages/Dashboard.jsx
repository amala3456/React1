
import Layout from '../Layout/Layout'
import React, { useEffect,useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Image1 from '../Images/Image1.jpg'

const Dashboard = () =>{

  const[dataset,setData]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
      setData(res.data);
    })
  },[])
  return (
    <Layout>
        <TableContainer component={Paper} style={{backgroundColor:'pink'}}>
      <Table sx={{ width:'300', alignContent:'center' }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'green'}}>
          <TableCell >ID</TableCell>
            <TableCell align='right'>First Name</TableCell>
            <TableCell align='right'>Email</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {dataset.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
                </TableCell>
              < TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</Layout>    
  )
          }
export default Dashboard