import React, { Component } from "react";
import { connect } from "react-redux";
// import { selectSubject, deselectSubject } from "../actions";
import CheckBoxList from "./CheckBoxList";

class CourseSelector extends Component {
    state = {
        major: "",
        subjectSelected: false,
        subjectList: []
    };

    handleSelect = (event) => {
        this.setState({ major: event.target.value });
    };

    // renderSubjectListState = (subject) => {
    //     return (
    //         <React.Fragment>
    //             {this.state.subjectSelected === false
    //                 ? this.props.selectSubject(subject)
    //                 : this.props.deselectSubject(subject)}
    //         </React.Fragment>
    //     );
    // };

    renderMajorSelectionBox() {
        // console.log(this.state.major);

        return (
            <div>
                <select value={this.state.major} onChange={this.handleSelect}>
                    <React.Fragment>
                        <option>Select a subject</option>
                        {this.props.majors.map((major) => {
                            return (
                                <option key={major.majorTitle}>
                                    {major.majorTitle}
                                </option>
                            );
                        })}
                    </React.Fragment>
                </select>
            </div>
        );
    }

    renderSubjectList() {
        // console.log(this.state.subjectSelected);
        if (
            this.state.major === "" ||
            this.state.major === "Select a subject"
        ) {
            return <div>Please select a course first</div>;
        } else {
            return this.props.majors.map((major) => {
                return (
                    <div key={major.majorTitle}>
                        {/* {console.log(major.majorTitle + " major.majorTitle")} */}
                        {major.majorTitle === this.state.major ? (
                            <div>
                                {major.courseList.map((course) => {
                                    // console.log(course);
                                    return (
                                        // <div key={course.id}>
                                        //     <input
                                        //         type='checkbox'
                                        //         checked={
                                        //             this.state.subjectSelected
                                        //         }
                                        //         value={course.title}
                                        // onChange={(event) => {
                                        //     this.setState({
                                        //         subjectSelected:
                                        //             event.target.checked
                                        //     });

                                        //     this.renderSubjectListState(
                                        //         course.title
                                        //     );
                                        // }}
                                        //         ref={this.inputRef}
                                        //     />
                                        //     <label>{course.title}</label>
                                        // </div>

                                        <CheckBoxList
                                            key={course.id}
                                            checked={this.state.subjectSelected}
                                            // onChange={(event) => {
                                            //     this.setState({
                                            //         subjectSelected:
                                            //             event.target.checked
                                            //     });

                                            //     this.renderSubjectListState(
                                            //         course.title
                                            //     );
                                            // }}
                                            label={course.title}
                                            startDate={course.startDate}
                                            endDate={course.endDate}
                                        />
                                    );
                                })}
                            </div>
                        ) : null}
                    </div>
                );
            });
        }
    }

    render() {
        // console.log(this.state);
        return (
            <div className='courseSelector'>
                Please select your major:
                {this.renderMajorSelectionBox()}
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

// export default connect(mapStateToProps, { selectSubject, deselectSubject })(
//     CourseSelector
// );

export default connect(mapStateToProps)(CourseSelector);
