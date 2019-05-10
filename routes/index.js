var express = require('express');
var router = express.Router();
var {Todo} = require ('../database/todo');

/* GET home page. */
router.get('/', async(req, res, next)=> {
  var todos= await Todo.find();
  res.render('index', {todos});
});

router.post ('/', async(req,res,next)=>{
  var titleRq = req.body.title;
  var todo = new Todo({
    title : titleRq,
    complete : false
  });

  await todo.save();
  return res.redirect('/');
});

router.post ('/delete', async(req, res, next)=>{
  var id = req.body.id;
  var todo = await Todo.findById(id);
  todo.delete();
  return res.redirect('/');
});

router.post('/done', async(req, res, next)=>{
  var id = req.body.id;
  var todo = await Todo.findById(id);
  todo.complete= true;
  todo.save();
  return res.redirect('/');
});
module.exports = router;
