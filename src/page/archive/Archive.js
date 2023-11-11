import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { Container, Divider, Typography } from '@mui/material'
import { theme } from '../../utils/ThemeProvider'
import { SafetyDividerTwoTone } from '@mui/icons-material'
import TopAppBar from '../../components/Navbar/TopAppBar'
import BottomAppBar from '../../components/Navbar/BottomAppBar'
import TabelAssignments from '../../components/Table/TabelAssignments'
import ListCodes from '../coding/ListCodes'
import { useState } from 'react'

export default function Archive() {
  const [selectedCodeId, setSelectedCodeId] = useState(null);

  const onCodeSelect = (codeId) => {
    setSelectedCodeId(codeId);
    console.log('Selected code ID :', codeId);
  };

  return (
    <ThemeProvider theme={theme}>
      <TopAppBar/>
      <div className='content'>
        <Container component={"main"} maxWidth="md" sx={{ pt: 5, pb: 6 }}>
          <Typography align='center' variant='h3' sx={{fontStyle: "inherit", fontFamily: "initial", fontWeight: 30}} gutterBottom>
            Archive's Page
          </Typography>
        </Container>
        <Divider/>
        <Container component={"main"} maxWidth="md" sx={{margin: 2}}>
          <Typography align='center' variant='h4' sx={{color: "white", fontFamily: "serif"}} gutterBottom>
            <SafetyDividerTwoTone sx={{fontSize: 50}}/> File Code Archive.
          </Typography>
        </Container>
        <Container component={"main"} maxWidth="md" sx={{margin: 2, marginBottom: 5}}>
            <ListCodes onCodeSelect={onCodeSelect} onDeleteCode={selectedCodeId}/>
        </Container>
        <Container component={"main"} maxWidth="md" sx={{margin: 2}}>
          <Typography align='center' variant='h4' sx={{color: "white", fontFamily: "serif"}} gutterBottom>
            <SafetyDividerTwoTone sx={{fontSize: 50}}/> File Assignment Archive.
          </Typography>
        </Container>
        <Container component={'main'} maxWidth="md" sx={{margin: 2}}>
          <TabelAssignments/>
        </Container>
      </div>
      <BottomAppBar/>
    </ThemeProvider>
  )
}
