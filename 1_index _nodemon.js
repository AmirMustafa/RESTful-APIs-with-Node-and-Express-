const express = require('express');     // first we need to load the express module which returns the function 
const app = express();                              //  we call the express function 

// 1st parameter is path '/' is for home, and 2nd para is callback function
app.get('/', (req, res) => {
    res.send('Hello World');
});

// another get request
app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
});

// 1st parameter = port, 2nd parameter (optional) = displaying message
app.listen(3000, () => console.log('Listening in port 3000 ...'));