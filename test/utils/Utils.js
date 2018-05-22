const Utils = require('../../lib/utils/Utils');
const assert = require('assert');

describe('测试Utils', ()=>{
    before(()=>{
        console.log('开始测试Utils...');
    });
    describe('#checkEmailFormat()',()=>{
        it('检查邮件格式验证',( done )=>{
            assert.equal(true , Utils.checkEmailFormat( "abc@123.com" ));
            assert.equal(false , Utils.checkEmailFormat( "abc@123" ));
            done();
        });
    });
    describe('#checkCNCellPhone()',()=>{
        it('检查手机号',( done )=>{
            assert.equal(true , Utils.checkCNCellPhone( "18221242812" ));
            assert.equal(true , Utils.checkCNCellPhone( "18221242812,18352512149" ));
            assert.equal(false , Utils.checkCNCellPhone( "123456" ));
            done();
        });
    });
    describe('#randomString()',()=>{
        it('生成随机字符串',( done )=>{
            assert.equal(true , Utils.randomString( 3 ).length === 3 );
            assert.equal(true , Utils.randomString( -1 ) === "" );
            assert.equal(false , Utils.randomString( 4 ) === Utils.randomString( 4 ) );
            assert.equal(true , /^[0-9a-zA-Z]+$/.test( Utils.randomString( 9 ) ) );
            done();
        });
    });
});