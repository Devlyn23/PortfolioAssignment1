require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')    

app.get("/", (req, res) => {
    res.send('{"message":"Welcome to DressStore application"}');
});

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const contactsRouter = require('./routes/contacts');
app.use('/contacts', contactsRouter)

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);


app.listen(3000, () => console.log('Server Started'));