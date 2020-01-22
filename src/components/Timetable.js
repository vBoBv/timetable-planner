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
    DayView
} from "@devexpress/dx-react-scheduler-material-ui";

class Timetable extends Component {
    render() {
        return <div>TimeTable</div>;
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(Timetable);
