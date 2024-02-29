const express = require('express');
const cors = require('cors');
const data = require('../db.json');
const app = express();


// middlewares 
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.json("simple info page!");
})


// getting all people from the list 
app.get('/api/persons', (req, res) => {
    res.send(data);
});


// adding a person to a server 
app.post('api/persons', (req, res) => {
    const user = req.body;
    let newUser = {
        id: Math.floor(Math.random() * 1000000),
        name: user.name,
        number: user.number,
        dataOfCreation: user.dataOfCreation,
        img: user.img
    }
    
    data = [...data, newUser];
    res.json(data);
})


// getting a user by its id

app.get('api/person/:id', (req, res) => {
    const userID = Number(req.params);
    let userInfo = data.filter(el => el.id === userID);
    res.json(userInfo);
})

// starting server 
const port = process.env.PORT || 3001;

app.listen(port, ()=> {
    console.log("The server has started on the port ", port);
})
