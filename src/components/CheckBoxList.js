import React, { Component } from "react";
import Checkbox from "./Checkbox";
import { selectSubject, deselectSubject } from "../actions";
import { connect } from "react-redux";

class CheckBoxList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedItems: new Map()
        };

        this.handleChange = this.handleChange.bind(this);
    }

    renderSubjectListState = (
        target,
        title,
        startDate,
        endDate,
        rRule,
        preReq,
        classNo
    ) => {
        return (
            <React.Fragment>
                {target === true
                    ? this.props.selectSubject(
                          title,
                          startDate,
                          endDate,
                          rRule,
                          preReq,
                          classNo
                      )
                    : this.props.deselectSubject(
                          title,
                          startDate,
                          endDate,
                          rRule,
                          preReq,
                          classNo
                      )}
            </React.Fragment>
        );
    };

    handleChange(e) {
        // console.log(e.target.name);
        // console.log(e.target.checked === true);
        //console.log(this.state.checkedItems === false);

        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState((prevState) => ({
            checkedItems: prevState.checkedItems.set(item, isChecked)
        }));
        this.renderSubjectListState(
            e.target.checked,
            this.props.label,
            this.props.startDate,
            this.props.endDate,
            this.props.rRule,
            this.props.preReq,
            this.props.classNo
        );
    }

    render() {
        return (
            <Checkbox
                id={this.props.id}
                name={this.props.label}
                checked={this.state.checkedItems.get(this.props.label)}
                onChange={this.handleChange}
                label={this.props.label}
            />
        );
    }
}

export default connect(null, { selectSubject, deselectSubject })(CheckBoxList);
