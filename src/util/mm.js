/*
* @Author: ciker
* @Date:   2018-04-18 21:37:07
* @Last Modified by:   ciker
* @Last Modified time: 2018-04-18 22:05:12
*/
var _mm = {
	request	: function(param){
		var _this = this;
		$.ajax({
			type 		: param.method 	|| 	'get',
			url			: param.url		||	'',
			dataType	: param.type 	||	'json',
			data 		: param.data 	||	'',
			success		: function(res){
				if('0' === res.status){
					typeof param.success === 'function' && param.success(res.data);
				}else if('10' === res.status){
					_this.doLogin();
				}else if('1' === res.status){
					typeof param.error === 'function' && param.error(res.msg);
				}
			},
			error		: function(err){
				typeof param.error === 'function' && param.error(err.statusText); 
			}
		});
	},
	doLogin	: function(){
		window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
	}
};
module.exports = _mm;