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

#### Pay by token ####

```javascript
slashClient.payByToken({
    token: 'YOUR_CARD_TOKEN',
    total: 999
}, function (er, result){
    if (er){
        return console.log(er);
    }
    // Do something else with payment result
});

```
#### Pay by card number ####

```javascript
slashClient.payByCardNumber({
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

### Test ###

To run unit testing use this command: `npm test`

### License ###

* To be added