import express from "express";

const app = express();
const port = 4000;

app.use("/", (req, res) => {
  res.json({ message: "Hello world  from EXpress App" });
});

app.listen(port, () => {
  console.log("Listening on port : 4000");
});
console.log("Hello world");
