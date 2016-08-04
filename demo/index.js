var slashPay = require('../slash.us-client.js')({
    publicKey: 'slash_test_MCAwDQYJKoZIhvcNAQEBBQADDwAwDAIFALKbb0ECAwEAAQ==',
    privateKey: 'slash_test_MEMCAQAwDQYJKoZIhvcNAQEBBQAELzAtAgEAAgUAsptvQQIDAQABAgRsnXXBAgMA5vMCAwDF+wICAVUCAwCUbQIDAIZG'
});

// Pay API
var apiBase = process.env.API || 'https://api.slash.us.com/v1';
// console.log('[pay] Request to checkout by credit card');
slashPay.pay({
    "first_name": "Slash",
    "last_name": "Demo",
    "total": 100,
    "cc_no": "4012888888881881",
    "currency": "USD",
    "expiry_month": "09",
    "expiry_year": "2025",
    "cvv": "223"
}, function (er, data){
    console.log('[pay][result] Request to checkout by credit card');
    console.log('--> Error: ');
    console.log(er);
    console.log('--> Data: ');
    console.log(data); 
});

// Create charge
// console.log('[charge] Request to create charge by token');
slashPay.charge({
    "token": "$2a$04$NLv3wRRwiv4Vy1yPjt7rAeU45L03lSADVxcen4QfG5znNsx5VpPyS",
    "total": 100,
    "currency": "USD",
}, function (er, data){
    console.log('[charge][result] Request to create charge by token');
    console.log('--> Error: ');
    console.log(er);
    console.log('--> Data: ');
    console.log(data); 
});

// Subscribe: basic_monthly (stripe)
// console.log('[charge] Request to create charge by token');
slashPay.subscribe({
    "token": "$2a$04$OdV8QdCqCz4BjMIG7KfZpeTopVD6N7eaKS.4dkAMw1A.nerLq7Wn2",
    "plan_id": "basic_monthly",
}, function (er, data){
    console.log('[subscribe][result] Request to subscribe to plan by token');
    console.log('--> Error: ');
    console.log(er);
    console.log('--> Data: ');
    console.log(data); 
});

// Unsubscribe: basic_monthly (stripe)
// console.log('[charge] Request to create charge by token');
slashPay.unsubscribe({
    "token": "$2a$04$OdV8QdCqCz4BjMIG7KfZpeTopVD6N7eaKS.4dkAMw1A.nerLq7Wn2",
    "subscription_id": "sub_8wDgUbbZYVYLNq",
}, function (er, data){
    console.log('[unsubscribe][result] Request to unsubscribe to subscription by subscription id');
    console.log('--> Error: ');
    console.log(er);
    console.log('--> Data: ');
    console.log(data); 
});

// Redirect: Create redirect payment
slashPay.redirect({
    "items": [{
        "amt": 10,
        "name": "Test",
        "qty": 1
    }],
    "return_url": "https://www.google.com.kh",
    "cancel_url": "https://www.google.com.kh",
    "currency": "USD"
}, function (er, data){
    console.log('[redirect][result] Request to redirect payment');
    console.log('--> Error: ');
    console.log(er);
    console.log('--> Data: ');
    console.log(data); 
});

// Confirm: Confirm redirect payment
slashPay.confirm({
    "transaction_id": "57a1c14052ff12c62b10781f"
}, function (er, data){
    console.log('[confirm][result] Confirm the redirect payment');
    console.log('--> Error: ');
    console.log(er);
    console.log('--> Data: ');
    console.log(data); 
});

