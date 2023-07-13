const fs = require("fs")
//SYNC
fs.mkdirSync("Nielit")
fs.writeFileSync("Nielit/intro.txt","Welcome to the course.")
fs.appendFileSync("Nielit/intro.txt"," This is full stack development with MERN course.")
const data=fs.readFileSync("Nielit/intro.txt","utf-8")
console.log(data);
fs.renameSync("Nielit/intro.txt","Nielit/myintro.txt")
fs.unlinkSync("Nielit/myintro.txt")
fs.rmdirSync("Nielit")