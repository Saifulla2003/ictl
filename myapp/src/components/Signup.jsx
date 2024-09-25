import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
     
      <table  align='center'>
        <td>
          
      <h1>Signup</h1>
      <TextField label='name' variant='outlined' />
      <br/><br/>
     <TextField label='email' variant='outlined' />
      <br/>
          <Button variant="contained" >submit</Button>
        </td>
        </table>
    </div>
      )
}

export default Signup