const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./routes/user.js');
var app=express();
app.listen(1666);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use('/user',userRouter);