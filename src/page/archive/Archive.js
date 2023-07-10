import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { Card, CardContent, CardHeader, Container, Divider, Grid, Typography } from '@mui/material'
import { theme } from '../../utils/ThemeProvider'
import { SafetyDividerTwoTone } from '@mui/icons-material'
import { Archivefilecard } from './Archivefilecard'
import StickyHeadTable from '../../components/Table/StickyHeadTable'
import TopAppBar from '../../components/Navbar/TopAppBar'
import BottomAppBar from '../../components/Navbar/BottomAppBar'

export default function Archive() {
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
          <Grid container spacing={5} alignItems="flex-end" >
            {Archivefilecard.map((item,index) => {
              return (
                <Grid item key={index} lg={4} md={4} sm={4} xs={12}>
                  <Card sx={{fontFamily: "initial"}}>
                    <CardHeader
                      title={item.title}
                    />
                    <CardContent
                      content={item.content}
                    >
                      {item.description}
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <Container component={"main"} maxWidth="md" sx={{margin: 2}}>
          <Typography align='center' variant='h4' sx={{color: "white", fontFamily: "serif"}} gutterBottom>
            <SafetyDividerTwoTone sx={{fontSize: 50}}/> File Assignment Archive.
          </Typography>
        </Container>
        <Container component={'main'} maxWidth="md" sx={{margin: 2}}>
          <StickyHeadTable/>
        </Container>
      </div>
      <BottomAppBar/>
    </ThemeProvider>
  )
}
