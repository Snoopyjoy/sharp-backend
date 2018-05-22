/**
 * @fileOverview Entrance file App.js
 * @createTime 2018-03-21 10:59
 * @author <a href="www.hxl2lgy.top">XiaoLiang He</a>
 * @version 0.0.1
 */

require("./utils/GlobalUtils");
const cluster = require("cluster");
const MemoryCache = require("./model/MemoryCache");

/**
 * @class App
 * @description 主程序类
 * @requires lib/utils/GlobalUtils
 * @requires cluster
 * @author He XiaoLiang
 * @since version 0.0.1
 * @example const app = new App();
 */
class App{
    /**
     * @constructor
     */
    constructor(){
        /**
         * @func
         * @description 测试方法
         * @see App.sayName
         * @param {String}firstName
         * @param {String}secondName
         */
        this.sayName = R.curry(async function(firstName, secondName){
            MemoryCache.save("testKey")("value")(3);
            console.log(firstName + secondName);
            console.log( MemoryCache.read("testKey") );
        });
    }

    /**
     * @func
     * @description 执行
     */
    run(){

    }
}

module.exports = App;