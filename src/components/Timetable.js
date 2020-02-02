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
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

import CourseInformation from "./CourseInformation";

const style = (theme) => ({
    todayCell: {
        backgroundColor: fade(theme.palette.primary.main, 0.1),
        "&:hover": {
            backgroundColor: fade(theme.palette.primary.main, 0.14)
        },
        "&:focus": {
            backgroundColor: fade(theme.palette.primary.main, 0.16)
        }
    },
    weekendCell: {
        backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
        "&:hover": {
            backgroundColor: fade(theme.palette.action.disabledBackground, 0.04)
        },
        "&:focus": {
            backgroundColor: fade(theme.palette.action.disabledBackground, 0.04)
        }
    }
});

const TimeTableCellBase = ({ classes, ...restProps }) => {
    const { startDate } = restProps;
    const date = new Date(startDate);
    if (date.getDate() === new Date().getDate()) {
        return (
            <WeekView.TimeTableCell
                {...restProps}
                className={classes.todayCell}
            />
        );
    }
    if (date.getDay() === 0 || date.getDay() === 6) {
        return (
            <WeekView.TimeTableCell
                {...restProps}
                className={classes.weekendCell}
            />
        );
    }
    return <WeekView.TimeTableCell {...restProps} />;
};

const TimeTableCell = withStyles(style, { name: "TimeTableCell" })(
    TimeTableCellBase
);

const TimeScaleLabel = (props) => {
    return <WeekView.TimeScaleLabel {...props} style={{ fontSize: "15px" }} />;
};

// const DayScaleCell = (props) => (
//     <WeekView.DayScaleCell
//         {...props}
//         style={{ textAlign: "center", fontWeight: "bold" }}
//     />
// );

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
            <Paper className='scheduler'>
                <Scheduler data={this.props.selectedSubject} height={660}>
                    <ViewState
                        currentViewName={currentViewName}
                        currentDate={currentDate}
                        onCurrentViewNameChange={this.currentViewNameChange}
                        onCurrentDateChange={this.currentDateChange}
                    />

                    <DayView startDayHour={8} endDayHour={22} />
                    <WeekView
                        startDayHour={8}
                        endDayHour={22}
                        timeTableCellComponent={TimeTableCell}
                        timeScaleLabelComponent={TimeScaleLabel}
                        // dayScaleCellComponent={DayScaleCell}
                    />
                    <MonthView />

                    <Toolbar />
                    <ViewSwitcher />
                    <DateNavigator />
                    <TodayButton />
                    <Appointments />
                </Scheduler>
                <CourseInformation />
            </Paper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedSubject: state.selectedSubject
    };
};

export default connect(mapStateToProps)(Timetable);
