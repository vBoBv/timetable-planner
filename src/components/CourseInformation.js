import React, { Component } from "react";
import { connect } from "react-redux";

class CourseInformation extends Component {
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
                            <h3 className='header'>{subject.title}</h3>
                            <div className='description'>
                                Pre-requisite(s): {subject.preReq}
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
