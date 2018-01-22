import React, {Component} from 'react';
import CalendarPage from "./CalendarPage";

class Calendar extends Component {

    render() {
        const {beginDate, totalDays, countryCode} = this.props;
        const beginDay = new Date(beginDate).getUTCDate();
        const beginMonth = new Date(beginDate).getUTCMonth();
        const beginYear = new Date(beginDate).getUTCFullYear();

        // TODO: use the countryCode in order to show holidays
        return this.getCalendarPages(beginDay, beginMonth, beginYear, totalDays);
    }

    getCalendarPages(beginDay, beginMonth, beginYear, totalDays) {
        if (totalDays <= 0) {
            return [];
        } else {
            const totalDaysInMonth = new Date(beginYear, beginMonth, 0).getDate();
            const page = <CalendarPage key={`${beginMonth}-${beginYear}`} beginDay={beginDay} totalDays={totalDays}
                                       month={beginMonth} year={beginYear}/>;
            const restDays = totalDays - (totalDaysInMonth - beginDay + 1);
            beginMonth = beginMonth >= 11 ? 0 : beginMonth + 1;
            beginYear = beginMonth === 0 ? beginYear + 1 : beginYear;
            return [page, ...this.getCalendarPages(1, beginMonth, beginYear, restDays)];
        }

    }


}

export default Calendar;
