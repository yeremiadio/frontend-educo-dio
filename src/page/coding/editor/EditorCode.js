import axios from "axios";
import "./EditorCode.css";
import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import Navbar from "./Navbar";
import spinner from "./Eclipse-1s-200px.svg";

function EditorCode() {
  const [userCode, setUserCode] = useState(``);

  const [userLang, setUserLang] = useState("python");

  const [userTheme, setUserTheme] = useState("vs-dark");

  const [fontSize, setFontSize] = useState("vs-dark");

  const [userInput, setUserInput] = useState("");

  const [userOutput, setUserOutput] = useState("");

  const [loading, setLoading] = useState(false);

  const options = {
    fontSize: fontSize,
  };

  async function compile() {
    if (!userCode || !userLang) return;
    setLoading(true);
    const data = {
      code: userCode,
      language: userLang,
    };
    await axios
      .post(`http://localhost:8000/compile`, data)
      .then((res) => {
        console.log(res);
        setLoading(false);
        const { stdout, stderr, error } = res.data.data;
        if (error && error.length > 0 && stderr && stderr.length > 0) {
          setUserOutput(stderr);
        } else {
          setUserOutput(stdout);
        }
      })
      .catch((err) => {
        console.log(err);
        setUserOutput(err?.response?.data?.error);
        setLoading(false);
      });
  }

  function clearOutput() {
    setUserOutput("");
  }

  return (
    <div className="EditorCode">
      <Navbar
        userLang={userLang}
        setUserLang={setUserLang}
        userTheme={userTheme}
        setUserTheme={setUserTheme}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />
      <div className="main-code">
        <div className="left-container">
          <Editor
            options={options}
            height="100vh"
            width="100%"
            theme={userTheme}
            language={userLang}
            defaultLanguage="python"
            defaultValue="# Enter your Code here"
            onChange={(value) => {
              setUserCode(value);
            }}
          />
          <button className="run-btn" onClick={() => compile()}>
            Run
          </button>
        </div>
        <div className="right-container">
          <h4>Input : </h4>
          <div className="input-box">
            <textarea
              id="code-inp"
              onChange={(e) => setUserInput(e.target.value)}
            ></textarea>
          </div>
          <h4>Output</h4>
          {loading ? (
            <div className="spinner-box">
              <img src={spinner} alt="Loading..." />
            </div>
          ) : (
            <div className="output-box">
              <pre>{userOutput}</pre>
              <button
                onClick={() => {
                  clearOutput();
                }}
                className="clear-btn"
              >
                Clear
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditorCode;
