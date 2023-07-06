const express = require('express')

const app = express();

const port = 3000;

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

app.listen(port, () => {
    console.log(`Listening App
    on port &{port}!`);
});