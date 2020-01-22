import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({
    id = "",
    type = "checkbox",
    name,
    checked = false,
    onChange,
    label = ""
}) => {
    return (
        <div key={id}>
            <input
                type={type}
                name={name}
                checked={checked}
                onChange={onChange}
            />
            <label>{label}</label>
        </div>
    );
};

Checkbox.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string
};

export default Checkbox;
