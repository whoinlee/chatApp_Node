var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname)); //****/
app.use(bodyParser.json()); //****/
app.use(bodyParser.urlencoded({extended: false}));

var messages = [
    {
        name: 'Tim', message: 'Hi'
    },
    {
        name: 'Whoin', message: 'Hello'
    }
];

app.get('/messages', (req, res) => {    //localhost:3000/messages
    res.send(messages);
});
app.post('/messages', (req, res) => {
    // console.log(req.body);              //undefined ==> needs to use bodyParser
    messages.push(req.body);
    res.sendStatus(200);
})

var server = app.listen(3000, () => console.log('server is listening on port', server.address().port));