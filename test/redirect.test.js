var should = require('chai').should(),
    srcValidate = require('../src/validate');

describe('#validate redirect', function() {
    
    it('verifies all parameters as valid', function() {
        srcValidate.checkRedirectParams({            
            "items": [{
                "amt": 10,
                "name": "Test",
                "qty": 1
            }],
            "return_url": "https://www.google.com.kh",
            "cancel_url": "https://www.google.com.kh",
            "currency": "USD"
        }).pass.should.equal(true);
    });    
    
    it('verifies invalid <items> parameter <null> as false', function() {
        srcValidate.checkRedirectParams({      
            "return_url": "https://www.google.com.kh",
            "cancel_url": "https://www.google.com.kh",
            "currency": "USD"
        }).pass.should.equal(false);
    });   
    
    it('verifies invalid <items> parameter <missing qty> as false', function() {
        srcValidate.checkRedirectParams({  
            "items": [{
                "amt": 10,
                "name": "Test",
            }],    
            "return_url": "https://www.google.com.kh",
            "cancel_url": "https://www.google.com.kh",
            "currency": "USD"
        }).pass.should.equal(false);
    });
    
    it('verifies invalid <items> parameter <missing amt,qty> as false', function() {
        srcValidate.checkRedirectParams({  
            "items": [{
                "name": "Test",
            }],    
            "return_url": "https://www.google.com.kh",
            "cancel_url": "https://www.google.com.kh",
            "currency": "USD"
        }).pass.should.equal(false);
    });
    
    it('verifies invalid <items> parameter <missing amt,qty.name> as false', function() {
        srcValidate.checkRedirectParams({  
            "items": [{
            }],    
            "return_url": "https://www.google.com.kh",
            "cancel_url": "https://www.google.com.kh",
            "currency": "USD"
        }).pass.should.equal(false);
    });
    
    it('verifies invalid <return_url> parameter <null> as false', function() {
        srcValidate.checkRedirectParams({  
            "items": [{
                "amt": 10,
                "name": "Test",
                "qty": 1
            }],
            "cancel_url": "https://www.google.com.kh",
            "currency": "USD"
        }).pass.should.equal(false);
    });
    
    it('verifies invalid <return_url> parameter <invalid url> as false', function() {
        srcValidate.checkRedirectParams({  
            "items": [{
                "amt": 10,
                "name": "Test",
                "qty": 1
            }],
            "return_url": "google",
            "cancel_url": "https://www.google.com.kh",
            "currency": "USD"
        }).pass.should.equal(false);
    });
    
    it('verifies invalid <cancel_url> parameter <null> as false', function() {
        srcValidate.checkRedirectParams({  
            "items": [{
                "amt": 10,
                "name": "Test",
                "qty": 1
            }],
            "return_url": "https://www.google.com.kh",
            "currency": "USD"
        }).pass.should.equal(false);
    });
    
    it('verifies invalid <cancel_url> parameter <invalid url> as false', function() {
        srcValidate.checkRedirectParams({  
            "items": [{
                "amt": 10,
                "name": "Test",
                "qty": 1
            }],
            "return_url": "https://www.google.com.kh",
            "cancel_url": "google",
            "currency": "USD"
        }).pass.should.equal(false);
    });
    
});