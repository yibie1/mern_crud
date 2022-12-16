const mongoose  = require('mongoose')

/*
create collections / column
*/
const BookSchema = new mongoose.Schema({
    bookName : {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    author:{
        type: String,
        required: true
    }
})

const Book = mongoose.model("Book", BookSchema)

module.exports = Book // export data 