const app = require("express")();

const port = process.env.PORT ? process.env.PORT : 8080;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
