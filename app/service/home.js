'use strict';

const BaseService = require('./base.js');
class HomeService extends BaseService {
    async getData() {
       const user = ['111','222']
       return user;
     }
}
module.exports = HomeService;