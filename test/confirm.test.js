var should = require('chai').should(),
    srcValidate = require('../src/validate');

describe('#validate confirm', function() {
    
    it('verifies all parameters as valid', function() {
        srcValidate.checkConfirmParams({       
            "transaction_id": "57a1c14052ff12c62b10781f"
        }).pass.should.equal(true);
    });    
    
    it('verifies invalid <transaction_id> parameter <null> as false', function() {
        srcValidate.checkConfirmParams({       
        }).pass.should.equal(false);
    });
    
});