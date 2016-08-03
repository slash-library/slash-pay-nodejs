// slash.us-client
/// Main file for require
'use strict';

module.exports = slashClient;

// Wrapped class
function slashClient (opt) {
    
    var validate = require('./src/validate.js');
    var api = require('./src/api.js');
    var assert = require('assert');
    var request = require('./src/request.js');
    
    // constructor params
    opt = opt || {};
    
    // validate params
    var testConstructor = validate.checkConstructorParams(opt);
    assert(testConstructor.pass, testConstructor.messages);

    // private data
    api.publicKey = opt.publicKey;
    api.privateKey = opt.privateKey;
    
    // private functions
    function noop(){}

    // API/data for end-user
    return {
        pay: function (params, callback){
            
            // Fallback callback
            callback = callback || noop;
            
            try{
                
                // Validate params
                var validateResult = validate.checkPayCardNumberParams(params);
                assert(validateResult.pass, validateResult.messages);
                
                var result = null;
                
                request.post('pay', params, {
                    apiKey: api.privateKey 
                }, function (err, res, body){
                    
                    if (err){
                        return callback(err, null);        
                    } 
                    callback(null, body);
                });
            }
            catch (er){
                callback(er, null);
            }
        },
        
        charge: function (params, callback){
            
            // Fallback callback
            callback = callback || noop;
            
            try{
                
                // Validate params
                var validateResult = validate.checkPayTokenParams(params);
                assert(validateResult.pass, validateResult.messages);
                
                var result = null;
                
                request.post('createcharge', params, {
                    apiKey: api.privateKey 
                }, function (err, res, body){
                    if (err){
                        return callback(err, null);        
                    } 
                    callback(null, body);
                });
            }
            catch (er){
                callback(er, null);
            }
        },
        
        subscribe: function (params, callback){
            
            // Fallback callback
            callback = callback || noop;
            
            try{
                
                // Validate params
                var validateResult = validate.checkSubscribeParams(params);
                assert(validateResult.pass, validateResult.messages);
                
                var result = null;
                
                request.post('subscribe', params, {
                    apiKey: api.privateKey 
                }, function (err, res, body){
                    if (err){
                        return callback(err, null);        
                    } 
                    callback(null, body);
                });
            }
            catch (er){
                callback(er, null);
            }
        },
        
        unsubscribe: function (params, callback){
            
            // Fallback callback
            callback = callback || noop;
            
            try{
                
                // Validate params
                var validateResult = validate.checkUnsubscribeParams(params);
                assert(validateResult.pass, validateResult.messages);
                
                var result = null;
                
                request.post('unsubscribe', params, {
                    apiKey: api.privateKey 
                }, function (err, res, body){
                    if (err){
                        return callback(err, null);        
                    } 
                    callback(null, body);
                });
            }
            catch (er){
                callback(er, null);
            }
        }
    }
}

// Fallback init function
slashClient.init = function (opt){
    return slashClient(opt);
};