const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.post("/compile", async (req, res) => {
  let code = req.body.code;
  let userInput = req.body.userInput;
  let data = {
    files: [
      {
        name: `main.cpp`,
        content: code,
      },
    ],
    stdin: userInput,
  };
  let config = {
    method: "post",
    url: `https://glot.io/api/run/cpp/latest`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token 70e21e8e-494f-4fa3-94d3-7272ba272385`,
    },
    data: data,
  };
  await axios(config)
    .then((response) => {
      return res.status(200).json({ status: 200, data: response.data });
    })
    .catch(() => {
      return res.status(500).json({ error: "Internal Server Error" });
    });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(` Server listening on port ${PORT}`);
});
