# What is this ?
This is a simple lightweight **Nodejs Time Ago module**,
that supports different languges and you can contribute to add yours.

# Works with any date format
Just give it any date format you will get the same result.

## Languges available for now are:
`ar: arabic, en: english, de: german, vn: vietnamese`

# Display formats

```javascript
// Default is this
timeAgo('2020-01-01 19:48:45', 'en'); // will return, 1. January

// Ago format
timeAgo('2020-01-01 19:48:45', 'en', 'ago'); // will return, 2mo ago

```


# Usage
after installing nta (Node Time ago) module with `npm i nta`

```javascript
const timeAgo = require('nta');

// parameters are: date, language, format
timeAgo(new Date, 'en', 'ago')
```

## Accessible to your views ?

```javascript
app.locals.timeAgo = timeAgo
```
Thats is it, the timeAgo function is now accessible to all of your views you can use it as specified above.


***Dont Forget to contribute by adding your language***