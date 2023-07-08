import { Editor } from '@monaco-editor/react'
import { Box, Typography } from '@mui/material'
import React from 'react'

export default function TipeData() {
    return (
        <>
            <Typography variant='h4' fontFamily="serif">
                Materi C++ - Variabel & Tipe Data.
            </Typography>
            <Typography variant='h7' fontStyle="italic" color="gray" gutterBottom>
                Date of Post Sample
            </Typography>
            <br />
            <br />
            <Typography variant='h6' align='justify'>
                <Box sx={{marginLeft: 4}}>
                    <Typography variant='h4' gutterBottom>1. Apa itu Variabel? </Typography>
                    <Box sx={{marginLeft: 4}}>
                        Variabel digunakan untuk menyimpan informasi yang akan di 
                        referensikan dan dimanipulasi dalam program computer. 
                        Mereka juga menyediakan cara pelabelan data dengan nama deskriptif, 
                        sehingga program dapat dipahami lebih jelas oleh pembaca dan diri kita sendiri. 
                        Akan sangat membantu untuk menganggap variabel sebagai wadah yang menampung / menyimpan informasi.
                        <br/><br/>Contoh Sintax dasar :
                    <br/>
                    <Editor 
                    defaultLanguage='cpp' 
                    height='15vh'
                    theme='vs-dark'
                    defaultValue='string nama = “isi_string”;
                                string = Tipe data,
                                nama = Variabel,
                                “isi_string” = Nilai.'
                    />
                    </Box>
                    <br/>
                </Box>
            </Typography>
            <Typography variant='h6' align='justify'>
                <Box sx={{marginLeft: 4}}>
                    <Typography variant='h4' gutterBottom>2. Apa itu Tipe Data ?</Typography>
                    <Box sx={{marginLeft: 4}}>
                        <b>Tipe Data</b> adalah sebuah pengklasifikasian data berdasarkan jenis data tersebut. 
                        Tipe data dibutuhkan agar compiler dapat mengetahui bagaimana sebuah data akan 
                        digunakan untuk mengembangkan sebuah program, ada beberapa tipe data yang akan dipelajari. 
                        Diantaranya adalah : <b>Character, String, Array, dan Booleans</b>.
                        <br/><br/><b>Jenis-Jenis Tipe Data :</b><br/><br/>

                        <Typography variant='h5' gutterBottom><b>A. Integer</b></Typography>
                            <Box sx={{marginLeft: 4}}>
                                Tipe bilangan bulat (Integer) adalah tipe data numerik yang biasa digunakan 
                                apabila bertemu dengan bilangan bulat, seperti 1, 27, 100 dll. 
                                Bilangan ini juga mengenal nilai positif dan nilai negative. 
                                Tipe yang sering digunakan adalah “int” atau integer. 
                                Tipe “byte” dan “short” hanya digunakan pada aplikasi khusus 
                                yang berkaitan dengan memori. Sedangkan tipe “long” sangat jarang 
                                digunakan karena dirasa tidak memerlukan bilangan yang berkapasitas besar seperti tipe data long.
                                <br/>Contohnya Tipe data Integer : <b>int, short int, long int, unsigned int</b>.<br/><br/>
                            </Box>
                        
                        <Typography variant='h5' gutterBottom><b>B. Floating Point</b></Typography>
                            <Box sx={{marginLeft: 4}}>
                                Tipe bilangan pecahan atau floating point adalah bilangan yang menangani bilangan decimal 
                                atau perhitungan secara mendetail. Karena kemampuannya, float point berbanding terbalik dengan integer. 
                                Terdapat dua tipe data bilangan pecahan yaitu <b>Float dan Double</b>. 
                                Tipe float digunakan untuk menandai nilai yang presisi seperti ketelitian tunggal dan pastinya memakan 
                                ruang penyimpanan yang lebih kecil dari tipe double, dimana tipe double memberikan kemampuan hitung 
                                matematis secara lebih cepat dari tipe float. <br/><br/>
                            </Box>
                        
                        <Typography variant='h5' gutterBottom><b>C. Character</b></Typography>
                            <Box sx={{marginLeft: 4}}>
                                Tipe data karakter tunggal yang biasanya di definisikan dengan tanda petik ( ' ) 
                                diawal dan diakhir karakternya. Tipe ini mengikuti aturan “unicode” sehingga 
                                bilangan harus diawali kode “/u”. tapi juga biasa menggunakan bilangan 
                                heksadesimal 0000 sampai FFFF.<br/>
                                Contoh sintax dasarnya : <b>char value = 'a';</b><br/><br/>
                            </Box>

                        <Typography variant='h5' gutterBottom><b>D. Booleans</b></Typography>
                            <Box sx={{marginLeft: 4}}>
                                Tipe data Boolean merupakan tipe yang memiliki dua nilai yaitu benar(true) dan salah(false). 
                                Nilai yang digunakan pada tipe ini sangat penting dalam mengambil keputusan suatu kejadian 
                                tertentu.
                                <br/>Contoh sintax dasarnya : <b>boolean value = true;</b>
                            </Box>
                    </Box>
                </Box>
            </Typography>
            </>
    )
}
