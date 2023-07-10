import { ThemeProvider } from '@emotion/react'
import React from 'react'
import TopAppBar from '../../components/Navbar/TopAppBar'
import { Card, CardContent, CardHeader, Container, Divider, Grid, Typography } from '@mui/material'
import { theme } from '../../utils/ThemeProvider'
import { dataAssignmentCard } from './DataAssignmentCard'
import BottomAppBar from '../../components/Navbar/BottomAppBar'
import SampleAssignment from './SampleAssignment'

export default function Assignment() {
  return (
    <ThemeProvider theme={theme}>
      <TopAppBar/>
      <div className='content'>
      <Container component={"main"} maxWidth="md" sx={{ pt: 5, pb: 6 }}>
        <Typography align='center' variant='h3' sx={{fontStyle: "inherit", fontFamily: "initial", fontWeight: 30}} gutterBottom>
          Assignment's Page 
        </Typography>
        <Typography align='center' variant='h6' sx={{color: "white", fontFamily: "revert"}} gutterBottom>
          {
          "Complete your assignments with excellence and test the breadth of your knowledge."
          }
        </Typography>
      </Container>
      <Divider />
      <br/>
      <SampleAssignment/>
      <br/>
      <Divider/>
      <Container component={"main"} maxWidth="md" sx={{ pt: 5, pb: 6 }}>
        <Grid container spacing={5} alignItems="flex-end">
          {dataAssignmentCard.map((item,index) =>{
            return (
              <Grid item key={index} lg={4} md={4} sm={4} xs={12}>
                <Card>
                  <CardHeader
                    title={item.title}
                  />
                  <CardContent>
                    {item.description}
                  </CardContent>
                </Card>
              </Grid>
            );
          })
          }
        </Grid>
      </Container>
      </div>
      <BottomAppBar/>
    </ThemeProvider>
  )
}
