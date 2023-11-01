import axios from "axios";
import "./EditorCode.css";
import React, { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import Navbar from "./Navbar";
import spinner from "./Eclipse-1s-200px.svg";
import { useDispatch } from "react-redux";
import { clearMessage } from "../../../utils/slices/message";
import Popup from "../../../components/PopUp/PopUp";

function EditorCode() {
  const [userCode, setUserCode] = useState("");
  const [userLang, setUserLang] = useState("");
  const [userTheme, setUserTheme] = useState("vs-dark");
  const [fontSize, setFontSize] = useState(20);
  const [userInput, setUserInput] = useState("");
  const [userOutput, setUserOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  // Define Monaco Editor options
  const options = {
    fontSize: fontSize,
  };

  // Function to handle code compilation
  async function compile() {
    if (!userCode) return;
    setLoading(true);

    try {
      const { data } = await axios.post(`http://localhost:8080/compile`, {
        code: userCode,
        userInput: userInput,
      });

      const { stdout, stderr, error } = data.data;

      if (error && error.length > 0 && stderr && stderr.length > 0) {
        setUserOutput(stderr);
      } else {
        setUserOutput(stdout);
      }
    } catch (err) {
      console.error(err);
      setUserOutput(err?.response?.data?.error);
    } finally {
      setLoading(false);
    }
  }

  // Clear the output
  function clearOutput() {
    setUserOutput("");
  }

  const handleSaveCode = async () => {
    try {
      const response = await axios.post('http://localhost:8080/save-compile', { name, userCode, userInput }); // Ganti userId dengan yang sesuai
      console.log('Saved code:', response.data);
      setShowPopup(true);
    } catch (error) {
      console.error('Failed to save code:', error);
    }
  };
  const closePopup = () => {
    setShowPopup(false);
  };
  // Clear messages on component mount
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

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
      <input
          type="text"
          placeholder="File Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      <div className="main-code">
        <div className="left-container">
          <Editor
            value={userCode}
            options={options}
            height="100vh"
            width="100%"
            theme={userTheme}
            language={userLang}
            defaultValue="# Enter your Code here"
            onChange={(value) => {
              setUserCode(value);
            }}
          />
          <button className="run-btn" type="button" disabled={!userLang} onClick={compile}>
            Run
          </button>
          <button className="save-btn" type="submit" disabled={!userLang} onClick={handleSaveCode}>
            Save
          </button>
        </div>
        <div className="right-container">
          <h4>Input : </h4>
          <div className="input-box">
            <textarea 
              id="code-inp"
              value={userInput} 
              onChange={(e) => setUserInput(e.target.value)}></textarea>
          </div>
          <h4>Output</h4>
          {loading ? (
            <div className="spinner-box">
              <img src={spinner} alt="Loading..." />
            </div>
          ) : (
            <div className="output-box">
              <pre>{userOutput}</pre>
              <button onClick={clearOutput} type="button" className="clear-btn">
                Clear
              </button>
            </div>
          )}
        </div>
      </div>
      <Popup open={showPopup} onClose={closePopup} />
    </div>
  );
}

export default EditorCode;
