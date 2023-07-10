import { Box, Typography } from '@mui/material'
import React from 'react' 
import TableIncdec from './content/TableIncrementDecrement'
import EkspresiPerulanganFor from './img/ExpresiPerulanganFor.png'
import FlowchartPerulanganFor from './img/FlowchartPerulanganFor.png'
import PerulanganContinue from './img/PerulanganContinue.png' 
import HasilBreak from './img/HasilBreak.png'
import ProgramGoto from './img/Programgoto.png'
import HasilProgramGoto from './img/HasilProgramgoto.png'
import { Editor } from '@monaco-editor/react'

export default function Perulangan() {
    return (
        <>
            <Typography variant='h4' fontFamily="serif">
                Materi C++ - Perulangan.
            </Typography>
            <Typography variant='h7' fontStyle="italic" color="gray" gutterBottom>
                Date of Post Sample
            </Typography>
            <br /><br />
            <Typography variant='h6' align='justify'>
                <Typography variant='h4' gutterBottom><b>1. Operator Increment dan decrement.</b></Typography>
                <Box sx={{marginLeft: 6}}>
                    Increment berarti menambahkan nilai variable dengan satu, sedangkan decrement berarti 
                    mengurangi nilai variable dengan satu. Operator ini nantinya banyak digunakan dalam 
                    teknik perulangan. Pra-increment ataupun pra-decrement memiliki arti bahwa suatu 
                    variable akan ditambahkan satu ataupun dikurangkan satu sebelum dipakai pada 
                    statement berikutnya. Sedangkan post-increment ataupun post decrement memiliki 
                    arti bahwa suatu variable akan dipakai terlebih dahulu baru ditambahkan satu 
                    ataupun dikurangkan satu.<br/><br/>
                    <TableIncdec/>
                </Box>
                <br/><br/>
                <Typography variant='h4' gutterBottom><b>2. Perulangan For.</b></Typography>
                <Box sx={{marginLeft: 6}}>
                    Format perulangan dengan perintah for adalah sebagai berikut :<br/><br/>
                    <b>for(ekspresi1; ekspresi2; ekspresi3)Pernyataan;</b><br/>
                    atau<br/>
                    <b>for(ekspresi1; ekspresi2; ekspresi3){'{'}<br/>
                        Pernyataan1;<br/>
                        Pernyataan2;<br/>
                        Pernyataan3;<br/>
                        {'}'}</b><br/>
                    Contoh: penggunaan increment pada perulangan.<br/>
                    <Editor
                        defaultLanguage='cpp'
                        height='40vh'
                        theme='vs-dark'
                        defaultValue='#include <stdio.h>
                                    using namespace std;
                                    
                                    int main(void) {
                                        int count;
                                        for(count = 1; count <= 10; ++count){
                                            cout << "\n%d" << count;
                                        }
                                        cout << "\n Selesai.. \n";
                                        return 0;
                                    }'
                    /><br/><br/>
                    Perhatikan penjelasan gambar ekspresi perulangan for dibawah ini :<br/>
                    <Box height='50vh' width='80vh'>
                        <img alt='EkspresiPerulanganFor' src={EkspresiPerulanganFor}/>
                    </Box>
                    <br/><br/>
                    Adapun flowchart dari logika program diatas,<br/>
                    <Box height='80vh' width='40vh'>
                        <img alt='FlowchartPerulanganFor' src={FlowchartPerulanganFor}/>
                    </Box>
                    <br/><br/>
                    Contoh penggunaan decrement pada perulangan for :<br/>
                    <Editor
                        defaultLanguage='cpp'
                        height='40vh'
                        theme='vs-dark'
                        defaultValue='#include <stdio.h>
                                    using namespace std;
                                    
                                    int main(void) {
                                        int count;
                                        for(count = 10; count > 0; count--){
                                            cout << "\n%d" << count;
                                        }
                                        cout << "\n Selesai.. \n";
                                        return 0;
                                    }'
                    />
                    <br/><br/>
                    <b>Perulangan for tanpa parameter</b><br/>
                    Perulangan for tanpa parameter ataupun kondisi diperlihatkan :<br/>
                    <b>for( ; ;  )<br/>
                        {'{'}<br/><br/>{'}'}
                    </b><br/><br/>
                    Berarti perulangan for terjadi berkelanjutan atau kontinu.<br/><br/>
                    <b>Statement break didalam perulangan</b><br/>
                    Jika terdapat <b>break</b> pada perulangan maka perulangan dihentikan 
                    dan lanjut ke statement setelah perulangan,<br/>
                    <Editor
                        defaultLanguage='cpp'
                        height='40vh'
                        theme='vs-dark'
                        defaultValue='#include <stdio.h>
                                    using namespace std;
                                    
                                    int main(void) {
                                        int count;
                                        for(count = 10; count > 0; count--){
                                            cout << "\n%d" << count;
                                            if(count == 5) break;
                                        }
                                        cout << "\n Selesai.. \n";
                                        return 0;
                                    }'
                    />
                    Perulangan for memiliki initial value atau nilai awal, ekspresi, dan loop cycle. 
                    Sehingga ada kemungkinan kita menempatkan perulangan di dalam suatu perulangan 
                    baik for maupun while.<br/>
                    Perhatikan listing dibawah ini :<br/>
                    <b>for(i = 0; i {'<'} 4; i++){'{'}<br/>
                        for(j = 3; j {'<'} 3; j++){'{'}<br/>
                        Statement_1;<br/>
                        {'}'}<br/>
                        Statement_2;<br/>
                        {'}'}
                    </b>
                </Box>
                <br/><br/>
                <Typography variant='h4' gutterBottom><b>3. Perulangan While.</b></Typography>
                <Box sx={{marginLeft: 6}}>
                    Perulangan menggunakan while merupakan mekanisme perulangan yang membolehkan 
                    untuk melanjutkan perulangan tersebut apabila ekspresi logikanya bernilai benar.<br/>
                    <Editor
                        defaultLanguage='cpp'
                        height='40vh'
                        theme='vs-dark'
                        defaultValue='while(ekspresi)   //Jika ekspresi bernilai benar maka statement yang
                                    {                   //berada di dalam perulangan While akan dieksekusi
                                        Statement1;     //jika terjadi perubahan nilai ekspersi menjadi salah
                                        Statement2;     //maka perulangan tidak dilanjutkan.
                                    }'
                    />
                </Box>
                <br/><br/>
                <Typography variant='h4' gutterBottom><b>4. Do-While.</b></Typography>
                <Box sx={{marginLeft: 6}}>
                    Perulangan do-while dan while memiliki perbedaan dalam mengevaluasi ekspresi. 
                    While akan mengevaluasi ekspresi pada awal perulangan, sedangkan do-while 
                    mengevaluasi ekspresi pada akhir perulangan.<br/>
                    <Editor
                        defaultLanguage='cpp'
                        height='40vh'
                        theme='vs-dark'
                        defaultValue='int number = 4;
                                    do{
                                        cout << "\nNumber = %d" << number;
                                        number++;
                                    }
                                    while(number < 4);'
                    />
                </Box>
                <br/><br/>
                <Typography variant='h4' gutterBottom><b>5. Continue.</b></Typography>
                <Box sx={{marginLeft: 6}}>
                    Pernyataan continue digunakan untuk mengarahkan eksekusi ke iterasi (proses) 
                    berikutnya pada loop yang sama, dengan kata lain mengembalikan proses yang 
                    sedang dilaksanakan ke-awal loop lagi, tanpa menjalankan sisa perintah dalam loop tersebut.<br/>
                    <b>Contoh Program :</b><br/>
                    <Box height='80vh' width='70vh'>
                        <img alt='PerulanganContinue' src={PerulanganContinue}/>
                    </Box>
                </Box>
                <br/><br/>
                <Typography variant='h4' gutterBottom><b>6. Break.</b></Typography>
                <Box sx={{marginLeft: 6}}>
                    Pernyataan break telah dibahas pada pernyataan pengambilan keputusan switch. 
                    Pernyataan break ini berfungsi untuk keluar dari struktur switch. Selain itu 
                    pernyataan break berfungsi keluar dari perulangan ( for, while dan do-while ). 
                    Jika pernyataan break dikerjakan, maka eksekusi akan dilanjutkan ke pernyataan 
                    yang terletak sesudah akhir dari badan perulangan ( loop ).<br/><br/>
                    <Editor
                        defaultLanguage='cpp'
                        height='40vh'
                        theme='vs-dark'
                        defaultValue='#include <stdio.h>
                                    #include <conio.h>
                                    
                                    main() {
                                        int bil = 1;
                                        clrscr();

                                        do {
                                            if(bil >= 6)
                                            break;
                                            printf("%d", bil);
                                        }
                                        while(bil++);
                                        getch();
                                    }'
                    />
                    <br/><br/>
                    Output yang dihasilkan adalah sebagai berikut :<br/>
                    <Box height='40vh' width='70vh'>
                        <img alt='HasilBreak' src={HasilBreak}/>
                    </Box>
                </Box>
                <br/><br/>
                <Typography variant='h4' gutterBottom><b>7. Operator go to</b></Typography>
                <Box sx={{marginLeft: 6}}>
                    Selain cara-cara yang telah dijelaskan di atas, bahasa C++ juga menyediakan 
                    kata kunci goto yang digunakan agar program dapat meloncat ke baris tertentu 
                    yang kita pilih. Adapun untuk menentukan baristersebut kita harus membuatsuatu 
                    label, yaitu dengan menempatkan tanda colon atau titik dua (:) di belakangnya, 
                    misalnya LBL:, LABEL:, mylabel: atau nama-nama lain yang Anda kehendaki. 
                    Berbeda dengan statemen break dan continue yang umumnya digunakan untuk proses 
                    pengulangan, statemen goto dapat ditempatkan di mana saja sesuai dengan kebutuhan 
                    program. Berikut ini contoh program yang akan menunjukkan penggunaan statemen goto 
                    di dalam proses pengulangan.<br/><br/>
                    <b>Contoh Program Operator go to :</b><br/>
                    <Box height='80vh' width='70vh'>
                        <img alt='ProgramGoto' src={ProgramGoto}/>
                    </Box>
                    <br/>Hasil Output :<br/>
                    <Box height='40vh' width='80vh'>
                        <img alt='HasilProgramGoto' src={HasilProgramGoto}/>
                    </Box>
                </Box>
            </Typography>
        </>
    )
}
