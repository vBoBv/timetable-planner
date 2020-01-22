import React, { Component } from "react";
import { connect } from "react-redux";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
    Scheduler,
    WeekView,
    Appointments,
    Toolbar,
    ViewSwitcher,
    MonthView,
    DayView,
    DateNavigator,
    TodayButton
} from "@devexpress/dx-react-scheduler-material-ui";

class Timetable extends Component {
    state = {
        currentViewName: "Week",
        currentDate: "2020-02-28"
    };

    currentViewNameChange = (currentViewName) => {
        this.setState({ currentViewName });
    };

    currentDateChange = (currentDate) => {
        this.setState({ currentDate });
    };

    render() {
        // console.log(this.state.currentViewName);
        // console.log(this.state.currentDate);

        const { currentViewName, currentDate } = this.state;

        return (
            <div className='scheduler'>
                <Scheduler data={this.props.selectedSubject} height={660}>
                    <ViewState
                        currentViewName={currentViewName}
                        currentDate={currentDate}
                        onCurrentViewNameChange={this.currentViewNameChange}
                        onCurrentDateChange={this.currentDateChange}
                    />

                    <DayView startDayHour={8} endDayHour={22} />
                    <WeekView startDayHour={8} endDayHour={22} />
                    <MonthView />

                    <Toolbar />
                    <ViewSwitcher />
                    <DateNavigator />
                    <TodayButton />
                    <Appointments />
                </Scheduler>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedSubject: state.selectedSubject
    };
};

export default connect(mapStateToProps)(Timetable);
