import React, { useState } from 'react'
import { Grid} from '@mui/material'
import axios from 'axios'
import { Grid } from '@mui/material'
import { Grid } from '@mui/material'
import { Grid } from '@mui/material'
import { Grid } from '@mui/material'



const Pokemon = () => {
  var [user, setuser] = useState([])
  axios.get("https://dummyapi.online/api/pokemon")
    .then((response) => {
      console.log(response.data)
      setuser(response.data)
    })
  return (
    <div>
      <Grid>
        {user.map((val) => {
          return (
            <Grid item xs={8}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          )
               })}
        
      </Grid>
    </div>
  )
}
         
  


export default Pokemon