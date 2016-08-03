var should = require('chai').should(),
    srcValidate = require('../src/validate');

describe('#validate init', function() {
    
    it('verifies constructor parameter as valid', function() {
        srcValidate.checkConstructorParams({
            api_token: 'TOKEN',
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

    it('verifies constructor parameter without api_token is not valid', function() {
        srcValidate.checkConstructorParams({
        }).pass.should.equal(false);
    });
    
});

describe('#validate pay by card number', function() {
    
    it('verifies all parameters as valid', function() {
        srcValidate.checkPayCardNumberParams({            
            cc_no: '4111111111111111',
            total: 99,
            first_name: 'Promsopheak',
            last_name: 'Nuon',
            currency: 'USD',
            expiry_month: '05',
            expiry_year: '2021',
            cvv: '566'
        }).pass.should.equal(true);
    });    
    
    it('verifies invalid <cc_no> parameter as false', function() {
        srcValidate.checkPayCardNumberParams({            
            cc_no: '411111111111',
            total: 99,
            first_name: 'Promsopheak',
            last_name: 'Nuon',
            currency: 'USD',
            expiry_month: '05',
            expiry_year: '2021',
            cvv: '566'
        }).pass.should.equal(false);
    });
    
    it('verifies invalid <total> parameter <0> as false', function() {
        srcValidate.checkPayCardNumberParams({            
            cc_no: '4111111111111111',
            total: 0,
            first_name: 'Promsopheak',
            last_name: 'Nuon',
            currency: 'USD',
            expiry_month: '05',
            expiry_year: '2021',
            cvv: '566'
        }).pass.should.equal(false);
    });
    
    it('verifies invalid <total> parameter <-99> as false', function() {
        srcValidate.checkPayCardNumberParams({            
            cc_no: '4111111111111111',
            total: -99,
            first_name: 'Promsopheak',
            last_name: 'Nuon',
            currency: 'USD',
            expiry_month: '05',
            expiry_year: '2021',
            cvv: '566'
        }).pass.should.equal(false);
    });
    
    it('verifies invalid <total> parameter <string> as false', function() {
        srcValidate.checkPayCardNumberParams({            
            cc_no: '4111111111111111',
            total: 'string',
            first_name: 'Promsopheak',
            last_name: 'Nuon',
            currency: 'USD',
            expiry_month: '05',
            expiry_year: '2021',
            cvv: '566'
        }).pass.should.equal(false);
    });
    
    it('verifies invalid <first_name> parameter <integer> as false', function() {
        srcValidate.checkPayCardNumberParams({            
            cc_no: '4111111111111111',
            total: 'string',
            first_name: 99,
            last_name: 'Nuon',
            currency: 'USD',
            expiry_month: '05',
            expiry_year: '2021',
            cvv: '566'
        }).pass.should.equal(false);
    });
    
    it('verifies invalid <last_name> parameter <integer> as false', function() {
        srcValidate.checkPayCardNumberParams({            
            cc_no: '4111111111111111',
            total: 99,
            first_name: 'Promsopheak',
            last_name: 99,
            currency: 'USD',
            expiry_month: '05',
            expiry_year: '2021',
            cvv: '566'
        }).pass.should.equal(false);
    });
    
    it('verifies invalid <currency> parameter <KH> as false', function() {
        srcValidate.checkPayCardNumberParams({            
            cc_no: '4111111111111111',
            total: 99,
            first_name: 'Promsopheak',
            last_name: 'Nuon',
            currency: 'KH',
            expiry_month: '05',
            expiry_year: '2021',
            cvv: '566'
        }).pass.should.equal(false);
    });
    
    it('verifies invalid <expiry_month> parameter <100> as false', function() {
        srcValidate.checkPayCardNumberParams({            
            cc_no: '4111111111111111',
            total: 99,
            first_name: 'Promsopheak',
            last_name: 'Nuon',
            currency: 'KH',
            expiry_month: '100',
            expiry_year: '2021',
            cvv: '566'
        }).pass.should.equal(false);
    });
    
    it('verifies invalid <expiry_year> parameter <21> as false', function() {
        srcValidate.checkPayCardNumberParams({            
            cc_no: '4111111111111111',
            total: 99,
            first_name: 'Promsopheak',
            last_name: 'Nuon',
            currency: 'KH',
            expiry_month: '100',
            expiry_year: '21',
            cvv: '566'
        }).pass.should.equal(false);
    });
    
    it('verifies invalid <cvv> parameter <99> as false', function() {
        srcValidate.checkPayCardNumberParams({            
            cc_no: '4111111111111111',
            total: 99,
            first_name: 'Promsopheak',
            last_name: 'Nuon',
            currency: 'KH',
            expiry_month: '100',
            expiry_year: 'cvv',
            cvv: '99'
        }).pass.should.equal(false);
    });
    
});

describe('#validate pay by token', function() {
    
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