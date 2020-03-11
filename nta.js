"use strict";var langs={ar:{MONTH_NAMES:["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],ago:{now:"الآن",sec:"منذ !t ثواني",onemin:"منذ دقيقة واحدة",min:"منذ !t دقيقة",onehour:"منذ ساعة",hrs:"منذ !t ساعات",oneday:"منذ يوم",days:"منذ !t أيام",oneweek:"منذ أسبوع",weeks:"منذ !t اسابيع",onemonth:"منذ شهر",months:"منذ !t أشهر",oneyear:"منذ عام",years:"منذ !t سنوات",today:"اليوم",yesterday:"البارحة"}},en:{MONTH_NAMES:["January","February","March","April","May","June","July","August","September","October","November","December"],ago:{now:"now",sec:"!ts ago",onemin:"one minute ago",min:"!tmin ago",onehour:"an hour ago",hrs:"!thrs ago",oneday:"a day ago",days:"!td ago",oneweek:"a week ago",weeks:"!tw ago",onemonth:"a month ago",months:"!tmo ago",oneyear:"a year ago",years:"!t years ago",today:"Today",yesterday:"Yesterday"}},de:{MONTH_NAMES:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],ago:{now:"jetzt",sec:"Vor !t sec",onemin:"vor einer Minute",min:"vor !t Minuten",onehour:"vor einer Stunde",hrs:"vor !t Stunden",oneday:"vor einem Tag",days:"vor !t Tagen",oneweek:"vor einer Woche",weeks:"Vor !t Wochen",onemonth:"vor einem Monat",months:"vor !t Monaten",oneyear:"vor einem Jahr",years:"vor !t Jahren",today:"Heute",yesterday:"Gestern"}},vn:{MONTH_NAMES:["tháng Giêng","Tháng hai","tháng Ba","Tháng 4","có thể","Tháng 6","Tháng 7","tháng Tám","Tháng Chín","Tháng Mười","Tháng 11","Tháng 12"],ago:{now:"hiện nay",sec:"!t giây trước",onemin:"một phút trước",min:"!t phút trước",onehour:"một giờ trước",hrs:"!t giờ trước",oneday:"một ngày trước",days:"!t ngày trước",oneweek:"một tuần trước",weeks:"!t tuần trước",onemonth:"một tháng trước",months:"!t tháng trước",oneyear:"một năm trước",years:"!t năm trước",today:"Hôm nay",yesterday:"Hôm qua"}}};function getFormattedDate(e,t,a,n){var o=e.getDate(),r=langs[t].MONTH_NAMES[e.getMonth()],g=e.getFullYear(),s=e.getMinutes();return s<10&&(s="0"+s),a||(n?o+". "+r:o+". "+r+" "+g)}function fullFormat(e,t){if(!e)return null;var a="object"==typeof e?e:new Date(e),n=new Date,o=new Date(n-864e5),r=Math.round((n-a)/1e3),g=Math.round(r/60),s=n.toDateString()===a.toDateString(),m=o.toDateString()===a.toDateString(),h=n.getFullYear()===a.getFullYear();return r<5?langs[t].ago.now:r<60?langs[t].ago.sec.replace("!t",r):r<90?langs[t].ago.onemin:g<60?langs[t].ago.min.replace("!t",g):s?getFormattedDate(a,t,langs[t].ago.today):m?getFormattedDate(a,t,langs[t].ago.yesterday):h?getFormattedDate(a,t,!1,!0):getFormattedDate(a,t)}function agoFormat(e,t){if(!e)return null;var a=Date.parse(e)/1e3,n=Date.parse(new Date)/1e3-a,o=n,r=Math.round(n/60),g=Math.round(n/3600),s=Math.round(n/86400),m=Math.round(n/604800),h=Math.round(n/2629440),u=Math.round(n/31553280);return o<=60?o<=5?langs[t].ago.now:langs[t].ago.sec.replace("!t",o):r<=60?1==r?langs[t].ago.onemin:langs[t].ago.min.replace("!t",r):g<=24?1==g?langs[t].ago.onehour:langs[t].ago.hrs.replace("!t",g):s<=7?1==s?langs[t].ago.oneday:langs[t].ago.days.replace("!t",s):m<=4.3?1==m?langs[t].ago.oneweek:langs[t].ago.weeks.replace("!t",m):h<=12?1==h?langs[t].ago.onemonth:langs[t].ago.months.replace("!t",h):1==u?langs[t].ago.oneyear:langs[t].ago.years.replace("!t",u)}function timeAgo(e,t,a){return"ago"==a?agoFormat(e,t):fullFormat(e,t)}module.exports=timeAgo;