import { Button, TextField } from '@mui/material'
import React from 'react'


const Login = () => {
  return (
      <div align="center">
              <table align="center">
                  <td>
                  <h1 align="center">login</h1>
                      <br/>
                  <TextField label='name' variant='outlined' />
                      <br/>     
                  <TextField label='name' variant='outlined' />
                      <br/>
                  <Button variant="outlined" >submit</Button>
                  </td>
              </table>
      </div>
  )
}

export default Login