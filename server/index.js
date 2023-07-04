const express = require("express");
const cors = require("cors");
const Axios = require("axios");
const app = express();
const PORT = 8000;
 
app.use(cors());
app.use(express.json());
 
app.post("/compile", async (req, res) => {
    //getting the required data from the request
    let code = req.body.code;
    let language = req.body.language;
    let input = req.body.input;
 
    if (language === "python") {
        language = "py"
    }
 
    let data = ({
        "code": code,
        "language": language,
        "input": input
    });
    let config = {
        method: 'post',
        url: ('https://glot.io/api/run/' + language + '/latest', {
            stdin: code
        }),
        headers: {
            'Authorization': 'c86478af-16d8-423b-887e-57deb198b441',
            'Content-Type': 'application/json'
        },
        data: data
    };
    //calling the code compilation API
    Axios(config)
        .then((response) => {
            res.json(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while compiling the code.' });
        });
})
 
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});