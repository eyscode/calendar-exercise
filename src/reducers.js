let defaultStateCalendar = {
    beginDate: null,
    totalDays: null,
    countryCode: null
};

export function calendar(state = defaultStateCalendar, action) {
    switch (action.type) {
        case "SHOW_CALENDAR":
            return {
                ...state,
                beginDate: action.data.beginDate,
                totalDays: parseInt(action.data.totalDays),
                countryCode: action.data.countryCode
            };
        case "CLEAR_CALENDAR":
            return {
                ...state,
                ...defaultStateCalendar
            };
        default:
            return state
    }
}

export function holidays(state = {}, action) {
    switch (action.type) {
        case "LOAD_HOLIDAYS":
            const holidaysMap = {};
            action.data.holidays.forEach((holiday)=>{
                const day = new Date(holiday.date).getUTCDate();
                holidaysMap[day] = holiday;
            });
            if (state[action.data.countryCode]) {
                if (state[action.data.countryCode][action.data.year]) {
                    return {
                        ...state,
                        [action.data.countryCode]: {
                            ...state[action.data.countryCode],
                            [action.data.year]: {
                                ...state[action.data.countryCode][action.data.year],
                                [action.data.month]: holidaysMap
                            }
                        }
                    }
                } else {
                    return {
                        ...state,
                        [action.data.countryCode]: {
                            ...state[action.data.countryCode],
                            [action.data.year]: {
                                [action.data.month]: holidaysMap
                            }
                        }
                    }
                }
            } else {
                return {
                    ...state,
                    [action.data.countryCode]: {
                        [action.data.year]: {
                            [action.data.month]: holidaysMap
                        }
                    }
                }
            }
        default:
            return state
    }
}