
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


// --- Main function
function timeAgo(dateParam, lang){
    if (!dateParam) {
        return null;
    }

    var date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
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
}

module.exports = timeAgo;