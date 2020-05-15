const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  express.static(path.join(__dirname, "public"), {
    extensions: ["html"],
  })
);

const PORT = 443;
app.listen(process.env.PORT || PORT, (err) => {
    if (err) console.log;
    console.log(`Server started on port: ${PORT}`);
})