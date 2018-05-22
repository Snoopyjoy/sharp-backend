/**
 * @fileOverview Utils
 * @createTime 2018-03-30 17:52
 * @author {@link http://www.hxl2lgy.top|XiaoLiang He}
 * @version 0.0.1
 */
/**
 * @constuctor Utils
 * @description 通用工具
 * @since version 0.0.1
 * @exapmle
 */
class Utils {
    /**
     * @constructor 构造函数
     */
    constructor() {
    }

    /**
     * @description 检查邮件地址是否规范
     * @param {string}str 邮件地址
     * @return {boolean}
     */
    static checkEmailFormat( str ){
        if ( !str || typeof str != 'string') return false;
        const re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        return re.test(str);
    }

    /**
     * @description 检查中国大陆手机号码是否符合规范
     * @param {string}str 手机号码
     * @return {boolean}
     */
    static checkCNCellPhone(str){
        if ( !str || (typeof str) != 'string' || str == "" || str == "undefined" || str == "null") return false;
        const re = /^1\d{10}$/;
        if( str.indexOf(",") != -1 ){
            const p = str.split(",");
            return p.every((v)=>re.test(v));
        }else{
            return re.test(str);
        }
    }

    /**
     * @description 随机生成字符串
     * @param {int|string}len
     * @return {string}
     */
    static randomString( len ){
        const parts = [
            [ 48, 57 ], //0-9
            [ 65, 90 ], //A-Z
            [ 97, 122 ]  //a-z
        ];
        let pwd = "";
        for (let i = 0; i < len; i++)
        {
            let part = parts[Math.floor(Math.random() * parts.length)];
            let code = part[0] + Math.floor(Math.random() * (part[1] - part[0]));
            let c = String.fromCharCode(code);
            pwd += c;
        }
        return pwd;
    }
}

module.exports = Utils;