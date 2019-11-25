"use strict";
/**
 * Languages
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
            sec: '!t sec ago',
            onemin: 'one minute ago',
            min: '!t min ago',
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
            today: 'Heute',
            yesterday: 'Gestern'
        }
    },
};