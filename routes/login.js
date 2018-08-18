var express=require('express');
var router=express.Router();
var Login=require('../model/login');
router.get('/login', function (req, res) {
    Login.find({},function(err, login){
    if(err)
      res.send(err);
    res.json(login);
  });
});

router.get('/login/:id', function (req, res) {
    Login.findOne({_id:req.params.id},function(err,login){
        if(err)  res.send(err);
    res.json(login);
  });
});
router.get('/login/:username/:password',function(req,res){
  Login.findOne({username:req.params.username,password:req.params.password},function(err,login){
    if(err) res.send(err);
    res.json(login);
  })
});
router.post('/login', function(req, res) {
            Login.findOne({username:req.body.username},function(err,docs){
              if(docs){
                res.json('username already exists');
              }
              else{
                  Login.create(req.body, function(err,login){
                  if(err) throw err;
                  res.json(login);
                });
              }
            });
      });     

router.delete('/login/:id', function(req, res){
  Login.findOneAndRemove({_id:req.params.id},function(err,login){
    if(err)
      res.send(err);
    res.json(login);
  });
});

router.put('/login/:id', function(req, res){
  var query = {
    task:req.body.task,
    description:req.body.description,
  };
  Login.findOneAndUpdate({_id:req.params.id}, query, function(err, login){
    if(err)
      res.send(err);
    res.json(login);
  });
});


module.exports=router;