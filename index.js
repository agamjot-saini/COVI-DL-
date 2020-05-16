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

app.get('/x-ray', function(req,res){
  res.send('x-ray page');
});

app.get('/patient', function(req,res){
  res.send('patient page');
});


const PORT = 443;
app.listen(process.env.PORT || PORT, (err) => {
    if (err) console.log;
    console.log(`Server started on port: ${PORT}`);
})