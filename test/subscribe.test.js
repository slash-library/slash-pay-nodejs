var should = require('chai').should(),
    srcValidate = require('../src/validate');

describe('#validate subscribe', function() {
    
    it('verifies all parameters as valid', function() {
        srcValidate.checkSubscribeParams({            
            token: 'TOKEN',
            plan_id: 'PLAN'
        }).pass.should.equal(true);
    });    
    
    it('verifies invalid <token> parameter <null> as false', function() {
        srcValidate.checkSubscribeParams({ 
            plan_id: 'PLAN'
        }).pass.should.equal(false);
    });  
    
    it('verifies invalid <plan_id> parameter <null> as false', function() {
        srcValidate.checkSubscribeParams({ 
            token: 'TOKEN',
        }).pass.should.equal(false);
    });
    
    it('verifies invalid <token,plan_id> parameter <null> as false', function() {
        srcValidate.checkPayTokenParams({ 
        }).pass.should.equal(false);
    });    
    
});