var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    completed: {type: Boolean, required: true},
    description: String
});

var todoModel = mongoose.model('Todo' , todoSchema);

exports = module.exports = todoModel;