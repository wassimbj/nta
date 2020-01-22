"use strict";
/**
 * Time Languages
 * By the way the "!t" word is a constant it will be replaced with ago date so dont
 */
var langs = {
    /* Arabic languge */
    'ar': {
        'MONTH_NAMES': [
            'جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان',
            'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
        ],
        ago: {
            now: 'الآن',
            sec: 'منذ !t ثواني',
            onemin: 'منذ دقيقة واحدة',
            min: 'منذ !t دقيقة',
            onehour: 'منذ ساعة',
            hrs: 'منذ !t ساعات', // e.g: 2hrs ago
            oneday: 'منذ يوم',
            days: 'منذ !t أيام', // e.g: 5d ago
            oneweek: 'منذ أسبوع',
            weeks: 'منذ !t اسابيع', //e.g: 5w ago
            onemonth: 'منذ شهر',
            months: 'منذ !t أشهر',
            oneyear: 'منذ عام',
            years: 'منذ !t سنوات',
            today: 'اليوم',
            yesterday: 'البارحة'
        }
    },

    /* English languge */
    'en': {
        'MONTH_NAMES': [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ],
        ago: {
            now: 'now',
            sec: '!ts ago', //e.g: 2s ago
            onemin: 'one minute ago',
            min: '!tmin ago', //e.g: 5min ago
            onehour: 'an hour ago',
            hrs: '!thrs ago', // e.g: 2hrs ago
            oneday: 'a day ago',
            days: '!td ago', // e.g: 5d ago
            oneweek: 'a week ago',
            weeks: '!tw ago', //e.g: 5w ago
            onemonth: 'a month ago',
            months: '!tmo ago',
            oneyear: 'a year ago',
            years: '!t years ago',
            today: 'Today',
            yesterday: 'Yesterday'
        }
    },

    /* German languge */
    'de': {
        'MONTH_NAMES': [
            "Januar", "Februar", "März", "April",  "Mai", "Juni", 
            "Juli", "August", "September", "Oktober", "November", "Dezember"
        ],
        ago: {
            now: 'jetzt',
            sec: 'Vor !t sec',
            onemin: 'vor einer Minute',
            min: 'vor !t Minuten',
            onehour: 'vor einer Stunde',
            hrs: 'vor !t Stunden', // e.g: 2hrs ago
            oneday: 'vor einem Tag',
            days: 'vor !t Tagen', // e.g: 5d ago
            oneweek: 'vor einer Woche',
            weeks: 'Vor !t Wochen', //e.g: 5w ago
            onemonth: 'vor einem Monat',
            months: 'vor !t Monaten',
            oneyear: 'vor einem Jahr',
            years: 'vor !t Jahren',
            today: 'Heute',
            yesterday: 'Gestern'
        }
    },
};