## What is this ?
This is a simple lightweight **Nodejs Time Ago module**,
that supports different languges and you can contribute to add yours.

## works on the browser and server
if you want to use it on the **browser**, you must include the `nta.min.js` file into you html file
<br/>
else if you are using **server side rendering or any js framework**, just npm install it and import it as you import any other package 


## Languages available for now are:
`ar: arabic, en: english, de: german, vn: vietnamese`

## Display formats

```javascript
// ago format, this is the default format
timeAgo('2020-01-16 19:48:45', 'en', 'ago'); // will return: 3mo ago

// full format
timeAgo('2020-01-01 19:48:45', 'en'); // will return: 1 January

```


## Usage
after installing `nta`

```javascript
const timeAgo = require('nta');

timeAgo(new Date, 'en', 'ago')
```
<br/>
***params***
timeAgo function accepts 3 parameter wich are the `date, language, format`.
<br/> **the language is not required, arabic is set by default**
<br/> **the format is not required too, "ago" is set by default**


## Accessible to your views ?

```javascript
app.locals.timeAgo = timeAgo
```
Thats is it, nta is now accessible to all of your views you can use it as specified above.


**Dont Forget to contribute by adding your language or any other feature you like**