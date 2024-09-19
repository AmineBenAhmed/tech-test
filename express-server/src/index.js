const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Welcome to my Express app!");
});

app.get("/greet/:name", (req, res) => {
  const name = req.params.name;
  if (!name) {
    throw new Error('No name provided to display')
  }
  res.send(`Hello ${name}`);
});

app.post("/echo", (req, res) => {
  const data = req.body;
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});