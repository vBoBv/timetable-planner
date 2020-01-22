import React, { Component } from "react";
import { string, number } from "prop-types";

class Calendar extends Component {
    render() {
        const { color, size } = this.props;

        return (
            <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                width={size}
                height={size}
                viewBox='0 0 20 20'
                fill={color}
            >
                <title>calendar</title>
                <path d='M17 3h-1v2h-3v-2h-6v2h-3v-2h-1c-1.101 0-2 0.9-2 2v12c0 1.1 0.899 2 2 2h14c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2zM17 17h-14v-8h14v8zM6.5 1h-2v3.5h2v-3.5zM15.5 1h-2v3.5h2v-3.5z'></path>
            </svg>
        );
    }
}

Calendar.propTypes = {
    color: string,
    size: number
};

Calendar.defaultProps = {
    color: "white",
    size: 40
};

export default Calendar;
