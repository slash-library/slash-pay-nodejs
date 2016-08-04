var should = require('chai').should(),
    srcValidate = require('../src/validate');

describe('#validate charge', function() {
    
    it('verifies all parameters as valid', function() {
        srcValidate.checkPayTokenParams({            
            token: '4111111111111111',
            total: 99
        }).pass.should.equal(true);
    });    
    
    it('verifies invalid <total> parameter <0> as false', function() {
        srcValidate.checkPayTokenParams({            
            token: '4111111111111111',
            total: 0
        }).pass.should.equal(false);
    });
    
    it('verifies invalid <total> parameter <-99> as false', function() {
        srcValidate.checkPayTokenParams({            
            token: '4111111111111111',
            total: -99
        }).pass.should.equal(false);
    });
    
    it('verifies invalid <total> parameter <string> as false', function() {
        srcValidate.checkPayTokenParams({            
            token: '4111111111111111',
            total: 'string'
        }).pass.should.equal(false);
    });    
    
});