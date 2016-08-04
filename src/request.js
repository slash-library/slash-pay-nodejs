exports = module.exports = (function() {
    'use strict';
    
    var methods = {};
    var assert = require('assert');
    var api = require('./api.js');
    var request = require('request');    
    
    var queryBuilder = function(keyValuePair) {

        var query = "";
        for(var k in keyValuePair){
            var v = keyValuePair[k];         

            if (v != null && v != undefined) {
                if (query != '') {
                    query = query + "&" + k + "=" + v;
                } else {
                    query = "?" + k + "=" + v;
                }
            }
        }

        return query;

    };

    /**
     * Get method call
     * Params:
     *      - endPoint: the end point name (e.g. pay, sms)
     *      - params: the query parameter (e.g. {limit: 10} equivalent to ?limit=10)
     */
    methods.get = function (endPoint, params, headers, callback){
        params = params || {};
        if (typeof params !== 'object'){
            params = {};
        }
        
        headers = headers || {};
        
        return request({
            url: api.apiUrl + api.version + '/' + endPoint + queryBuilder(params), 
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + headers.apiKey,
                'Content-Type': 'application/json'
            }
        }, function (er, res, data){
            if (data){
                if (data.success){
                    callback(null, res, data);
                }
                else{
                    callback(data, res, null);
                }
            }
            else{
                callback(er, res, data);
            }
        });
    };

    /**
     * Post method call
     * Params:
     *      - endPoint: the end point name (e.g. pay, sms)
     *      - params: the body parameter (e.g. {cc_no: ''})
     */
    methods.post = function (endPoint, params, headers, callback){
        params = params || {};
        if (typeof params !== 'object'){
            params = {};
        }
        
        headers = headers || {};
        
        return request({
            url: api.apiUrl + api.version + '/' + endPoint, 
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Authorization': 'Bearer ' + headers.apiKey,
                'Content-Type': 'application/json'
            }
        }, function (er, res, data){
            if (data){
                try{
                    data = JSON.parse(data);
                }
                catch (e){
                    
                }
                if (data.success){
                    callback(null, res, data);
                }
                else{
                    callback(data, res, null);
                }
            }
            else{
                callback(er, res, data);
            }
        });
    };
    
    
    return methods;
}());