const express = require('express');     // first we need to load the express module which returns the function 
const app = express();                              //  we call the express function 

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

app.get('/api/courses/:id', (req, res) => {
    // here we will write some logic to get the specific id data
    const course = courses.find(c => c.id === parseInt(req.params.id));
    // if we do not find the course in array
    if(!course) return res.status(404).send('The course with the given ID was not found');
    // othyerwise
    res.send(course);
});
app.listen(port, () => console.log(`Listening in port ${port} ...`));