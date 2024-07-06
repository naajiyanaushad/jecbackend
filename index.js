const express = require('express');

const cors = require('cors');

const { MongoClient} = require('mongodb');

async function mongoConnect(){
    let cliient = new MongoClient('mongodb+srv')
}

app.use(cors())     
app.use(express.json());

app.get('/user', async function(req, res) {
    let output = await db.collection('user').find({"userName":req.body.userName}).toArray();
    res.json(output)
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