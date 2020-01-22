# What is this ?
This is a simple lightweight **Nodejs Time Ago module**,
that supports different languges and you can contribute to add yours.

# Works with any date format
Just give it any date format you will get the same result.

## Languges available for now are:
`ar: arabic, en: english, de: german`

# New !!
added a new "time ago format"
```
// Default is this, "full" format
timeAgo('2020-01-19T19:01:14.558Z', 'en'); // will return, 19. January

// New format, "ago" format
console.log(timeAgo('2020-01-19T19:01:14.558Z', 'en', 'ago')); // will return, 3d ago

```


# Usage
after installing nta (Node Time ago) module with `npm i nta`
```
const timeAgo = require('nta');

// paramaters are, date, languge, format (full, ago)
timeAgo(new Date, 'en', 'ago or full')
```

## Accessible to your views ?
```
app.locals.timeAgo = timeAgo
```
**Thats is it, the timeAgo function is now accessible to all of your views** you can use it as specified above.


### Dont Forget to add your langage in the lang.js file