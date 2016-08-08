# slash.us-client #

A node module for accessing Slash.Us API on your own server script.

### Installation ###

`npm install slash.us-client`

### Usage ###

#### Init slash client with constructing method ####

`var slashClient = require('slash.us-client')({api_token: 'YOUR_TOKEN'});`

#### Init slash client with init method ####

`var slashClient = require('slash.us-client').init({api_token: 'YOUR_TOKEN'});`

or 

```javascript
var slashClient = require('slash.us-client');
slashClient = slashClient.init({api_token: 'YOUR_TOKEN'});

```
## Checkout API ##

#### Pay by card number ####

```javascript
slashClient.pay({
    cc_no: '4111111111111111',
    total: 999,
    first_name: 'Sean',
    last_name: 'Nuon',
    currency: 'USD',
    expiry_month: '05',
    expiry_year: '2021',
    cvv: '566'
}, function (er, result){
    if (er){
        return console.log(er);
    }
    // Do something else with payment result
});

```

#### Pay by token ####

```javascript
slashClient.charge({
    token: 'YOUR_CARD_TOKEN',
    total: 999
}, function (er, result){
    if (er){
        return console.log(er);
    }
    // Do something else with payment result
});

```

## Subscribe API

#### Subscribe ####

```javascript
slashClient.subscribe({
    token: 'YOUR_CARD_TOKEN',
    total: 999
}, function (er, result){
    if (er){
        return console.log(er);
    }
    // Do something else with payment result
});

```
#### Unsubscribe ####

```javascript
slashClient.subscribe({
    subscription_id: 'SUBSCRIPTION_ID'
}, function (er, result){
    if (er){
        return console.log(er);
    }
    // Do something else with payment result
});

```

## Redirect API

#### Redirect ####

```javascript
slashClient.redirect({
    items: [{
        name: 'Item',
        amt: 10,
        qty: 1
    }],
    return_url: 'SUCCESS_URL',
    cancel_url: 'FAIL_URL',
    currency: 'USD'
}, function (er, result){
    if (er){
        return console.log(er);
    }
    // Do something else with payment result
});

```

#### Confirm ####

```javascript
slashClient.confirm({
    transaction_id: 'TRANSACTION_ID'
}, function (er, result){
    if (er){
        return console.log(er);
    }
    // Do something else with payment result
});

```

### Test ###

To run unit testing use this command: `npm test`

### License ###

* To be added