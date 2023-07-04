import { Container, Typography } from '@mui/material'
import React from 'react'

export default function SampleAssignment() {
  return (
    <Container>
      <br/>
      <Typography variant='h4' fontFamily="serif">
                Sample Assignment's.
            </Typography>
            <Typography variant='h7' fontStyle="italic" color="gray" gutterBottom>
                Date of Post Sample
            </Typography>
            <br />
            <br />
            <Typography variant='h6' align='justify' fontFamily="revert" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed at dui ut nisi dapibus aliquam. Donec convallis orci nec risus scelerisque, 
                et efficitur augue lobortis. 
                Mauris mattis diam a quam euismod, rutrum aliquam felis blandit. 
                Nam nunc enim, cursus vel quam eu, pretium convallis diam. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut maximus nisl metus, ac commodo libero semper sit amet.
            </Typography>
      </Container>
  )
}
