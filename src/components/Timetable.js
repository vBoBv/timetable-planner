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
    TodayButton,
    AppointmentTooltip
} from "@devexpress/dx-react-scheduler-material-ui";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

import CourseInformation from "./CourseInformation";
import CourseInfoToPrint from "./CourseInfoToPrint";

const style = (theme) => ({
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

const Appointment = ({ children, style, ...restProps }) => (
    <Appointments.Appointment
        {...restProps}
        style={{
            ...style,
            backgroundColor: "#512da8",
            fontSize: "10px",
            width: "105%",
            border: "1px solid white",
            borderRadius: "0px"
        }}
    >
        {children}
    </Appointments.Appointment>
);

const Content = ({ children, style, appointmentData, ...restProps }) => (
    <AppointmentTooltip.Content
        {...restProps}
        appointmentData={appointmentData}
        style={{
            ...style,
            fontSize: "15px"
        }}
    >
        <div style={{ display: "grid", justifyContent: "end" }}>
            {children}
            <span
                className='ui violet tag label'
                style={{ fontSize: "1.6rem" }}
            >
                Class: {appointmentData.classNo}
            </span>
        </div>
    </AppointmentTooltip.Content>
);

const RecurringIcon = () => {
    return null;
};

// const TimeTableCell = ({ children, style, ...restProps }) => (
//     <WeekView.TimeTableCell
//         {...restProps}
//         style={{
//             ...style,
//             width: "10rem"
//         }}
//     >
//         {children}
//     </WeekView.TimeTableCell>
// );

const TimeTableCellBase = ({ classes, style, ...restProps }) => {
    const { startDate } = restProps;
    const date = new Date(startDate);
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

const TimeTableRow = ({ children, style, ...restProps }) => (
    <WeekView.TimeTableRow
        {...restProps}
        style={{
            ...style
            // height: "10rem"
        }}
    >
        {children}
    </WeekView.TimeTableRow>
);

const TimeScaleLayout = ({ children, style, ...restProps }) => (
    <WeekView.TimeScaleLayout
        {...restProps}
        style={{
            ...style
        }}
    >
        {children}
    </WeekView.TimeScaleLayout>
);

const DayScaleCell = ({ children, style, ...restProps }) => (
    <WeekView.DayScaleCell
        {...restProps}
        style={{
            ...style
            // width: "10rem"
        }}
    >
        {children}
    </WeekView.DayScaleCell>
);

class Timetable extends Component {
    state = {
        currentViewName: "week-days",
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
                <Scheduler data={this.props.selectedSubject} height={800}>
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
                        timeTableRowComponent={TimeTableRow}
                        dayScaleCellComponent={DayScaleCell}
                        timeScaleLayoutComponent={TimeScaleLayout}
                    />
                    <WeekView
                        name='week-days'
                        displayName='Week Days'
                        excludedDays={[0, 6]}
                        startDayHour={8}
                        endDayHour={22}
                        timeTableCellComponent={TimeTableCell}
                        timeTableRowComponent={TimeTableRow}
                        dayScaleCellComponent={DayScaleCell}
                        timeScaleLayoutComponent={TimeScaleLayout}
                    />
                    <MonthView />

                    <Toolbar />
                    <ViewSwitcher />
                    <DateNavigator />
                    <TodayButton />
                    <Appointments appointmentComponent={Appointment} />
                    <AppointmentTooltip
                        showCloseButton
                        contentComponent={Content}
                        recurringIconComponent={RecurringIcon}
                        appointmentData={this.props.selectedSubject}
                    />
                </Scheduler>
                <CourseInformation />
                <CourseInfoToPrint />
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
