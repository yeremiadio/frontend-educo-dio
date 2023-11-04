import React, {useEffect, useState} from 'react'; 
import axios from 'axios';
import { Button, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Download } from '@mui/icons-material';


const TabelAssignments = () => {
    const [data, setData] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8080/api/getassignments')
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.error('Error fetching data :', error);
        });
    }, []);

    const handleDownload = () => {
        axios.get('http://localhost:8080/download', { responseType: 'blob' })
        .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'data_assignments.xlsx';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);

            console.log('Download Data success:', response);
        });
    };

    return (
        <div>
            <TableContainer component={Paper} style={{ backgroundColor: 'darkgrey', borderBlockWidth: 10 }}>
                <Button variant='text' onClick={handleDownload} sx={{ color: 'white', align: 'right' }}><Download/></Button>
                <Typography align='center' variant='h3' fontFamily={'fantasy'} gutterBottom>
                    <strong>Assignment's C++</strong> 
                </Typography>
                <Divider/>
                {data && data.length > 0 ? (
                    <Table stickyHeader aria-label='sticky table' >
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'><strong>Score</strong></TableCell>
                                <TableCell align='center'><strong>Name</strong></TableCell>
                                <TableCell align='center'><strong>Class</strong></TableCell>
                                <TableCell align='center'><strong>Atd. Number</strong></TableCell>
                                <TableCell align='center'><strong>Assignment's</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {Object.values(row).map((cell, cellIndex) => (
                                        <TableCell key={cellIndex} align='center'>
                                            {cell}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ):(
                    <Typography align='center' variant='h4'>404 Not Found.</Typography>
                )}
            </TableContainer>
            
        </div>
    );
};

export default TabelAssignments