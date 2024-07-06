const express = require('express');

const cors = require('cors');


const app = express();

app.use(cors())
app.use(express.json());

app.get('/user', function(req, res) {
    res.json('hello world')
})



app.post('/calculate', function (req, res) {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let opporator = req.body.opporator;
    let result;

    if(opporator == 'add') {
     result = num1 + num2;
    } else if(opporator == 'sub') {
        result = num1 - num2;
    }else if(opporator == 'mul') {
        result = num1 * num2;
    } else if(opporator == 'div') {
        result = num1 / num2;
    }
    res.json(result);
});

app.listen(2000, function() {
console.log('server listening on port 2000');
})
