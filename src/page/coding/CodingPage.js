import { ThemeProvider } from '@emotion/react'
import React from 'react'
import TopAppBar from '../../components/Navbar/TopAppBar'
import { Container, Typography } from '@mui/material'
import { theme } from '../../utils/ThemeProvider'
import BottomAppBar from '../../components/Navbar/BottomAppBar'
import EditorCode from './editor/EditorCode'

export default function CodingPage() {
  return (
    <ThemeProvider theme={theme}>
      <TopAppBar/>
      <div className='content'>
      <Container component={"main"} maxWidth="md" sx={{ pt: 5, pb: 6 }}> 
        <Typography align='center' variant='h3' sx={{fontStyle: "inherit", fontFamily: "initial", fontWeight: 30}} gutterBottom>
          Coding Page
        </Typography>
        <Typography align='center' variant='h6' sx={{color: "white", fontFamily: "revert"}} gutterBottom>
          {
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          }
        </Typography>
      </Container>
      <Container component={"main"} maxWidth="lg" sx={{ margin: 2 }}>
        <EditorCode/>
      </Container>
      </div>
      <BottomAppBar/>
    </ThemeProvider>
  )
}
