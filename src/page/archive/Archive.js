import { ThemeProvider } from '@emotion/react'
import React from 'react'
import TopAppBar from '../../components/Navbar/TopAppBar'
import { Container, Typography } from '@mui/material'
import { theme } from '../../utils/ThemeProvider'

export default function Archive() {
  return (
    <ThemeProvider theme={theme}>
      <TopAppBar/>
      <div className='content'>
      <Container component={"main"} maxWidth="md" sx={{ pt: 5, pb: 6 }}>
        <Typography align='center' variant='h3' sx={{fontStyle: "inherit", fontFamily: "initial", fontWeight: 30}} gutterBottom>
          Archive's Page
        </Typography>
        <Typography align='center' variant='h6' sx={{color: "gray", fontFamily: "revert"}} gutterBottom>
          {
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          }
        </Typography>
      </Container>
      </div>
    </ThemeProvider>
  )
}
