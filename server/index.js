const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Books = require('./models/Book')


app.use(express.json());// use json response

mongoose.connect("mongodb+srv://yibe:yibelta1@crud.tmpf9bm.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

mongoose.connection.on('error', function(error){
    console.log('Database error :', error )
});
//create route

app.get("/", async (rqe, res)=>{
const book = new Books({bookName: "Book 3", price: 200, author: "Book By D/r Zbener"});

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