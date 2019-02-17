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

// Id environment port is there take that othewise default
const port = process.env.PORT || 3000;

// route parameter - getting single set of record based on the id eg, /api/courses/1
// 1st parameter = port, 2nd parameter (optional) = displaying message

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

// multiple params
/* app.get('/api/posts/:year/:date', (req, res) => {
    res.send(req.params);   // parameter object
    res.send(req.params.year);   // year
    res.send(req.params.date);   // date
}); */

// query string params
app.get('/api/posts/:year/:date', (req, res) => {
    res.send(req.query);
});
app.listen(port, () => console.log(`Listening in port ${port} ...`));