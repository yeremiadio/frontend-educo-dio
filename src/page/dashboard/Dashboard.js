import { Card, CardContent, CardHeader, CardMedia, Container, Divider, Grid, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import { theme } from "../../utils/ThemeProvider";
import { WavingHand } from '@mui/icons-material';
import TopAppBar from '../../components/Navbar/TopAppBar';
import { dataDashboard } from '../../utils/DataDashboard';
import BottomAppBar from '../../components/Navbar/BottomAppBar';
import TabelAssignments from '../../components/Table/TabelAssignments';

export default function Dashboard() {

  return (
    <ThemeProvider theme={theme}>
      <TopAppBar/>
      <div className='content'>
      <Container component={"main"} maxWidth="md" sx={{ pt: 5, pb: 6 }}>
        <Typography align='center' variant='h3' sx={{fontStyle: "inherit", fontFamily: "initial", fontWeight: 30}} gutterBottom>
          Hallo Codingers <WavingHand sx={{fontSize: 50}}/>
        </Typography>
        <Typography align='center' variant='h6' sx={{color: "white", fontFamily: "revert"}} gutterBottom>
          {
          "Welcome to Your Dashboard, How are you today?"
          }
        </Typography>
      </Container>
      <Divider component="animate" sx={{color: "white", fontSize: 10,}} />
      <Container component={"main"} maxWidth="md" sx={{margin: 2,}} >
        <Grid container spacing={5} alignItems="center">
          {dataDashboard.map((item, index) => {
            return (
              <Grid item key={index} lg={4} md={4} sm={4} xs={12}>
                <Card variant='outlined' >
                  <CardHeader
                    title={item.title}
                    titleTypographyProps={{ align: "center" }}
                    sx={{fontStyle: "initial", fontFamily: "monospace"}}
                  />
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent>
                  <Typography>{item.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Container component={"main"} maxWidth="md" sx={{margin: 2,}}>
          <TabelAssignments/>
      </Container>
      </div>
      <BottomAppBar/>
    </ThemeProvider>
  )
}
