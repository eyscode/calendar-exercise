import React, {Component} from 'react';
import CalendarPage from "./CalendarPage";

class Calendar extends Component {

    render() {
        const {beginDate, totalDays, countryCode} = this.props;
        const beginDay = new Date(beginDate).getUTCDate();
        const beginMonth = new Date(beginDate).getUTCMonth();
        const beginYear = new Date(beginDate).getUTCFullYear();
        return this.getCalendarPages(beginDay, beginMonth, beginYear, totalDays, countryCode);
    }

    getCalendarPages(beginDay, beginMonth, beginYear, totalDays, countryCode) {
        if (totalDays <= 0) {
            return [];
        } else {
            const totalDaysInMonth = new Date(beginYear, beginMonth, 0).getDate();
            const page = <CalendarPage key={`${beginMonth}-${beginYear}`} beginDay={beginDay} totalDays={totalDays}
                                       month={beginMonth} year={beginYear} countryCode={countryCode}
                                       fetchHolidays={this.props.fetchHolidays}/>;
            const restDays = totalDays - (totalDaysInMonth - beginDay + 1);
            beginMonth = beginMonth >= 11 ? 0 : beginMonth + 1;
            beginYear = beginMonth === 0 ? beginYear + 1 : beginYear;
            return [page, ...this.getCalendarPages(1, beginMonth, beginYear, restDays, countryCode)];
        }

    }


}

export default Calendar;
