const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const VERSION = process.env.VERSION || "v1";
const DATA_SOURCE = process.env.DATA_SOURCE || "staging";

app.get('/version', (req, res) => {
  res.json({ version: VERSION });
});

app.get('/data', (req, res) => {
  res.json({ source: DATA_SOURCE, data: "Some business data" });
});

app.get('/health', (req, res) => {
  res.send("OK");
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`App running on ${PORT}`);
});
