
function getFormattedDate(date, lang, prefomattedDate, hideYear){
    var day = date.getDate();
    var month = langs[lang].MONTH_NAMES[date.getMonth()];
    var year = date.getFullYear();
    var minutes = date.getMinutes();

    if (minutes < 10) {
        // Adding leading zero to minutes
        minutes = '0'+minutes;
    }

    if (prefomattedDate) {
        // Today
        // Yesterday
        return prefomattedDate;
    }

    if (hideYear) {
        // 10. January
        // return `${day}. ${month}`;
        return day+'. '+month;
    }

    // 10. January 2017.
    // return `${day}. ${month} ${year}`;
    return ''+day+'. '+month+' '+year+'';
};

// Return a full format, 14, January 2019
function fullFormat(dateToConvert, lang){
    if (!dateToConvert) {
        return null;
    }

    var date = typeof dateToConvert === 'object' ? dateToConvert : new Date(dateToConvert);
    var DAY_IN_MS = 86400000; // 24(Hours in a day) * 60(Min in Hours) * 60(Secs in Min) * 1000(Ms in Sec)
    var today = new Date();
    var yesterday = new Date(today - DAY_IN_MS);
    var seconds = Math.round((today - date) / 1000);
    var minutes = Math.round(seconds / 60);
    var isToday = today.toDateString() === date.toDateString();
    var isYesterday = yesterday.toDateString() === date.toDateString();
    var isThisYear = today.getFullYear() === date.getFullYear();


    if (seconds < 5) {
        return langs[lang].ago.now;
    } else if (seconds < 60) {
        return langs[lang].ago.sec.replace('!t', seconds);
    } else if (seconds < 90) {
        return langs[lang].ago.onemin;
    } else if (minutes < 60) {
        return langs[lang].ago.min.replace('!t', minutes);
    } else if (isToday) {
        return getFormattedDate(date, lang, langs[lang].ago.today); // Today
    } else if (isYesterday) {
        return getFormattedDate(date, lang, langs[lang].ago.yesterday); // Yesterday
    } else if (isThisYear) {
        return getFormattedDate(date, lang, false, true); // 10. January
    }

    return getFormattedDate(date, lang); // 10. January 2017.
};

// ago format (9w ago, 1min ago...)
function agoFormat(dateToConvert, lang){

    if(!dateToConvert)
        return null

     var time_ago = Date.parse(dateToConvert) / 1000;
     var current_time  = Date.parse(new Date()) / 1000;
     var diff = current_time - time_ago;

       var sec    = diff;
       var min    = Math.round(diff / 60); // 1min = 60 seconds
       var hours  = Math.round(diff / 3600); // 3600 = 60min * 60min
       var day    = Math.round(diff / 86400); // 86400 = 24h * 60min * 60min
       var week   = Math.round(diff / 604800); // 604800 = 7d * 24h * 60min * 60min
       var month  = Math.round(diff / 2629440); // months
       var year   = Math.round(diff / 31553280); // years
       // secondes
       if(sec <= 60){
          if(sec <= 5){
            return langs[lang].ago.now;
          }else{
              return sec+'s ago';
          }
       }else if(min <= 60){
           if (min == 1) 
               return langs[lang].ago.onemin;
           else
                return langs[lang].ago.now.replace('!t', min);
      }else if(hours <= 24){
            if(hours == 1)
                return langs[lang].ago.onehour;
            else
                return langs[lang].ago.hrs.replace('!t', hours);
         }else if(day <= 7){
            if(day == 1)
                return langs[lang].ago.oneday;
            else
                return langs[lang].ago.days.replace('!t', day);
         }else if(week <= 4.3){
            if(week == 1)
                return langs[lang].ago.oneweek;
            else
                return langs[lang].ago.weeks.replace('!t', week);
         }else if(month <=  12){
            if(month == 1)
                return langs[lang].ago.onemonth;
            else
                return langs[lang].ago.months.replace('!t', month);
         }else{
            if(year == 1)
                return langs[lang].ago.oneyear;
            else
                return langs[lang].ago.years.replace('!t', year);
         }

};

function timeAgo(date, lang, format)
{
    if(format == 'ago')
        return agoFormat(date, lang);
    else
        return fullFormat(date, lang);
};

module.exports = timeAgo;