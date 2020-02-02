import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import CourseInformation from "./CourseInformation";
import { connect } from "react-redux";

class ComponentToPrint extends Component {
    render() {
        return <CourseInformation />;
    }
}

class CourseInfoToPrint extends Component {
    renderPrintButton() {
        if (this.props.selectedSubject.length > 0) {
            return (
                <ReactToPrint
                    trigger={() => (
                        <button className='ui violet basic button'>
                            <h3>Print this out!</h3>
                        </button>
                    )}
                    content={() => this.componentRef}
                />
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className='scheduler__print-button'>
                {this.renderPrintButton()}
                <div style={{ display: "none" }}>
                    <ComponentToPrint ref={(el) => (this.componentRef = el)} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedSubject: state.selectedSubject
    };
};

export default connect(mapStateToProps)(CourseInfoToPrint);
