import { Button, Table, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var [fname, setfname] = useState()
    var [a, seta] = useState()
    
    var handleinput = (e) => {
        setfname(e.target.value)
        }
   
    var Click = () => {
            seta(fname)
    
    }
    
  return (
      <div>
          <Table border="4px" align="center">
              <Typography> <h1>Statebasics</h1> <br /> {a}</Typography>
              <TextField label="username" color="black" focused onChange={handleinput} />
                  <Button id="a" variant='outlined' onClick={Click}>submit</Button>
          </Table>
      </div>
  )
}

export default Statebasics