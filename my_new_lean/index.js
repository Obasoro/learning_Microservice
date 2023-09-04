const express = require('express')
const fs = require("fs");
const app = express();

const port = 3000;

// Throws an error if the PORT environment variable is missing.

if (!process.env.PORT) {
    throw new error("Please specify the port number for the HTTP server")
}

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app.listen(port, () => {
//     console.log(`Listening App
//     on port &{port}!`);
//});

app.get('/video', (req, res) => {
    const path = "/SampleVideo_1280x720_1mb.mp4";
    fs.stat(path, (err, stats) => {
        if (err) {
            console.errpr("An error occurred");
            res.sendStatus(500)
            return;
        }

        res.writeHead(200, {
            "Content-Length": stats.size,
            "Content-Type": "video/mp4",
        });

        fs.createReadStream(path).pipe(res);
    });

});

app.listen(PORT, () => {
    console.log(`Listening App
    on port &{PORT}, point your browser at http://localhost:${PORT}/video`);
});