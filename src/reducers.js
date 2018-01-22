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
            if (state[action.data.countryCode]) {
                if (state[action.data.countryCode][action.data.year]) {
                    return {
                        ...state,
                        [action.data.countryCode]: {
                            ...state[action.data.countryCode],
                            [action.data.year]: {
                                ...state[action.data.countryCode][action.data.year],
                                [action.data.month]: action.data.holidays
                            }
                        }
                    }
                } else {
                    return {
                        ...state,
                        [action.data.countryCode]: {
                            ...state[action.data.countryCode],
                            [action.data.year]: {
                                [action.data.month]: action.data.holidays
                            }
                        }
                    }
                }
            } else {
                return {
                    ...state,
                    [action.data.countryCode]: {
                        [action.data.year]: {
                            [action.data.month]: action.data.holidays
                        }
                    }
                }
            }
        default:
            return state
    }
}