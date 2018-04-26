/*
* @Author: ciker
* @Date:   2018-04-26 22:07:02
* @Last Modified by:   ciker
* @Last Modified time: 2018-04-26 22:20:16
*/
var _mm = require('util/mm.js');

var _user = {
	//登出
	logout : function(resolve,reject){
		_mm.request({
			url : _mm.getServerUrl('/user/logout.do'),
			method : 'POST',
			success : resolve,
			error :reject
		});

	},
	//检查登陆状态
	checkLogin : function(resolve,reject){
		_mm.request({
			url : _mm.getServerUrl('/user/get_user_info.do'),
			method : 'POST',
			success : resolve,
			error :reject
		});
	}
}


module.exports = _user; 