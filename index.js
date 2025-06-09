const express = require("express");
const request = require("request");
const app = express();

app.get("/stream", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  request("http://16.171.107.203:8000/stream").pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Proxy attivo sulla porta " + PORT));
