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
	let requestData = this.ctx.request.body
    this.message(requestData, "返回数据");
  }
}

module.exports = HomeController;
