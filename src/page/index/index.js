/*
* @Author: ciker
* @Date:   2018-04-07 23:09:04
* @Last Modified by:   ciker
* @Last Modified time: 2018-04-18 22:07:21
*/
'use strict'
console.log('hello index');

var _mm = require('util/mm.js');

_mm.request({
	url	: './test.do',
	success	: function(){

	},
	error : function(){
		
	}
});
