/**
 * @fileOverview MemoryCache 内存缓存
 * @createTime 2018-05-21 19:33
 * @author {@link http://www.hxl2lgy.top|XiaoLiang He}
 * @version 0.0.1
 */
const cache = require("memory-cache");
const util = require("util");
const EXPIRED_MAP = {};

/**
 * @description 设置缓存过期时间
 * @param {string|array}key
 * @param {number}expired
 */
exports.registerExpiredTime = R.curry(function(key, expired) {
    if (key instanceof Array) key = key.join(".");
    EXPIRED_MAP[key] = Number(expired);
})

/**
 * @description 保存缓存
 * @param key  键值
 * @param val 保存值
 * @param {number}expired 过期时间单位秒
 * @return val 保存值
 */
exports.save = R.curry(function( key, val , expired ){
    let saveKey = key;
    if( key instanceof Array ){
        saveKey = key.join(".");
    }
    if (!expired) expired = EXPIRED_MAP[key];
    cache.put(saveKey, val, expired ? (expired * 1000) : undefined );
    return val;
})

/**
 * @description 读取存储的值
 * @param key 键值
 * @return {*}
 */
exports.read = function( key ){
    let saveKey = key;
    if( key instanceof  Array ) saveKey = key.join(".");
    return cache.get(saveKey);
}

/**
 * @description 删除存储的值
 * @param key
 * @return {boolean} 键值是否已经被删除
 */
exports.remove = function(key){
    let saveKey = key;
    if( key instanceof  Array ) saveKey = key.join(".");
    return cache.del(saveKey);
}