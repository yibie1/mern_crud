const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Books = require('./models/Book')
const cors = require('cors')


app.use(express.json());// use json response
app.use(cors()); //use to communicate Api



mongoose.connect("mongodb+srv://yibe:yibelta1@crud.tmpf9bm.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

mongoose.connection.on('error', function(error){
    console.log('Database error :', error )
});
//create route

app.post("/", async (req, res)=>{
const bookName = req.body.bookName
const price = req.body.price
const author = req.body.author
const book = new Books({bookName: bookName, price: price, author: author});

try{
//save data to database
await book.save();
res.send('Data Inserted');


}catch(error){
    console.log(error)
}
});

app.listen('3001', () =>{

    console.log('server runing in 3001.... ');
});