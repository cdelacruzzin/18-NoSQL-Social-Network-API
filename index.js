const express = require('express'); //import express
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3003;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes);

db.once('open', ()=>{
    app.listen(PORT, ()=>{
        console.log(`running on port ${PORT}!`);
    })
})
