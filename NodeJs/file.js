// const fs = require("fs");

// fs.writeFileSync("test.txt", "Jai Shree Ram");

// fs.writeFile("test.txt", "Jai Shree Ram", (err) => {});

// const data = fs.readFileSync("test.txt", "utf-8");
// console.log(data);


// fs.readFile("test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);  
//     } else {
//     console.log("File content:", data);
//   } 
// })

// fs.appendFileSync("./test.txt", `${Date.now()}\n`);
// fs.cpSync("./test.txt", "copy.txt");

// fs.unlinkSync("./copy.txt");
// console.log(fs.statSync("./test.txt"));

// fs.mkdirSync("myDirectory", { recursive: true });

const fs = require("fs");

const http = require("http");
const server = http.createServer((req, res) => {

    const log = `${Date.now()}: new req. received\n`;
    fs.appendFileSync("server.log", log);

    res.end("Hello World");

});

server.listen(8000, () => console.log("Server is running on port 8000"));

