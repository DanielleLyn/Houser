const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller')
const dotenv = require('dotenv');
const massive = require('massive');
dotenv.config();
const app = express();
app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING).then(dbInstance => {
    console.log('conected')
    app.set('db', dbInstance);
}).catch(error=>{
    console.log('----error', error);
});


app.listen(4000, ()=>{
    console.log('server is listening on port 4000'  );  
});
