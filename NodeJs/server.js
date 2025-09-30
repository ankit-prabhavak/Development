var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + "/" + "index.html");
});



app.post('/process_post', urlencodedParser, (req, res) => {
    // Prepare the response in JSON format
    const fname = req.body.first_name;
    const lname = req.body.last_name;

    

    res.write(`<h1 style="font-family:cursive">Your First Name is: ${fname}</h1>`);
    res.write(`<h1 style="font-family:cursive">Your Last Name is: ${lname}</h1>`);
       
});

var server = app.listen(8000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});


async function getData(pa) {
    
}