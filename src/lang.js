/**
 * Time Languages
 * By the way the "!t" word is a constant it will be replaced with ago date so dont touch it
 */
var langs = {
    /* Arabic languge */
    ar: {
        'MONTH_NAMES': [
            'جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان',
            'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
        ],
        ago: {
            now: 'الآن',
            moments: 'منذ لحظات',
            sec: {
                many: 'منذ !t ثواني', // e.g: منذ 5 ثواني
                single: 'منذ !t ثانية' // e.g: منذ 30 ثانية
            },
            onemin: 'منذ دقيقة',
            min: {
                many: 'منذ !t دقائق', // e.g: قبل 10 دقائق
                single: 'منذ !t دقيقة' // e.g: قبل 15 دقيقة
            },
            onehour: 'منذ ساعة',
            hrs: {
                many: 'منذ !t ساعات', // e.g: منذ 10 ساعات
                single: 'منذ !t ساعة' // e.g: منذ 20 ساعة
            },
            oneday: 'منذ يوم',
            days: {
                many: 'منذ !t أيام', // e.g: 5d ago
                single: 'منذ !t يومًا'
            },
            oneweek: 'منذ أسبوع',
            weeks: {
                many: 'منذ !t اسابيع', //e.g: منذ 5 أسابيع
                single: 'منذ !t أسبوع' //e.g: منذ 11 أسبوع
            },
            onemonth: 'منذ شهر',
            months: {
                many: 'منذ !t أشهر',
                single: 'منذ !t شهرا'
            },
            oneyear: 'منذ عام',
            years: {
                many: 'منذ !t سنوات',
                single: 'منذ !t عاما'
            },
            today: 'اليوم',
            yesterday: 'البارحة'
        }
    },

    /* English languge */
    en: {
        'MONTH_NAMES': [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ],
        ago: {
            now: 'now',
            moments: 'moments ago',
            sec: '!ts ago', //e.g: 2s ago
            onemin: 'a minute ago',
            min: '!t min ago', //e.g: 5min ago
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
    de: {
        'MONTH_NAMES': [
            "Januar", "Februar", "März", "April",  "Mai", "Juni", 
            "Juli", "August", "September", "Oktober", "November", "Dezember"
        ],
        ago: {
            now: 'jetzt',
            moments: 'Sekunden zuvor',
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

    /* Vietnamese languge */
    vn: {
        'MONTH_NAMES': [
            "tháng Giêng", "Tháng hai", "tháng Ba", "Tháng 4", "có thể", "Tháng 6",
            "Tháng 7", "tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng 11", "Tháng 12"
        ],
        ago: {
            now: 'hiện nay',
            moments: 'Khoảnh khắc trước',
            sec: '!t giây trước', //e.g: 2s ago
            onemin: 'một phút trước',
            min: '!t phút trước', //e.g: 5min ago
            onehour: 'một giờ trước',
            hrs: '!t giờ trước', // e.g: 2hrs ago
            oneday: 'một ngày trước',
            days: '!t ngày trước', // e.g: 5d ago
            oneweek: 'một tuần trước',
            weeks: '!t tuần trước', //e.g: 5w ago
            onemonth: 'một tháng trước',
            months: '!t tháng trước',
            oneyear: 'một năm trước',
            years: '!t năm trước',
            today: 'Hôm nay',
            yesterday: 'Hôm qua'
        }
    },
};