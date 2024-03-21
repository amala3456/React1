
import React from 'react'
import TextField from '@mui/material/TextField';
import '../Style/form.css'
import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import form from '../Images/form.jpg';
import Layout from '../Layout/Layout'

const Form = () => {
  return (
    <Layout>
    <Box className='bdy' style={{backgroundImage:`url(${form})`}}>
<div className='card1'>
<Typography sx={{ fontSize: 20 ,textAlign:'center'}} color="white" gutterBottom>
        EMPLOYEE FORM
        </Typography>

<Card sx={{ minWidth: 5,backgroundColor:'pink'}}>
      <CardContent>
        <div className='auck'>
  <TextField id="filled-basic" label="Name" variant="filled" />
<br /><br />
<TextField id="filled-basic" label="Salary" variant="filled" />
<br /><br />
<TextField id="filled-basic" label="Location" variant="filled" />
<br /><br />
<TextField id="filled-basic" label="Destination" variant="filled" />
<br />
</div>
      </CardContent>
      </Card>

  </div>
  </Box>
  </Layout>
  )
}

export default Form