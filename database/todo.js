const mongoose = require ('mongoose');

var Todo = new mongoose.Schema({
    title : String,
    complete : Boolean
})

module.exports = {
    Todo : mongoose.model('Todo', Todo)
}