
var mongoose = require('mongoose');

var mongodbUrl = 'mongodb://localhost:27017/food';


mongoose.connect(mongodbUrl, function(err){
    if(err){
        console.log("Error: Could not connect to mongodb");
        console.log(err);
    }
    else{
        console.log("Success: Connected to mongodb");
    }
});