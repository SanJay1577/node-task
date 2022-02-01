const fs = require("fs"); //inbuild pacakages
const path = require("path");
const express = require("express");
const dirPath = path.join(__dirname, "timestamps"); // to specify the path
console.log(dirPath);
const app = express();
const PORT = 3005; //PORT to be Hosted

let ts = new Date();

let dateOb = new Date(new Date().toUTCString().slice(0, -3)); // converting the date to UTC

const timeStamp = "Last clicked TimeStamp : " + dateOb; // content of he folder

fs.writeFileSync(`${dirPath}/currentdate-time.txt`, timeStamp, (res) => {
  console.log("File Created");
}); //writing the time stamp

app.use(express.static("timestamps")); //useing middleware to get the static files

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "/timestamps/currentdate-time.txt"));
}); //getting data from presss

app.listen(PORT, () => console.log(`Server Started: localhost:${PORT}`));