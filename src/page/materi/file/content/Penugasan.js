import React from 'react'
import Penugasan from '../img/Penugasan.png'
import HasilPenugasan from '../img/HasilProgramPenugasan.png'
import { Box, Typography } from '@mui/material'
import { Editor } from '@monaco-editor/react'

export default function ContentPenugasan() {
    return (
        <>
            <Typography variant='h5' gutterBottom><b>2. Operator Penugasan</b></Typography>
                        <Box sx={{marginLeft: 4}}>
                        Operator penugasan (Assignment Operator) merupakan operator untuk 
                        meberikan tugas pada variabel. Biasanya untuk mengisi nilai.
                            <br/><br/> Contoh Operator Penugasan :
                            <br/>
                            <Box height="80vh" width="80vh">
                                <img alt='Penugasan' src={Penugasan} />
                            </Box>
                            <br/><br/> Contoh Program serta Hasil Penugasan :
                            <br/>
                            <Editor
                                defaultLanguage='cpp'
                                height='40vh'
                                theme='vs-dark'
                                defaultValue='#include <iostream>
                                            using namespace std;
                                            
                                            int main() {
                                                int a, b;

                                                //Pengisian nilai dengan operator =
                                                a = 5;
                                                b = 10;

                                                //Pengisian sekaligus Penambahan
                                                b += a; //ini sama seperti b = b + a
                                                cout << " Hasil b += a adalah " << b << endl;

                                                //Pengisian sekaligus Pengurangan
                                                b -= a; //ini sama seperti b = b - a
                                                cout << " Hasil b -= a adalah " << b << endl;

                                                //Pengisian sekaligus Perkalian
                                                b *= a; //ini sama seperti b = b * a
                                                cout << " Hasil b *= a adalah " << b << endl;

                                                //Pengisian sekaligus Pembagian
                                                b /= a; //ini sama seperti b = b / a
                                                cout << " Hasil b /= a adalah " << b << endl;

                                                //Pengisian sekaligus Sisa Bagi
                                                b %= a; //ini sama seperti b = b % a
                                                cout << " Hasil b %= a adalah " << b << endl;
                                                return 0;
                                            }'
                            />
                            <br/>
                            <Box height="40vh" width="80vh">
                                <img alt='HasilPenugasan' src={HasilPenugasan} />
                            </Box>
                            <br/><br/>
                            Pada box editor sebelumnya , variabel b kita isi ulang dengan operator penugasan.
                            <br/>
                            <b>Contoh Operasi : <br/>
                                b += a <br/>
                                Sama artinya dengan operasi: <br/>
                                b = b + a <br/><br/>
                            </b>
                            Artinya kita akan mengisi ulang nilai untuk b dengan nilai b sebelumnya ditambah dengan nilai a.
                        </Box>
        </>
    )
}
