var webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var Ex = require('extract-text-webpack-plugin');
// 环境变量配置，dev / online
var WEBPACK_ENV         = process.env.WEBPACK_ENV || 'dev';
//html模板
const HtmlWebpackPlugin = require('html-webpack-plugin');

var getHtmlConfig=function(name){
    return {
         template : './src/view/'+name+'.html',
            filename : 'view/'+name+'.html',
            inject   : true,
            hash     : true,
            chunks   : ['common',name]
    }
}
var config= {
    entry: {
    	'common':['./src/page/common/index.js'],
    	'index':['./src/page/index/index.js'],
    	'login':['./src/page/login/index.js']
    },
    output: {
        path: './dist',
        publicPath  : '/dist/',
        filename: 'js/[name].js'
    },
    /*externals :{
    	'jquery' : 'window.jQuery'
    },*/
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: Ex.extract('style-loader', 'css-loader')  // 单独打包出CSS，这里配置注意下
            },
            {
                test: /\.(gif|png|jpg|jpeg|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=100&name=resource/[name].[ext]'
            },
            {
                test: /\.string$/, 
                loader: 'html-loader',
                query : {
                    minimize : true,
                    removeAttributeQuotes : false
                }
            }
        ]
    },
    resolve:{
        alias : {
            node_modules    : __dirname + '/node_modules',
            util            : __dirname + '/src/util',
            page            : __dirname + '/src/page',
            service         : __dirname + '/src/service',
            image           : __dirname + '/src/image'
        }
    },
    plugins:[
        //独立通用模块到js/base.js
    	new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename : 'js/base.js'
        }),
        //把css单独打包到文件里
        new Ex("css/[name].css"),
        //html模板的处理
        // new HtmlWebpackPlugin(getHtmlConfig('common')),
        new HtmlWebpackPlugin(getHtmlConfig('index')),
        new HtmlWebpackPlugin(getHtmlConfig('login')),
         /*new CleanWebpackPlugin(
            ['dist'],　 //匹配删除的文件
            {
                root: __dirname,       　　　　　　　　　　//根目录
                verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }
        )*/
    ]

};


module.exports =config;
if('dev' === WEBPACK_ENV){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}
