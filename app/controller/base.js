'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
	//api接口返回
	async message(data,msg) {
	    if(data){
			//{"success":false,"message":"请求没有携带参数","result":null,"code":-1}
	        this.ctx.body = {
	            success: true,
	            message:msg,
	            code:200,
	            data,
	        };
	    }else{
	        this.ctx.body = {
	            success: false,
	            code:-1,
	            message:msg,
	            data:null,
	        };
	    }
	};
}

module.exports = BaseController;
