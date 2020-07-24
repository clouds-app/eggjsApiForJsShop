'use strict';

const BaseService = require('./base.js');
class UserService extends BaseService {
     async login(params) {
		 console.log('=======login========'+JSON.stringify(params))
      let userName = params.mobile
	  let userPassword = params.password
	  console.log('=======login==userName========'+userName)
	  console.log('=======login==userPassword========'+userPassword)
	  if(!!userName && !!userPassword){
		  return true;
	  }else{
		  return false;
	  }
     }
}
module.exports = UserService;