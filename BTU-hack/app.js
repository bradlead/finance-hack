const express = require('express');
const jwt = require('jsonwebtoken');
const React = require('react');
const ReactDOM = require('react-dom');
const app = express();
const time = Math.floor(Date.now() / 1000)

 

app.get('/api', (req, res) =>{
    res.json({
        message: 'Connection made'
    });
});

app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
        res.json({
            message: 'post',
            authData,

            });
        }
    });
})

app.post('/api/token', (req, res) => {
    //create user
    const payload = {
        iss: '8fed25977ce9c17df4b5d58a9aea034cba99012b986d904b81640155300c19e7',
        sub: 'customer',
        iat: time,
        jti: time,
        email: 'sam.pull@example.com',
        
    }

    jwt.sign(payload, 'f5e65c518534b30f3b4a32049ff18e45b542477578e42a475dc711ff68338a46', 'HS256', (err, token) => {
        const usertoken = res.json({
            token
        })
        console.log(usertoken)
    });
});

/*app.post('https://code.creditkudos.com/creditkudos-connect-v2.6.0.js', (req, res) => {

});*/

/*CK.connect({
    client_id: '8fed25977ce9c17df4b5d58a9aea034cba99012b986d904b81640155300c19e7',
        redirect_uri: 'localhost:5000/loan',
        customer_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrdWRvc1VzZXIiOnsiaXNzIjoiOGZlZDI1OTc3Y2U5YzE3ZGY0YjVkNThhOWFlYTAzNGNiYTk5MDEyYjk4NmQ5MDRiODE2NDAxNTUzMDBjMTllNyIsInN1YiI6ImN1c3RvbWVyIiwiaWF0IjoxNTYxMjM1MTM3LCJqdGkiOiJoc3V5eWdkdXl2dXNmIiwiZW1haWwiOiJzYW0ucHVsbEBleGFtcGxlLmNvbSIsImZpcnN0X25hbWUiOiJTYW11ZWwiLCJsYXN0X25hbWUiOiJQdWxsIiwiY3VzdG9tX3JlZmVyZW5jZSI6IlNQLTEyMyIsImRhdGVfb2ZfYmlydGgiOiIxOTg1LTEwLTI1IiwicG9zdGNvZGUiOiJYWTEyQUIifSwiaWF0IjoxNTYxMjM1OTU1fQ.6LPlYZOB1A4P8ArIPS7qbxgo0-yVoMlxJuiAAB-XdOY",
        selector: '#container',
        state: {
          userId: '12345',
        }
})*/
// Format of token
// Authorization: Bearer <acces_token>



//Verify token
function verifyToken(req,res, next) {
    //Get auth header
    const bearerHeader = req.headers['authorization'];
    //Check if undefined bearer
    if(typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();

    } else {
        //forbidden
        res.sendStatus(403);
    }
}
app.listen(5000, () => console.log('Server started on port 5000'));