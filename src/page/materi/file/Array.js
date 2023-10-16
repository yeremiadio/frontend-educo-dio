import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Array() {
    return (
        <>
            <Typography variant='h4' fontFamily="serif">
                Materi C++ - Array.
            </Typography>
            <Typography variant='h7' fontStyle="italic" color="gray" gutterBottom>
                Date of Post Sample
            </Typography>
            <br />
            <br />
            <Typography variant='h6' align='justify'>
                <Typography variant='h4' gutterBottom># Definisi Array</Typography>
                <Box sx={{marginLeft: 4}}>
                    Sekelompok data yang mendeskripsikan sesuatu yang sejenis dan 
                    disimpan ke dalam variabel dengan nama yang sama. Kumpulan data 
                    yang setiap elemen datanya bertipe sama.<br/><br/>
                    Ada dua macam array yaitu :<br/>
                    a. Array satu dimensi :<br/>
                    <Box sx={{marginLeft: 2}}>
                        - Hanya mempunyai satu baris penggambaran atau satu kategori data.<br/>
                        - Contoh : data guru rpl, data peserta ujian.<br/>
                    </Box>
                    b. Array multi-dimensi :<br/>
                    <Box sx={{marginLeft: 2}}>
                        - Mempunyai karakteristik penggambaran lebih dari satu baris atau kategori.<br/>
                        - Dibuat kolom dan baris.<br/>
                        - Contoh : data siswa rpl bisa dikategorikan tingkatan dan kelasnya.<br/>
                    </Box>
                    <br/><br/>
                    Antara satu variabel dengan variabel lain di dalam array dibedakan berdasarkan 
                    subscript atau dapat disebut juga indeks. Dalam mengolah array, kita dapat 
                    memanipulasi deretan objek tanpa harus menamakan masing-masing objek berbeda.<br/><br/>
                    <Typography variant='h5' gutterBottom><b>1. Array Berdimensi.</b></Typography>
                    <Box sx={{marginLeft: 4}}>
                        - Jika nama array adalah a, maka a[0] nama elemen yang memiliki posisi 0, san a[1] memiliki posisi 1.<br/>
                        - Jika array memiliki elemen n buah, maka nama elemen masing-masing adalah a[0],a[1],a[2],...,a[n-1].<br/>
                        - Indeks array di C/C++ selalu dimulai dari nol.<br/><br/>
                        Bentuk Umumnya : <br/>
                        Identifier nama[ukuran] <br/><br/>
                        - Identifier : tipe dari array (char, int, float, dsb).<br/>
                        - nama : berdasar aturan C.<br/>
                        - ukuran : tempat yang dipesan untuk array tersebut.<br/><br/>
                        <b>Contoh : <br/>
                        Char Nama[12];<br/>
                        float Grade[100];<br/>
                        double Angle[360];
                        </b>
                    </Box>
                    <br/><br/>
                    <Typography variant='h5' gutterBottom><b>2. Array Multidimensi.</b></Typography>
                    <Box sx={{marginLeft: 4}}>
                        Array dari array berdimensi satu. Array dimana masing-masing anggotanya juga array. 
                        Array dua dimensi terdiri dari baris dan kolom. Baris menggambarkan suatu kategori 
                        dimana datanya mempunyai kategori lain yang digambarkan pada kolom.<br/>
                        <b>Bemtuk Umum :</b><br/>
                        Identifier nama[ukuran1][ukuran2]<br/><br/>
                        - Identifier adalah tipe dari array apakah karakter, integer, real, dsb.<br/>
                        - nama berdasar aturan C.<br/>
                        - ukuran1 menunjukkan ukuran baris yang dipesan.<br/>
                        - ukuran2 merupakan ukuran kolom dari array tersebut.
                    </Box>
                    <br/><br/>
                    <Typography variant='h5' gutterBottom><b>3. Array 2 Dimensi.</b></Typography>
                    <Box sx={{marginLeft: 4}}>
                        <b>Array dua Dimensi</b> adalah sebutan untuk array yang penomoran index-nya
                        menggunakan 2 buah angka. Analogi yang sering dipakai seperti titik koordinat
                        dalam diagram kartesius.<br/>
                        <b>Diagram Kartesius</b> merupakan diagram yang biasa kita pakai untuk membuat grafik.
                        Disini terdapat sumbu X dan sumbu Y. Sebuah titik dalam diagram kartesius ini harus disebut
                        secara berpasangan, seperti (2,3) atau (-3,1).<br/>
                        <b>Identifier nama[ukuran1][ukuran2] = {'{'} elemen1,elemen2,...,elemen{'}'};</b><br/><br/>
                        Contoh : <br/>
                        <b>float bil[2][3] = {'{'}1,2,3,4,5,6{'}'}<br/>
                        elemen bil[0][0] = 1, elemen bil [0][1] = 2, <br/>
                        elemen bil[0][2] = 3, elemen bil [1][0] = 4, <br/>
                        elemen bil[1][1] = 5, elemen bil [1][2] = 6 <br/>
                        </b>
                        <br/><br/>
                        Cara penulisan inisialisasi : <br/>
                        <b>float Distance[2][4] = {'{'} 44.14, 20.52,  96.08, 48.78, 6.28,  68.04, 64.55, 6234.12 {'}'};</b>
                        <br/>Atau<br/>
                        <b>float Distance[2][4] = {'{'} {'{'} 44.14, 20.52,  96.08,  48.78, {'}'},{'{'} 6.28,  68.04, 64.55, 6234.12 {'}'} {'}'}</b>
                    </Box>
                </Box>
            </Typography>
        </>
    )
}
