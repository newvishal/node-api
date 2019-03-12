
'use strict';

var express = require('express');
var controller = require('./todos.controller');

var router = express.Router();

router.get('/', controller.index);                  // localhost:3000/api/todos/
router.post('/', controller.create);                // localhost:3000/api/todos/
router.get('/:id', controller.get);                // localhost:3000/api/todos/
router.put('/:id', controller.update);              // localhost:3000/api/todos/
router.delete('/:id', controller.remove);           // localhost:3000/api/todos/

exports = module.exports = router;