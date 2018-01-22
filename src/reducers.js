let defaultState = {
    beginDate: null,
    totalDays: null,
    countryCode: null
};

function calendar(state = defaultState, action) {
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
                ...defaultState
            };
        default:
            return state
    }
}

export default calendar;