const HOLIDAYS_API_KEY = '73cd110f-60fa-413d-a1a9-610ce0ade6e4';

export function showCalendar(data) {
    return {
        type: 'SHOW_CALENDAR',
        data
    }
}

export function clearCalendar() {
    return {
        type: 'CLEAR_CALENDAR'
    }
}

function fetchHolidaysApi(countryCode, month, year) {
    return fetch(`https://holidayapi.com/v1/holidays?key=${HOLIDAYS_API_KEY}&year=${year}&country=${countryCode}&month=${month + 1}`);
}

function loadHolidays(holidays, countryCode, month, year) {
    return {
        type: 'LOAD_HOLIDAYS',
        data: {holidays, countryCode, month, year}
    };
}

export function fetchHolidays(data) {
    const {countryCode, month, year} = data;
    return function (dispatch, getState) {
        const state = getState();
        if (state.holidays[countryCode] && state.holidays[countryCode][year] && state.holidays[countryCode][year][month]) {
            return {
                type: 'ALREADY_LOADED_HOLIDAYS'
            };
        } else {
            return fetchHolidaysApi(countryCode, month, year).then(res => res.json()).then(
                data => {
                    dispatch(loadHolidays(data.holidays, countryCode, month, year));
                }
            );
        }
    };
}