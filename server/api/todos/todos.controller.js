'use strict';

var Todo = require('./todos.model');

function index(req, res){
    Todo.find( {}, function(err, todos){
        if(err){
            res.status(500).json({
                message: err.message
            });
        }
        else{
            res.status(200).json({
                message: "Todos fetched successfully",
                todos: todos
            })
        }
    });
}

function update(req, res){

    var todoId = req.params.id;

    var updatedTodo = req.body;

    Todo.findByIdAndUpdate( todoId, updatedTodo, {new: true}, function(err, savedTodo){
        if(err){
            res.status(500).json({
                message: err.message
            });
        }
        else{
            res.status(200).json({
                message: "Todo updated successfully",
                todo: savedTodo
            })
        }
    });
}

function create(req, res){
    var newTodo = req.body;
    Todo.create( newTodo, function(err, savedTodo){
        if(err){
            res.status(500).json({
                message: err.message
            });
        }
        else{
            res.status(200).json({
                message: "Todo created successfully",
                todo: savedTodo
            })
        }
    });
}

function remove(req, res){
    var todoId = req.params.id;
    Todo.findByIdAndRemove( todoId, function(err){
        if(err){
            res.status(500).json({
                message: err.message
            });
        }
        else{
            res.status(200).json({
                message: "Todo deleted successfully"
            })
        }
    });
}

function get(req, res){
    var todoId = req.params.id;
    Todo.findById( todoId, function(err, todo){
        if(err){
            res.status(500).json({
                message: err.message
            });
        }
        else{
            res.status(200).json({
                message: "Todo fetched successfully",
                todo: todo
            })
        }
    });
}


exports = module.exports = {
    index: index,
    create: create,
    remove: remove,
    update: update,
    get: get
}