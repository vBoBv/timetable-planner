import React, { Component } from "react";
import { connect } from "react-redux";
import CheckBoxList from "./CheckBoxList";
import SubjectSelectionQuery from "./SubjectSelectionQuery";
import { resetSubject } from "../actions";

class CourseSelector extends Component {
    state = {
        major: "",
        subjectSelected: false,
        subjectList: []
    };

    handleSelect = (event) => {
        // if (this.state.major === "Select a major") { //Reset only if 'Select major' selected
        //     this.props.resetSubject();
        // }
        this.setState({ major: event.target.value });
        this.props.resetSubject(); //Always reset when student change their major selection
    };

    renderMajorSelectionBox() {
        return (
            <select
                className='ui compact selection dropdown courseSelector__selectbox'
                value={this.state.major}
                onChange={this.handleSelect}
            >
                <React.Fragment>
                    <option>Select a major</option>
                    {this.props.majors.map((major) => {
                        return (
                            <option key={major.majorTitle}>
                                {major.majorTitle}
                            </option>
                        );
                    })}
                </React.Fragment>
            </select>
        );
    }

    renderCheckBox = (major) => {
        if (major.majorTitle === this.state.major) {
            return (
                // <div className='courseSelector__checkboxList'>
                //     <h3>Level3</h3>
                //     {major.courseList.map((course) => {
                //         return (
                //             <CheckBoxList
                //                 key={course.id}
                //                 checked={this.state.subjectSelected}
                //                 label={course.title}
                //                 startDate={course.startDate}
                //                 endDate={course.endDate}
                //             />
                //         );
                //     })}
                // </div>
                <div className='courseSelector__checkboxList'>
                    {major.levelList.map((course) => {
                        return (
                            <div
                                className='courseSelector__checkboxElement'
                                key={course.category}
                            >
                                <h3>{course.category}</h3>
                                {course.courseList.map((subject) => {
                                    return (
                                        <CheckBoxList
                                            key={subject.id}
                                            checked={this.state.subjectSelected}
                                            label={subject.title}
                                            startDate={subject.startDate}
                                            endDate={subject.endDate}
                                            rRule={subject.rRule}
                                            preReq={subject.preReq}
                                        />
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            return null;
        }
    };

    renderSubjectList() {
        if (this.state.major === "" || this.state.major === "Select a major") {
            return <SubjectSelectionQuery />;
        } else {
            return this.props.majors.map((major) => {
                return (
                    <React.Fragment key={major.majorTitle}>
                        {this.renderCheckBox(major)}
                    </React.Fragment>
                );
            });
        }
    }

    render() {
        return (
            <div className='courseSelector'>
                <div>
                    <p className='heading-4 courseSelector__heading'>
                        Please select your major:
                    </p>
                    {this.renderMajorSelectionBox()}
                </div>

                {this.renderSubjectList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        majors: state.majors
    };
};

export default connect(mapStateToProps, { resetSubject })(CourseSelector);
