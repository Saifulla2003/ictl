import React, { useState } from 'react'
import { Button, Typography } from '@mui/material'

const Counter = () => {

  var [fname, setfname] = useState(0)

  const Clickadd = () => {
     setfname(fname+1)
  
  }
  const Clicksub = () => {
   setfname(fname-1)
  
  }

   
  return (
    <div>
      <table align='center'>
      Counter
    
      <Typography> <h1>counter</h1> <br /> {fname}</Typography>
      <Button id="ab" variant='outlined' onClick={Clickadd}>+</Button> 
      <Button id="a" variant='outlined' onClick={Clicksub}>-</Button>
     
      </table>
    </div>
  )
}

export default Counter