var express=require('express');
var router=express.Router();
var Todo=require('../model/todo');
router.get('/todo', function (req, res) {
    Todo.find({},function(err, todo){
    if(err)
      res.send(err);
    res.json(todo);
  });
});

router.get('/todo/:id', function (req, res) {
    Todo.findOne({_id:req.params.id},function(err, todo){
        if(err)
      res.send(err);
    res.json(todo);
  });
});

router.post('/todo', function(req, res) {
		console.log(req.body);
           Todo.create(req.body, function(err, todo){
            if(err) throw err;
             res.json(todo);
      });
});

router.delete('/todo/:id', function(req, res){
  Todo.findOneAndRemove({_id:req.params.id},function(err,todo){
    if(err)
      res.send(err);
    res.json(todo);
  });
});

router.put('/todo/:id', function(req, res){
  var query = {
    task:req.body.task,
    description:req.body.description,
  };
  Todo.findOneAndUpdate({_id:req.params.id}, query, function(err, todo){
    if(err)
      res.send(err);
    res.json(todo);
  });
});


module.exports=router;