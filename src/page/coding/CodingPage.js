import { ThemeProvider } from '@emotion/react'
import React from 'react'
import TopAppBar from '../../components/Navbar/TopAppBar'
import { Box, Container, Divider, Paper, Typography } from '@mui/material'
import { theme } from '../../utils/ThemeProvider'
import BottomAppBar from '../../components/Navbar/BottomAppBar'
import EditorCode from './editor/EditorCode'
import ListCodes from './ListCodes'

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
          "Create an exciting and enjoyable code, everything is in your hands."
          }
        </Typography>
      </Container>
      <Container component={"main"} maxWidth="lg" sx={{ margin: 2 }}>
        <EditorCode/>
      </Container>
      <Container component={"main"} maxWidth="md">
        <Paper sx={{ backgroundColor:'darkgrey' }}>
          <Typography variant='h4' sx={{ color:'black', margin: 2 }}  fontStyle={'normal'}>
            <strong>The File C++ Code.</strong>
          </Typography>
          <Divider sx={{margin: 2}}/>
          <Box margin={2}>
            <ListCodes/>
          </Box>
        </Paper>
      </Container>
      </div>
      <BottomAppBar/>
    </ThemeProvider>
  )
}
