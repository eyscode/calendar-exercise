import React, {Component} from 'react';
import CalendarPage from "./CalendarPage";

class Calendar extends Component {

    render() {
        const {beginDate, totalDays} = this.props;
        const beginDay = new Date(beginDate).getUTCDate();
        const beginMonth = new Date(beginDate).getUTCMonth();
        const beginYear = new Date(beginDate).getUTCFullYear();
        return this.getCalendarPages(beginDay, beginMonth, beginYear, totalDays);
    }

    getCalendarPages(beginDay, beginMonth, beginYear, totalDays) {
        const {holidays, countryCode} = this.props;
        if (totalDays <= 0) {
            return [];
        } else {
            let pageHolidays = {};
            if (holidays[countryCode] && holidays[countryCode][beginYear] && holidays[countryCode][beginYear][beginMonth]) {
                pageHolidays = holidays[countryCode][beginYear][beginMonth];
            }
            const totalDaysInMonth = new Date(beginYear, beginMonth, 0).getDate();
            const page = <CalendarPage key={`${beginMonth}-${beginYear}`} beginDay={beginDay} totalDays={totalDays}
                                       month={beginMonth} year={beginYear} countryCode={countryCode}
                                       fetchHolidays={this.props.fetchHolidays} holidays={pageHolidays}/>;
            const restDays = totalDays - (totalDaysInMonth - beginDay + 1);
            beginMonth = beginMonth >= 11 ? 0 : beginMonth + 1;
            beginYear = beginMonth === 0 ? beginYear + 1 : beginYear;
            return [page, ...this.getCalendarPages(1, beginMonth, beginYear, restDays, countryCode)];
        }

    }


}

export default Calendar;
