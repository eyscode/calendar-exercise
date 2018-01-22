import React, {Component} from 'react';
import './Calendar.css';

class CalendarPage extends Component {

    getDays(beginWeekDay, totalDays, beginDay, totalDaysInMonth) {
        totalDays = totalDays || totalDaysInMonth - beginDay + 1;
        const totalWeeks = Math.ceil((totalDays + beginWeekDay) / 7);
        let pivotDay = beginDay - beginWeekDay;
        const weeks = [];
        for (let i = 0; i < totalWeeks; i++) {
            const days = [];
            for (let weekday = 0; weekday < 7; weekday++) {
                const within = pivotDay <= totalDaysInMonth && pivotDay >= beginDay && pivotDay < beginDay + totalDays;
                let color = within ? 'green' : 'gray';
                if (within && (weekday === 0 || weekday === 6)) {
                    color = "yellow";
                }
                // TODO: Add holiday color
                days.push(
                    <div key={weekday} className={`Calendar-day day-${color}`}>
                        {within && <div>{pivotDay}</div>}
                    </div>
                );
                pivotDay++;
            }
            weeks.push(
                <div key={i} className="Calendar-week">
                    {days}
                </div>
            );
        }
        return weeks;
    }

    render() {
        const {totalDays, month, year} = this.props;
        let {beginDay = 1, } = this.props;
        beginDay = beginDay || 1;
        const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
        const beginWeekDay = new Date(year, month, beginDay).getDay();
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        return (
            <div className="Calendar">
                <header className="Calendar-header">
                    <div className="Calendar-week">
                        {["S", "M", "T", "W", "T", "F", "S"].map((l, i) =>
                            <div key={i} className="Calendar-day title">
                                <div>{l}</div>
                            </div>
                        )}
                    </div>
                    <h3>{`${months[month]} ${year}`}</h3>
                </header>
                <div className="Calendar-body">
                    {this.getDays(beginWeekDay, totalDays, beginDay, totalDaysInMonth)}
                </div>
            </div>
        );
    }
}

export default CalendarPage;
