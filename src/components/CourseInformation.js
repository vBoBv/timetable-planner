import React, { Component } from "react";
import { connect } from "react-redux";

var options = { weekday: "long" };

class CourseInformation extends Component {
    renderSpecialClasstime(subject) {
        if (subject.title === "ISCG5400 Hardware Fundamentals") {
            return (
                <React.Fragment>
                    <i style={{ color: "#512da8" }}>Class-time:</i> Tuesday,
                    11:30 - 13:30; Wednesday, 13:30 - 15:30
                </React.Fragment>
            );
        }

        if (subject.title === "ISCG5401 Operating System Fundamentals") {
            return (
                <React.Fragment>
                    <i style={{ color: "#512da8" }}>Class-time:</i> Monday,
                    15:00 - 17:00; Tuesday, 9:00 - 11:00
                </React.Fragment>
            );
        }

        if (subject.title === "ISCG5420 Programming Fundamentals") {
            return (
                <React.Fragment>
                    <i style={{ color: "#512da8" }}>Class-time:</i> Monday,
                    12:00 - 13:00;{" "}
                    {
                        <span style={{ color: "red" }}>
                            Tuesday, 14:30 - 17:30 (Corrected)
                        </span>
                    }
                </React.Fragment>
            );
        }

        if (subject.title === "ISCG5423 Introduction to Databases") {
            return (
                <React.Fragment>
                    <i style={{ color: "#512da8" }}>Class-time:</i> Tuesday,
                    11:30 - 13:30; Wednesday, 11:30 - 13:30
                </React.Fragment>
            );
        }

        if (subject.title === "ISCG5424 Information Systems Concepts") {
            return (
                <React.Fragment>
                    <i style={{ color: "#512da8" }}>Class-time:</i> Tuesday,
                    9:00 - 11:00; Wednesday, 9:00 - 11:00
                </React.Fragment>
            );
        }

        if (
            subject.title ===
            "ISCG64113 Professional Skills for IT Practitioners"
        ) {
            return (
                <React.Fragment>
                    <i style={{ color: "#512da8" }}>Class-time:</i> Monday,
                    13:30 - 14:30;{" "}
                    {
                        <span style={{ color: "red" }}>
                            Wednesday, 8:30 - 11:30 (Corrected)
                        </span>
                    }
                </React.Fragment>
            );
        }

        if (subject.title === "ISCG5421 Programming Principles and Practice") {
            return (
                <React.Fragment>
                    <i style={{ color: "#512da8" }}>Class-time:</i> Tuesday,
                    14:30 - 16:30; Wednesday, 14:30 - 16:30
                </React.Fragment>
            );
        }

        if (subject.title === "ISCG7431 Capstone Project") {
            return (
                <React.Fragment>
                    <i style={{ color: "#512da8" }}>Class-time:</i> Monday,
                    13:00 - 16:00;{" "}
                    {
                        <span style={{ color: "red" }}>
                            Thursday, 9:30 - 11:30 (Corrected);
                        </span>
                    }{" "}
                    {
                        <span style={{ color: "red" }}>
                            Friday, 9:30-11:30 (Corrected)
                        </span>
                    }
                </React.Fragment>
            );
        } else {
            return this.renderClasstime(subject);
        }
    }

    renderClasstime(subject) {
        return (
            <React.Fragment>
                <i style={{ color: "#512da8" }}>Class-time:</i>{" "}
                {Intl.DateTimeFormat("en-US", options).format(
                    subject.startDate
                )}
                , {subject.startDate.getHours()}:
                {subject.startDate.getMinutes() === 0
                    ? "00"
                    : subject.startDate.getMinutes()}{" "}
                - {subject.endDate.getHours()}:
                {subject.endDate.getMinutes() === 0
                    ? "00"
                    : subject.endDate.getMinutes()}
            </React.Fragment>
        );
    }

    renderCourseList() {
        return this.props.selectedSubject.map((subject) => {
            return (
                // <div class='ui inverted segment' key={subject.title}>
                //     <div class='ui inverted relaxed divided list'>
                //         <div class='item'>
                //             <div class='content'>
                //                 <div class='header1'>{subject.title}</div>
                //                 Pre-requistie: {subject.preReq}
                //             </div>
                //         </div>
                //     </div>
                // </div>
                <div className='ui relaxed divided list' key={subject.title}>
                    <div className='item'>
                        <i className='large check middle aligned icon'></i>
                        <div className='content'>
                            <h2 className='header'>
                                {subject.title}
                                {/* {Intl.DateTimeFormat("en-US", options).format(
                                    subject.startDate
                                )} */}
                            </h2>
                            <div className='description'>
                                <i style={{ color: "#512da8" }}>
                                    Pre-requisite(s):
                                </i>{" "}
                                {subject.preReq}
                                <br />
                                {this.renderSpecialClasstime(subject)}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    renderCourseInfo() {
        if (this.props.selectedSubject.length > 0) {
            return (
                <div className='courseInfo'>
                    <h2 className='ui center aligned icon header'>
                        <i className='settings icon'></i>
                        <div className='content'>
                            Course Information
                            <div className='sub header'>
                                The following are the pre-requisite(s) you must
                                complete to successfully enroll into the courses
                                that you have selected.
                            </div>
                        </div>
                    </h2>

                    {this.renderCourseList()}
                </div>
            );
        } else {
            return null;
        }
    }

    render() {
        return this.renderCourseInfo();
    }
}

const mapStateToProps = (state) => {
    console.log(state.selectedSubject);

    return {
        selectedSubject: state.selectedSubject
    };
};

export default connect(mapStateToProps)(CourseInformation);
