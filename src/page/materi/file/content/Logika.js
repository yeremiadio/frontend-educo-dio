import React from 'react'
import Logika from '../img/Logika.png'
import LogikaAnd from '../img/LogikaAND.png'
import HasilLogika from '../img/HasilProgramLogika.png'
import { Box, Typography } from '@mui/material'
import { Editor } from '@monaco-editor/react'

export default function ContentLogika() {
    return (
        <>
            <Typography variant='h5' gutterBottom><b>4. Operator Logika</b></Typography>
                <Box sx={{marginLeft: 4}}>
                    Operator Logika digunakan untuk membuat operasi logika. 
                    Sama halnya logika yang ada di mata pelajaran Matematika.
                    <br/><br/> Contoh Operator Logika : <br/>
                    <Box height='40vh' width='80vh'>
                        <img alt='Logika' src={Logika}/>
                    </Box>
                    <br/><br/>
                    Sebagai contoh Pernyataan :<br/>
                    <b>Pernyataan 1 : Joshua seorang Programmer.<br/>
                        Pernyataan 2 : Joshua menggunakan Linux.
                    </b><br/><br/>
                    Jika ditanya, apakah Joshua seoarang Programmer yang menggunakan Linux?<br/><br/>
                    Mari kita cek dulu Kebenarannya : <br/>
                    <b>Pernyataan 1 : Joshua seorang Programmer=<i>true</i><br/>
                        Pernyataan 2 : Joshua menggunakan Linux=<i>true</i><br/>
                        Pernyataan 1 && Pernyataan 2 = <i>true</i>
                    </b><br/><br/>
                    Coba kita cek lagi kebenaran untuk Logika AND : <br/>
                    <Box height='60vh' width='80vh'>
                        <img alt='LogikaAnd' src={LogikaAnd}/>
                    </Box>
                    <br/><br/>
                    Contoh Program dan Hasil Outputnya :<br/>
                    <Editor
                        defaultLanguage='cpp'
                        height='40vh'
                        theme='vs-dark'
                        defaultValue='#include <iostream>
                                    using namespace std;
                                    
                                    int main(){
                                        int a = 1; //true
                                        int b = 0; //false
                                        bool hasil;

                                        cout << "a = " << a <<endl;
                                        cout << "b = " << b <<endl;

                                        //Logika AND
                                        hasil = a && b;
                                        cout << "a && b = " << hasil <<endl;

                                        //Logika OR
                                        hasil = a || b;
                                        cout << "a || b = " << hasil <<endl;

                                        //Logika NOT
                                        cout << "!a = " << !a << endl;
                                        
                                        return 0;
                                    }'
                    /><br/>
                    <Box height='40vh' width='80vh'>
                        <img alt='HasilLogika' src={HasilLogika}/>
                    </Box>
                </Box>
        </>
    )
}
