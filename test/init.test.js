var should = require('chai').should(),
    srcValidate = require('../src/validate');

describe('#validate init', function() {
    
    it('verifies constructor parameter as valid', function() {
        srcValidate.checkConstructorParams({
            publicKey: 'TOKEN',
            privateKey: 'TOKEN',
        }).pass.should.equal(true);
    });

    it('verifies constructor parameter <null> is not object', function() {
        srcValidate.checkConstructorParams(null).pass.should.equal(false);
    });

    it('verifies constructor parameter <string> is not object', function() {
        srcValidate.checkConstructorParams('params').pass.should.equal(false);
    });

    it('verifies constructor parameter <number> is not object', function() {
        srcValidate.checkConstructorParams(100).pass.should.equal(false);
    });

    it('verifies constructor parameter without publicKey and privateKey is not valid', function() {
        srcValidate.checkConstructorParams({
        }).pass.should.equal(false);
    });
    
});
