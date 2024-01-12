var express = require('express');
var router = express.Router();
var userModel = require("./users")
/* GET home page. */
router.get('/',(req,res)=>{
  res.render('index',{title: 'NODE JS'})
})
router.get('/regi', async (req,res)=>{
  try{
  // res.render("registration")
  const newUser =await userModel.create({
  //     username:req.body.username,
  //     email:req.body.email,
  // password:req.body.password,
  // await newUser.save();
  username: "nonofyourbusiness",
  email: "why@email.come",
  password: "iforgot"
})
  // res.send(newUser)
  res.redirect('/profile')
}
catch(err){
  console.log(err);
  res.send(err);
//  if(err) throw Error ;
  // next();
}
})
router.get('/profile',(req,res)=>{
  res.send('hello from profile')
})
router.get('/base',async (req,res)=>{
  res.send(`<pre> ${await userModel.find()} </pre>`)
})
router.get('/error', function errorHandler(err,req,res,next){
  res.render("error",{error: err})
  next();
})
module.exports = router;
