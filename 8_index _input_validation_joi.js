const Joi     = require('joi');         // for input validation
const express = require('express');     // first we need to load the express module which returns the function 
const app     = express();              //  we call the express function 
app.use(express.json());                // Way to use in body

// array of courses
const courses = [
    {id: 1, name: 'course 1'},
    {id: 2, name: 'course 2'},
    {id: 3, name: 'course 3'},
];
// Id environment port is there take that othewise default
const port = process.env.PORT || 3000;

// route parameter - getting single set of record based on the id eg, /api/courses/1
// 1st parameter = port, 2nd parameter (optional) = displaying message

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// Handeling POST requests
app.post('/api/courses', (req, res) => {

    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);
    // validting the request
    if(result.error) {
        // 400 Bad Request
        // res.status(400).send(result.error);  // complex json
        res.status(400).send(result.error.details[0].message);
        return;
    }

    // if(!req.body.name || req.body.name.length < 3) { // can both vaidation be in one
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    // Pushing the new course in the course array
    courses.push(course);
    
    // receiving the response
    res.send(course);
});


app.listen(port, () => console.log(`Listening in port ${port} ...`));