/**
 * Time ago module
 * version: 2.0.0
 * (c) 2020 wassim ben jdida, github/wassimbj
 */


(function(global, factory){
    "use strict";

    // import the helpful code based on the environment
    if(typeof module !== 'undefined' && typeof exports === 'object'){
        module.exports = factory(global);
    }
    else if(typeof define === 'function' && define.amd){
        define('nta', factory(global));
    }else{
        window.nta = factory(global);
    }


}(typeof window !== 'undefined' ? window : this, function(){
    "use strict";

    /*
      Very important, dont remove this comment down here, cause when we run the build command, 
      gulp will inject the langs object in the lang.js file here
    */
    //- inject:lang:js
    //- endinject
    // ###################################################
    

    // Helper
    // throw errors
    function throw_error(msg){
        throw new Error(msg);
    }

    // Helper
    // get formatted date for the fullFormat
    function getFormattedDate(date, lang, prefomattedDate, hideYear) {
        var day = date.getDate();
        var month = langs[lang].MONTH_NAMES[date.getMonth()];
        var year = date.getFullYear();
        var minutes = date.getMinutes();

        // Adding leading zero to minutes
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        // Today
        // Yesterday
        if (prefomattedDate) {
            return prefomattedDate;
        }

        // 10 January
        // return `${day} ${month}`;
        if (hideYear) {
            // Right to Left
            if(lang == 'ar'){
                return month + ' ' + day;
            }
            // else
            return month + ' ' + day;
        }

        // 10 January 2017
        // return `${day}. ${month} ${year}`;
        return '' + day + ' ' + month + ' ' + year + '';
    }

    // Return a full format, (e.g: 14, January 2019)
    function fullFormat(dateToConvert, lang) {
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
            if (seconds <= 5) {
                return langs[lang].ago.now;
            } else if (seconds >= 5 && seconds <= 20) {
                return langs[lang].ago.moments.replace('!t', seconds);
            } else {
                return langs[lang].ago.sec.single.replace('!t', seconds);
            }
        } else if (seconds > 60 && seconds < 90) {
            return langs[lang].ago.onemin;
        } else if (minutes < 60) {
            // for arabic
            if (lang == 'ar' && minutes >= 11) {
                return langs[lang].ago.min.single.replace('!t', minutes);
            } else if (lang == 'ar' && minutes <= 11) {
                return langs[lang].ago.min.many.replace('!t', minutes);
            }
            // else
            return langs[lang].ago.min.replace('!t', minutes);
        } else if (isToday) {
            return getFormattedDate(date, lang, langs[lang].ago.today); // Today
        } else if (isYesterday) {
            return getFormattedDate(date, lang, langs[lang].ago.yesterday); // Yesterday
        } else if (isThisYear) {
            return getFormattedDate(date, lang, false, true); // 10 January
        }

        return getFormattedDate(date, lang); // 10 January 2017
    }

    // ago format (e.g: 9w ago, 1min ago...)
    function agoFormat(dateToConvert, lang) {

        if (!dateToConvert)
            return null

        var time_ago = Date.parse(dateToConvert) / 1000;
        var current_time = Date.parse(new Date()) / 1000;
        var diff = current_time - time_ago;

        var sec = diff;
        var min = Math.round(diff / 60); // 1min = 60 seconds
        var hours = Math.round(diff / 3600); // 3600 = 60min * 60min
        var day = Math.round(diff / 86400); // 86400 = 24h * 60min * 60min
        var week = Math.round(diff / 604800); // 604800 = 7d * 24h * 60min * 60min
        var month = Math.round(diff / 2629440); // months
        var year = Math.round(diff / 31553280); // years

        // seconds
        if (sec < 60) {
            if (sec <= 5) {
                return langs[lang].ago.now;
            } else if (sec >= 5 && sec <= 20){
                return langs[lang].ago.moments.replace('!t', sec);
            } else {
                return langs[lang].ago.sec.single.replace('!t', sec);
            }
        } 

        // minutes
        else if (min <= 60) {
            if (min == 1){
                return langs[lang].ago.onemin;
            } else{
                // for arabic
                if(lang == 'ar' && min >= 11){
                    return langs[lang].ago.min.single.replace('!t', min);
                }else if(lang == 'ar' && min <= 11){
                    return langs[lang].ago.min.many.replace('!t', min);
                }
                // else
                return langs[lang].ago.min.replace('!t', min);
            }
        } 
        
        // hours
        else if (hours <= 24) {
            if (hours == 1){
                return langs[lang].ago.onehour;
            }else{
                // for arabic
                if (lang == 'ar' && hours >= 11) {
                    return langs[lang].ago.hrs.single.replace('!t', hours);
                } else if (lang == 'ar' && hours <= 11) {
                    return langs[lang].ago.hrs.many.replace('!t', hours);
                }
                // else
                return langs[lang].ago.hrs.replace('!t', hours);
            }
        } 
        
        // days
        else if (day <= 7) {
            if (day == 1)
                return langs[lang].ago.yesterday;
            else{
                // for arabic
                if (lang == 'ar' && day >= 11) {
                    return langs[lang].ago.days.single.replace('!t', day);
                } else if (lang == 'ar' && day <= 11) {
                    return langs[lang].ago.days.many.replace('!t', day);
                }
                // else
                return langs[lang].ago.days.replace('!t', day);
            }
        } 

        // weeks
        else if (week <= 4.3) {
            if (week == 1)
                return langs[lang].ago.oneweek;
            else{
                // for arabic
                if (lang == 'ar' && week >= 11) {
                    return langs[lang].ago.weeks.single.replace('!t', week);
                } else if (lang == 'ar' && week <= 11) {
                    return langs[lang].ago.weeks.many.replace('!t', week);
                }
                // else
                return langs[lang].ago.weeks.replace('!t', week);
            }
        } 
        
        // months
        else if (month <= 12) {
            if (month == 1)
                return langs[lang].ago.onemonth;
            else{
                // for arabic
                if (lang == 'ar' && month >= 11) {
                    return langs[lang].ago.months.single.replace('!t', month);
                } else if (lang == 'ar' && month <= 11) {
                    return langs[lang].ago.months.many.replace('!t', month);
                }
                // else
                return langs[lang].ago.months.replace('!t', month);
            }
        } 
        
        // years
        else {
            if (year == 1)
                return langs[lang].ago.oneyear;
            else{
                // for arabic
                if (lang == 'ar' && year >= 11) {
                    return langs[lang].ago.years.single.replace('!t', year);
                } else if (lang == 'ar' && year <= 11) {
                    return langs[lang].ago.years.many.replace('!t', year);
                }
                // else
                return langs[lang].ago.years.replace('!t', year);
            }
        }

    }

    // Main function
    // nta (time-ago) function
    function nta(date, lang, format) {
        if (!date) {
            throw_error('Please give the date as the first parameter');
        }

        // set default language to arabic
        var lang = lang ? lang : 'ar';

        if(format === 'full')
            return fullFormat(date, lang)
        
        // else
        return agoFormat(date, lang)

    }


    // return the function
    return nta;

}));