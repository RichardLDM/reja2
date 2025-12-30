
const http = require("http");

const fs = require("fs");
const mongodb = require("mongodb");
let db;
const connectionString = "mongodb+srv://richardldm:wprve78nlGnAnULz@richard.m7ntnwt.mongodb.net/Reja?appName=Richard"

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connected successfully!")
        module.exports = client;
        
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
});

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR", err);
    } else {
        user = JSON.parse(data)
    }
})


