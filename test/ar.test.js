const timeAgo = require('../nta.min.js');

describe('ar', () => {
    describe('ago format', () => {
        test('Just now', () => {
            var just_now = new Date();
            expect(timeAgo(just_now)).toBe('الآن');
        });

        test('minutes', () => {
            var last_min_date = new Date(new Date() - (60 * 1000));
            expect(timeAgo(last_min_date)).toBe('منذ دقيقة');
        });
        
        test('hours', () => {
            var _20_hrs_date = new Date(new Date() - (60 * 60 * 20 * 1000));
            expect(timeAgo(_20_hrs_date)).toBe('منذ 20 ساعة');
        });

        test('days', () => {
            var _5_days_date = new Date(new Date() - (60 * 60 * 24 * 5 * 1000));
            expect(timeAgo(_5_days_date)).toBe('منذ 5 أيام');
        });

        test('weeks', () => {
            var _3_weeks_date = new Date(new Date() - (60 * 60 * 24 * 7 * 3 * 1000));
            expect(timeAgo(_3_weeks_date)).toBe('منذ 3 اسابيع');
        });

        test('months', () => {
            var _7_months_date = new Date(new Date() - (2629440 * 7 * 1000));
            expect(timeAgo(_7_months_date)).toBe('منذ 7 أشهر');
        });

        test('years', () => {
            var _5_years_date = new Date(new Date() - (31553280 * 5 * 1000));
            expect(timeAgo(_5_years_date)).toBe('منذ 5 سنوات');
        });
        
    });

    // full format
    describe('full format', () => {
        test('full format, arabic language', () => {

            var yesterday_date = new Date(new Date() - (60 * 60 * 24 * 1000));
            expect(timeAgo(yesterday_date, 'ar', 'full')).toBe('البارحة');

            // var last_week_date = new Date(new Date() - (60 * 60 * 24 * 7 * 1000));
            // expect(timeAgo(last_week_date, 'ar', 'full')).toBe(`أفريل ${last_week_date.getDate()}`);

        });
    })
})

