'use strict';

//const Controller = require('egg').Controller;
const BaseController = require('./base.js');
class HomeController extends BaseController {
  async index() {
	// this 包含以下对象
	// ctx: {
		// request: {},
		// response: {},
		// app: {},
		// originalUrl: "/?1111",
		// req: "<original node req>",
		// res: "<original node res>",
		// socket: "<original node socket>"
	// },
	// app: {},
	// config: {},
	// service: {}
	//this.message(true, "执行成功");
	//ctx.body = JSON.stringify(this);
    const { ctx } = this;
	let dataList = await this.service.home.getData()
	console.log(JSON.stringify(dataList))
    let renderPage = await this.ctx.render('index',{
		data:'hello world',
		list:dataList,
		apiUrl:this.config.customSetting.apiUrl
	})
  }
  async test() {
    const { ctx } = this;
    ctx.body = JSON.stringify(ctx);
  }
  async api() {
	// {mobile: "1111", password: "1111", method: "user.login"}
	let requestData = this.ctx.request.body
	let method = requestData.method
	if(!!method){

	   let paramsList = method.split('.');
	   let serviceName = paramsList[0]
	   let methodName = paramsList[1]
	   try{
			let errMessage=''
			if(!!this.service[serviceName]){
				//this.message(true, 'serviceName执行成功!');
			}else{
				errMessage ='serviceName执行失败!'
				return;
			}
			if(!!this.service[serviceName][methodName]){
				//this.message(true, 'methodName执行成功!');
			}else{
				errMessage ='methodName执行失败!'
				return;
			}
			if(!!errMessage){
			    this.message(false, errMessage);
			}else{
			    let handleMethod = await this.service[serviceName][methodName](requestData);
				this.message(!!handleMethod, '执行成功!');
			}
 
	   }catch(e){
	     this.message(false, '参数错误!'+JSON.stringify(requestData));
	   }
	 
	 
	}
   
  }
}

module.exports = HomeController;
