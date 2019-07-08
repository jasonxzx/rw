const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
//注册
router.post('/reg',(req,res)=>{
	var obj=req.body;
	if(!obj.uname){
		res.send({code:401,msg:'uname required'});
		return;
	}
	if(!obj.upwd){
		res.send({code:402,msg:'upwd required'});
		return;
	}
	if(!obj.phone){
		res.send({code:403,msg:'phone required'});
		return;
	}
	if(!obj.email){
		res.send({code:404,msg:'email required'});
		return;
	}
	if(!obj.verify){
		res.send({code:405,msg:'verify required'});
		return;
	}
	pool.query('INSERT INTO rw_user SET ?',[obj],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.affectedRows>0)
			res.send({code:200,msg:'reg suc'});
	});
});
//登陆
router.post('/log',(req,res)=>{
	var obj=req.body;
	if(!obj.uname){
		res.send({code:'401',msg:'uname required'});
		return;
	}
	if(!obj.upwd){
		res.send({code:'402',msg:'upwd required'});
		return;
	}
	pool.query('SELECT * FROM rw_user WHERE uname=? AND upwd=?',[obj.name,obj.upwd],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0)
			res.send({code:'200',msg:'log suc'});
		else
			res.send({code:'301',msg:'log err'});
	});
});
module.exports=router;
//查询
router.get("/v1/det",(req,res)=>{
	var $uid=req.query.uid;
	console.log($uid);
});