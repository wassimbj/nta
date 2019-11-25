# What is this ?
This is a simple lightweight **Nodejs Time Ago module**,
that supports different languges and you can contribute to add yours.

# Works with any date format
Just give it any date format you will get the same result.

## Languge available for now are:
`ar: arabic, en: english, de: german`

# Usage
after installing nta (Node Time ago) module with `npm i nta`
```
const timeAgo = require('nta');

console.log(timeAgo(new Date, 'ar'))
```

## Accessible to your views ?
```
app.locals.timeAgo = timeAgo
```
**Thats is it, the timeAgo function is now accessible to all of your views** you can use it as specified above.


### Dont Forget to add your langage in the lang.js file