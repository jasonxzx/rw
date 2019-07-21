const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
//注册ajax
router.post('/v1/reg',(req,res)=>{
	var obj=req.body;
	var sql="insert into rw_user set ?";
	pool.query(sql,[obj],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1");
		}
	});
});
//注册
router.post('/reg',(req,res)=>{
	var obj=req.body;
	if(!obj.uname){
		res.send({code:401,msg:'用户名为空'});
		return;
	}
	if(!obj.upwd){
		res.send({code:402,msg:'密码为空'});
		return;
	}
	if(!obj.email){
		res.send({code:403,msg:'邮箱为空'});
		return;
	}
	if(!obj.phone){
		res.send({code:404,msg:'手机号为空'});
		return;
	}
	if(!obj.gender){
		res.send({code:405,msg:'性别为空'});
		return;
	}
	pool.query('INSERT INTO rw_user SET ?',[obj],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0)
			res.send({code:200,msg:'注册成功'});
	});
});
//登陆
router.post('/log',(req,res)=>{
	var obj=req.body;
	if(!obj.uname){
		res.send({code:'401',msg:'用户名为空'});
		return;
	}
	if(!obj.upwd){
		res.send({code:'402',msg:'密码为空'});
		return;
	}
	pool.query('SELECT * FROM rw_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0)
			res.send({code:'200',msg:'登陆成功'});
		else
			res.send({code:'301',msg:'用户名或密码错误'});
	});
});
//根据uid查询
router.get("/v1/queryuser/:uid",(req,res)=>{
	var $uid=req.params.uid;
	var sql="select * from rw_user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("0");
		}
	});
});
//删除用户
router.delete("/v1/deluser/:uid",(req,res)=>{
	var $uid=req.params.uid;
	var sql="delete from rw_user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//修改用户
router.put("/v1/upduser",(req,res)=>{
	var $uid=req.body.uid;
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $email=req.body.email;
	var $phone=req.body.phone;
	var $gender=req.body.gender;
	var sql="update rw_user set uname=?,upwd=?,email=?,phone=?,gender=? where uid=?";
	pool.query(sql,[$uname,$upwd,$email,$phone,$gender,$uid],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//用户列表
router.get("/v1/userlist",(req,res)=>{
	var sql="select * from rw_user";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
module.exports=router;