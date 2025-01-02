const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Home Page!</h1>');
})

app.get('/post', (req, res) => {
    res.send('<h1>Post Page!</h1>');
})

app.get('/user', (req, res) => {
    res.send('<h1>User Page!</h1>');
})

app.use((req, res)=>{
    res.status(404).send('<h1>Not Found!</h1>');
})

app.listen(3000, ()=> {
    console.log('Server started on port 3000');
});