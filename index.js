const express=require('express');
const mongoose = require('mongoose');
const app = express();
const visitorRoute =require('./routes/visitor.route');
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).send(`Welcome to our girl's hostel.`);
})
app.use(bodyParser.json());
app.use('/visitor',visitorRoute);

const PORT = process.env.port || 8000;



app.listen(PORT,()=>{
    console.log(`Server is running at port:${PORT}`)
})

mongoose.connect('mongodb://localhost:27017/Hostel_Visitors',{ useNewUrlParser: true,useUnifiedTopology:true })
.then(()=>{
    console.log('Database is connected')
}).catch((e)=>{
    console.log('DateBase is not connected')
})
