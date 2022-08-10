const express=require('express');
const mongoose = require('mongoose');
const app = express();
const visitorRoute =require('./routes/visitor.route');
const bodyParser = require('body-parser');
var cors = require('cors')

const db = 'mongodb+srv://rahul:passwordmongo@mern.zbitiqw.mongodb.net/hostel-database?retryWrites=true&w=majority'

app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).send(`Welcome to our girl's hostel.`);
})
app.use(bodyParser.json());
app.use('/visitor',visitorRoute);

const port = process.env.PORT || 8000;



app.listen(port,()=>{
    console.log(`Server is running at port:${PORT}`)
})

mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology:true })
.then(()=>{
    console.log('Database is connected')
}).catch((e)=>{
    console.log('DateBase is not connected')
})
