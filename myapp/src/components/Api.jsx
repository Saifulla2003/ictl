import React, { useState } from 'react'
import { TableContainer,Table,TableHead,TableRow,TableCell} from '@mui/material'
import axios from 'axios'
const Api = () => {
    var [user, setuser] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response.data)
            setuser(response.data)
        })
  return (
      <div>
          <TableContainer >
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>API</TableCell>
                          <TableCell>apl</TableCell>

                          <TableCell>bpl</TableCell>
                          <TableCell>isl</TableCell>

                          <TableCell>fifa</TableCell>
                          <TableCell>wisdom</TableCell>
                      </TableRow>
                  </TableHead>
                  
                  {user.map((val) => {
                      return (
                          <TableRow>
                              <TableCell>{val.address.city}</TableCell>
                              <TableCell>{val.address.city}</TableCell>   
                              <TableCell>{val.address.city}</TableCell>
                              <TableCell>{val.address.city}</TableCell>   
                              <TableCell>{val.name}</TableCell>
                              <TableCell>{val.address.city}</TableCell>   
                          </TableRow>
                      )
                  })
                  }
                    
                     
                  
              </Table>
          </TableContainer>
        </div>
  )
}

export default Api