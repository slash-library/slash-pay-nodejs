exports = module.exports = (function() {
    'use strict';
    
    var methods = {};
    var assert = require('assert');
    var luhn = require('luhn');
    var validator = require('validator');
    var util = require('util');
    var api = require('./api.js');
    /**
     * Checking Slash.us-client constructor required parameters
     * Params: 
     *      - @params : Object
     * Expected: 
     *      - params.api_token: required
     *      - params.api_secret: required
     */
    methods.checkConstructorParams = function (params){
        let messages = [];
        
        if (params === null || typeof params !== 'object'){
            messages.push('Options parameter must be a valid object.');
        }
        if ((params !== null && typeof params === 'object') && !params.publicKey){
            messages.push('Public Key field is not defined in options.');
        }
        if ((params !== null && typeof params === 'object') && !params.privateKey){
            messages.push('Private Key field is not defined in options.');
        }
        return {
            pass: !messages.length,
            validators: messages,
            messages: messages.join(', '),  
        };
    };
    
    /**
     * Valiating Card Number
     * Params:
     *      - @cardNumber: String
     * Expected:
     *      - cardNumber: a valid card number
     */
    methods.validateCardNumber = function (cardNumber){
        let messages = [];
        
        if (params === null || !luhn.validate(cardNumber)){
            messages.push('The card number provided is not a valid card.');
        }
        
        return {
            pass: !messages.length,
            validators: messages,
            messages: messages.join(', '),  
        };
        
    };
    
    /**
     * Checking Slash.us-client PayByCardNumber method required parameters
     * Params: 
     *      - @params : Object
     * Expected: 
     *      - params.cc_no: required
     *      - params.total: required
     *      - params.first_name: required
     *      - params.last_name: required
     *      - params.currency: required
     *      - params.expiry_month: required
     *      - params.expiry_year: required
     *      - params.cvv: required
     */
    methods.checkPayCardNumberParams = function (params){
        let messages = [];
        
        if (params === null || typeof params !== 'object'){
            messages.push('Options parameter must be a valid object.');
        }
        if ((params !== null && typeof params === 'object')){
            
            // Validate credit card
            if (!params.cc_no){
                messages.push('Credit card number field is required.');
            }
            else{
                if (!luhn.validate(params.cc_no)){
                    messages.push('The card number provided is not a valid card.');
                }
            }
            
            // Validate amount
            if (!params.total){
                messages.push('Amount field is required.');
            }
            else{
                if (!(params.total * 1 && 
                    params.total * 1 !== NaN &&
                    params.total > 0 )){
                    messages.push('Amount provided is not valid.');
                }
            }
            
            // Validate currency
            if (!params.currency){
                messages.push('Currency field is required.');
            }
            else{
                // TODO: Add more supported currency
                if (!validator.isAlpha(params.currency + '') || params.currency != 'USD'){
                    messages.push('Currency provided is not valid.');
                }
            }
            
            // Validate first name
            if (!params.first_name){
                messages.push('First name field is required.');
            }
            else{
                if (!validator.isAlpha(params.first_name + '')){
                    messages.push('First name provided is not valid.');
                }
            }
            
            // Validate last name
            if (!params.last_name){
                messages.push('Last name field is required.');
            }
            else{
                if (!validator.isAlpha(params.last_name + '')){
                    messages.push('Last name provided is not valid.');
                }
            }
                        
            // Validate expiry month
            if (!params.expiry_month){
                messages.push('Expiry month field is required.');
            }
            else{
                if (!validator.isNumeric(params.expiry_month + '') || 
                    (params.expiry_month * 1 < 1 || params.expiry_month * 1 > 12)){
                    messages.push('Expiry month provided is not valid.');
                }
            }
            
            // Validate expiry year
            if (!params.expiry_year){
                messages.push('Expiry year field is required.');
            }
            else{
                var date = new Date();
                if (!validator.isNumeric(params.expiry_year + '') || 
                    (params.expiry_year * 1 < date.getFullYear())){
                    messages.push('Expiry year provided is not valid.');
                }
            }     
             
            // Validate cvv
            if (!params.cvv){
                messages.push('CVV field is required.');
            }
            else{
                var len = (params.cvv + '').length;
                
                if (!validator.isNumeric(params.cvv + '') || 
                    params.cvv * 1 == NaN || 
                    params.cvv * 1 < 1 ||
                    (len < 3 || len > 4)){
                    messages.push('CVV provided is not valid.');
                }
            }
            
        }
        
        return {
            pass: !messages.length,
            validators: messages,
            messages: messages.join(', '),  
        };
    };
    
    /**
     * Checking Slash.us-client PayByToken method required parameters
     * Params: 
     *      - @params : Object
     * Expected: 
     *      - params.token: required
     *      - params.total: required
     */
    methods.checkPayTokenParams = function (params){
        let messages = [];
            
        if (params === null || typeof params !== 'object'){
            messages.push('Options parameter must be a valid object.');
        }
        if ((params !== null && typeof params === 'object')){
            
            // Validate token
            if (!params.token){
                messages.push('Token field is required.');
            }
            
            // Validate amount
            if (!params.total){
                messages.push('Amount field is required.');
            }
            else{
                if (!(params.total * 1 && 
                    params.total * 1 !== NaN &&
                    params.total > 0 )){
                    messages.push('Amount provided is not valid.');
                }
            }
        }
            
        return {
            pass: !messages.length,
            validators: messages,
            messages: messages.join(', '),  
        };
    };
    
    
    /**
     * Checking Slash.us-client subscribe method required parameters
     * Params: 
     *      - @params : Object
     * Expected: 
     *      - params.token: required
     *      - params.plan_id: required
     */
    methods.checkSubscribeParams = function (params){
        
        let messages = [];
            
        if (params === null || typeof params !== 'object'){
            messages.push('Options parameter must be a valid object.');
        }
        if ((params !== null && typeof params === 'object')){
            
            // Validate token
            if (!params.token){
                messages.push('Token field is required.');
            }
            
            // Validate plan id
            if (!params.plan_id){
                messages.push('Plan id field is required.');
            }
        }
            
        return {
            pass: !messages.length,
            validators: messages,
            messages: messages.join(', '),  
        };
    };
    
    /**
     * Checking Slash.us-client unsubscribe method required parameters
     * Params: 
     *      - @params : Object
     * Expected: 
     *      - params.subscription_id: required
     */
    methods.checkUnsubscribeParams = function (params){
        
        let messages = [];
            
        if (params === null || typeof params !== 'object'){
            messages.push('Options parameter must be a valid object.');
        }
        if ((params !== null && typeof params === 'object')){
            // Validate subscription id
            if (!params.subscription_id){
                messages.push('Subscription id field is required.');
            }
        }
            
        return {
            pass: !messages.length,
            validators: messages,
            messages: messages.join(', '),  
        };
    };
    
    /**
     * Checking Slash.us-client redirect method required parameters
     * Params: 
     *      - @params : Object
     * Expected: 
     *      - params.subscription_id: required
     */
    methods.checkRedirectParams = function (params){
        
        let messages = [];
        // Validate all params
        if (params === null || typeof params !== 'object') {
            messages.push('Some fields are missing');
        }

        // Validate items list
        if (!params.items) {
            messages.push('Items field is missing');
        }
        else if (!util.isArray(params.items)) {
            messages.push('Items field is invalid');
        }
        else if (util.isArray(params.items)) {
            // Check field inside
            var hasError = false;
            for(var key in params.items){
                var value = params.items[key]; 
                if (!value.amt || !value.qty || !value.name){
                    hasError = true;
                }
            }
            if (hasError){
                messages.push('Items field of amt or qty or name is invalid');    
            }        
        }

        // Validate return url
        if (!params.return_url) {
            messages.push('Return url field is missing');
        }
        else if (!validator.isURL(params.return_url)){
            messages.push('Return url field is invalid');
        }

        // Validate cancel url
        if (!params.cancel_url) {
            messages.push('Cancel url field is missing');
        }
        else if (!validator.isURL(params.cancel_url)){
            messages.push('Cancel url field is missing');
        }
        
        // Validate currency
        if (!params.currency) {
            messages.push('Currency field is missing');
        }    
        
        return {
            pass: !messages.length,
            validators: messages,
            messages: messages.join(', '),  
        };
    };
    
    /**
     * Checking Slash.us-client confirm method required parameters
     * Params: 
     *      - @params : Object
     * Expected: 
     *      - params.subscription_id: required
     */
    methods.checkConfirmParams = function (params){
        
        let messages = [];
        // Validate form data
        if (params === null || typeof params !== 'object') {
            messages.push('Some fields are missing');
        }

        // Validate the transaction id
        if (!params.transaction_id) {
            messages.push('Transaction id field is missing');
        }
            
        return {
            pass: !messages.length,
            validators: messages,
            messages: messages.join(', '),  
        };
    };
    
    return methods;
}());