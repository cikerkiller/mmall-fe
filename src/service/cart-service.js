/*
* @Author: ciker
* @Date:   2018-04-26 22:23:52
* @Last Modified by:   ciker
* @Last Modified time: 2018-04-26 22:26:46
*/
getCartCount
/*
* @Author: ciker
* @Date:   2018-04-26 22:07:02
* @Last Modified by:   ciker
* @Last Modified time: 2018-04-26 22:20:16
*/
var _mm = require('util/mm.js');

var _cart = {
	//获得购物车数量
	getCartCount : function(resolve,reject){
		_mm.request({
			url : _mm.getServerUrl('/cart/get_cart_product_count.do'),
			method : 'POST',
			success : resolve,
			error :reject
		});

	}
}


module.exports = _cart; 