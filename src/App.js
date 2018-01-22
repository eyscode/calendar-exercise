import React, {Component} from 'react';
import Calendar from './Calendar';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {showCalendar, clearCalendar, fetchHolidays} from './actions'

class App extends Component {
    render() {
        const {beginDate, totalDays, countryCode, holidays} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Calendar Exercise</h1>
                </header>
                <div className="App-intro">
                    <div className="App-form">
                        <div>
                            <label>Start date: </label>
                            <input placeholder="Example: 8/15/2008" type="date" ref={(input) => {
                                this.beginDateInput = input
                            }}/>
                        </div>
                        <div>
                            <label>Number of days: </label>
                            <input placeholder="Example: 30" type="number" ref={(input) => {
                                this.totalDaysInput = input
                            }}/>
                        </div>
                        <div>
                            <label>Country Code: </label>
                            <input placeholder="Example: US" type="text" ref={(input) => {
                                this.countryCodeInput = input
                            }}/>
                        </div>
                        <div>
                            <button onClick={this.showCalendar.bind(this)}>SHOW</button>
                            <button onClick={this.clearCalendar.bind(this)}>CLEAR</button>
                        </div>
                    </div>
                    <div className="App-results">
                        {beginDate &&
                        <Calendar beginDate={beginDate} totalDays={totalDays} countryCode={countryCode}
                                  fetchHolidays={this.props.fetchHolidays} holidays={holidays}/>}
                    </div>
                </div>
            </div>
        );
    }

    showCalendar() {
        this.props.onClickShow({
            beginDate: this.beginDateInput.value,
            totalDays: this.totalDaysInput.value,
            countryCode: this.countryCodeInput.value
        });
    }

    clearCalendar() {
        this.props.onClickClear();
        this.beginDateInput.value = '';
        this.totalDaysInput.value = '';
        this.countryCodeInput.value = '';
    }
}

const mapStateToProps = state => {
    return {
        beginDate: state.calendar.beginDate,
        totalDays: state.calendar.totalDays,
        countryCode: state.calendar.countryCode,
        holidays: state.holidays
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onClickShow: data => dispatch(showCalendar(data)),
        onClickClear: data => dispatch(clearCalendar()),
        fetchHolidays: data => dispatch(fetchHolidays(data))
    }
};

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


export default App;
