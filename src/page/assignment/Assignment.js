import { ThemeProvider } from '@emotion/react'
import React from 'react'
import TopAppBar from '../../components/Navbar/TopAppBar'
import { Container, Divider, Typography } from '@mui/material' 
import { theme } from '../../utils/ThemeProvider'
import BottomAppBar from '../../components/Navbar/BottomAppBar'
import AssignmentContent from './AssignmentContent'

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
      <Divider/>
      <Container component={"main"} maxWidth="lg" sx={{margin: 2}}>
        <AssignmentContent
          item1 = "Variabel dan Tipe Data"
          item2 = "Operator"
          item3 = "Perulangan"
          item4 = "Percabangan"
          item5 = "Array"
        />
      </Container>
      </div>
      <BottomAppBar/>
    </ThemeProvider>
  )
}
