import { Container, ThemeProvider, Divider, Typography } from '@mui/material'
import React from 'react'
import TopAppBar from '../../components/Navbar/TopAppBar'
import { theme } from "../../utils/ThemeProvider";
import MateriContent from './MateriContent';
import BottomAppBar from '../../components/Navbar/BottomAppBar';

export default function Materi() {
    return (
        <ThemeProvider theme={theme}>
            <TopAppBar/>
            <div className='content'>
            <Container component={"main"} maxWidth="lg"  sx={{ pt: 5, pb: 6, alignItems: "center" }}>
                <Typography align='center' variant='h3' sx={{ color:"white", fontStyle: "inherit", fontFamily: "initial", fontWeight: 30}} gutterBottom>
                    Materi's Page 
                    </Typography>
                    <Typography align='center' variant='h6' sx={{color: "white", fontFamily: "revert"}} gutterBottom>
                    {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                    }
                </Typography>
                <br/>
                <Divider />
            </Container>
            <Container component={"main"} maxWidth="lg" sx={{margin: 2}}>
                <MateriContent
                    item1 = "Materi Satu"
                    item2 = "Materi Dua"
                    item3 = "Materi Tiga"
                    item4 = "Materi Empat"
                    item5 = "Materi Lima"
                />
            </Container>
            </div>
            <BottomAppBar/>
        </ThemeProvider>
    )
}
