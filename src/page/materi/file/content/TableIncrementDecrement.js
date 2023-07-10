import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(operator, nama, keterangan) {
    return { operator, nama, keterangan };
}

const rows = [
    createData("var++", "Post Increment", "Nilai yang ada disebuah variable digunakan dahulu, kemudian baru ditambah dengan satu."),
    createData("++var","Pre Increment","Nilai yang ada di sebuah variable ditambah satu, kemudian baru digunakan."),
    createData("var--","Post Decrement","Nilai yang ada disebuah variable digunakan dahulu, barung dikurangi satu."),
    createData("--var","Pre Decrement","Nilai yang ada disebuah variable dikurangi satu, baru digunakan.")
];

export default function TableIncdec() {
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align='center'><b>Operator</b></TableCell>
                <TableCell align='center'><b>Nama</b></TableCell>
                <TableCell align='center'><b>Keterangan</b></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.operator}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row" align='center'>
                    {row.operator}
                </TableCell>
                <TableCell align="center">{row.nama}</TableCell>
                <TableCell align="justify">{row.keterangan}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}