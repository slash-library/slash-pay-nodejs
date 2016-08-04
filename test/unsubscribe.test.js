var should = require('chai').should(),
    srcValidate = require('../src/validate');

describe('#validate unsubscribe', function() {
    
    it('verifies all parameters as valid', function() {
        srcValidate.checkUnsubscribeParams({            
            subscription_id: 'SUBSCRIPTION_ID'
        }).pass.should.equal(true);
    });    
    
    it('verifies invalid <subscription_id> parameter <null> as false', function() {
        srcValidate.checkUnsubscribeParams({ 
        }).pass.should.equal(false);
    });    
    
});