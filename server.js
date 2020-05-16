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

app.get("/", (req, res) => {
	res.sendfile("./public/index.html");
});

app.get("/patient", (req, res) => {
	res.sendfile("./public/patient.html");
});

app.get("/xray", (req, res) => {
	res.sendfile("./public/xray.html");
});



const PORT = 443;
app.listen(process.env.PORT || PORT, (err) => {
	if (err) console.log;
	console.log(`Server started on port: ${PORT}`);
});
