/**
 * @fileOverview Session
 * @createTime 2018-05-21 16:19
 * @author {@link http://www.hxl2lgy.top|XiaoLiang He}
 * @version 0.0.1
 */

const ioredis = require("ioredis");
const Utils = require("../utils/Utils");

/**
 * @description session 配置文件
 * @type {{prefix,tokenExpireTime,cacheExpireTime}}
 */
let config = {};

/**
 * @description 初始化
 * @param {Object}_config
 * @param {string}_config.prefix 键值前缀
 * @param {number}_config.tokenExpireTime 令牌有效时间(毫秒)
 * @param {number}_config.cacheExpireTime
 */
exports.init = function( _config ){
    config = _config;
}

exports.formatKey = function( key ){
    return config.prefix + "user_sess_" + key;
}

/**
 * @description 验证Session
 * @param {{userid,token}}sess session数据
 * @param userid 玩家ID
 * @param token 令牌
 * @return {boolean}
 */
exports.checkSess = R.curry(function( sess , userid , token ){
    return sess.userid === userid && sess.token === token;
});

/**
 * @description 存储Session信息
 * @param {Object}user 用户信息
 * @param {string}user.id 用户id 或_id或userid
 * @param {string}user.token 用户凭证
 * @param {*}user.type 用类型
 * @param {Object|string}user.extra 用户额外信息
 * @return {Object}session信息
 */
exports.save = function( user ){
    let userid = (user.id ? user.id : user.userid) || user._id;
    let tokentimestamp = Date.now();
    let key = exports.formatKey( userid );
    let sess = {
        userid: userid,
        token: user.token||Utils.randomString(16),
        tokentimestamp: tokentimestamp,
        type: user.type
    }
    if( user.extra ){
        sess.extra = (typeof user.extra === "string") ? user.extra : JSON.stringify(user.extra);
    }
    return new Promise((resolve, reject)=>{

    });
}

exports.remove = function( user ){

}

exports.removeByID = function( id ){

}

exports.refresh = function( user ){

}

exports.check = function( id, token ){

}