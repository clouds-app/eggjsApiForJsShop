/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // 自定义配置
  config.customSetting ={
	  apiUrl:'www.baidu.com'
  }
  // egg 的默认安全系统，前后端不分离的情况下需要注意，每次在前端发送 post 请求的时候必须读取一个 cookie 字段 : csrfToken 放在 header 请求头里面，每次请求的时候 egg 会帮我们验证一次，所以我们需要重新配置一下
  config.security = {
	   csrf: {
	     enable: false,
	   }
	}
  // 把默认的.ejs改成.html
    config.view = {
      mapping: {
        '.html': 'ejs',
      },
    };	
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1595340643517_6233';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
