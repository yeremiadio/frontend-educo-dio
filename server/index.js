const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = 8000;
 
app.use(cors());
app.use(express.json());

app.post("/compile", async (req, res) => {
  let code = req.body.code;
  let language = req.body.language;
  let langShort;
  if (language === "python") {
    langShort = "py";
  }
  let data = {
    files: [
      {
        name: `main.${langShort ? langShort : "js"}`,
        content: code,
      },
    ],
  };
  let config = {
    method: "post",
    url: `https://glot.io/api/run/${language ? language : "javascript"}/latest`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token af2c59c1-a508-45df-8b66-184f6ff2fbe4`,
    },
    data: data,
  };
  console.log(config);
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
