import React from "react";
import Select from "react-select";
import './Navbar.css';

const Navbar = ({ userLang, setUserLang, userTheme,
    setUserTheme, fontSize, setFontSize}) => {
    const language = [
        { value: "cpp", label: "C++"}
    ];
    const themes = [
        { value: "vs-dark", label: "Dark"},
        { value: "light", label: "Light"},
    ]
    return (
        <div className="navbar">
            <h1>Educo Compiler</h1>
            <Select options={language} value={userLang}
                onChange={(e) => setUserLang(e.value)}
                placeholder={userLang} />
            <Select options={themes} value={userTheme}
                onChange={(e) => setUserTheme(e.value)}
                placeholder={userTheme} />
            <label>Font Size</label>
            <input type="range" min="18" max="30"
                value={fontSize} step="2"
                onChange={(e) => {setFontSize(e.target.value)}} />
        </div>
    )
}

export default Navbar