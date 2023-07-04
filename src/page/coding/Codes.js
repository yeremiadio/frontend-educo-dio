import React, { useState } from 'react'; 
import { GlotApi } from 'glot';

const apiToken = '69af4396-93b9-4efc-a929-bcbe6c2e83de';
const glot = new GlotApi(apiToken);

const Codes = () => {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
  
    const handleCodeChange = (e) => {
      setCode(e.target.value);
    };
  
    const compileCode = async () => {
      try {
        const response = await glot.runCode({
          language: 'cpp', // Ganti dengan bahasa pemrograman yang diinginkan
          files: [{ name: 'main.cpp', content: code }],
        });
        setOutput(response.stdout);
      } catch (error) {
        console.error(error);
        setOutput('Terjadi kesalahan saat mengompilasi kode.');
      }
    };
  
    return (
      <div>
        <textarea value={code} onChange={handleCodeChange} />
        <button onClick={compileCode}>Compile</button>
        <pre>{output}</pre>
      </div>
    );
  };
  
  export default Codes;
  