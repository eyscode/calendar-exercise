HOLIDAYS_API_KEY = ''

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

function fetchHolydays(countryCode, month, year){
    return fetch('https://www.google.com/search?q=secret+sauce');
}