const timeAgo = require('../nta.min.js');

describe('en', () => {
    describe('ago format', () => {
        test('Just now', () => {
            var just_now = new Date();
            expect(timeAgo(just_now, 'en')).toBe('now');
        });

        test('minutes', () => {
            var last_min_date = new Date(new Date() - (60 * 1000));
            expect(timeAgo(last_min_date, 'en')).toBe('a minute ago');
        });

        test('hours', () => {
            var _20_hrs_date = new Date(new Date() - (60 * 60 * 20 * 1000));
            expect(timeAgo(_20_hrs_date, 'en')).toBe('20hrs ago');
        });

        test('days', () => {
            var _5_days_date = new Date(new Date() - (60 * 60 * 24 * 5 * 1000));
            expect(timeAgo(_5_days_date, 'en')).toBe('5d ago');
        });

        test('weeks', () => {
            var _3_weeks_date = new Date(new Date() - (60 * 60 * 24 * 7 * 3 * 1000));
            expect(timeAgo(_3_weeks_date, 'en')).toBe('3w ago');
        });

        test('months', () => {
            var _7_months_date = new Date(new Date() - (2629440 * 7 * 1000));
            expect(timeAgo(_7_months_date, 'en')).toBe('7mo ago');
        });

        test('years', () => {
            var _5_years_date = new Date(new Date() - (31553280 * 5 * 1000));
            expect(timeAgo(_5_years_date, 'en')).toBe('5 years ago');
        });

    });

    // full format
    describe('full format', () => {
        test('full format', () => {

            var yesterday_date = new Date(new Date() - (60 * 60 * 24 * 1000));
            expect(timeAgo(yesterday_date, 'en', 'full')).toBe('Yesterday');

            // var last_week_date = new Date(new Date() - (60 * 60 * 24 * 7 * 1000));
            // expect(timeAgo(last_week_date, 'ar', 'full')).toBe(`April ${last_week_date.getDate()}`);

        });
    })
})

