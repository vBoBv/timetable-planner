import React, { Component } from "react";
import { string, number } from "prop-types";

class No4 extends Component {
    render() {
        const { color, size } = this.props;

        return (
            <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                width={size}
                height={size}
                viewBox='0 0 32 32'
                fill={color}
            >
                <title>number4</title>
                <path d='M16.359 17.583v-4.405l-2.971 4.405h2.971zM16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM20.344 19.739h-1.594v2.595h-2.391v-2.595h-5.281v-2.147l5.598-8.196h2.074v8.187h1.594v2.156z'></path>
            </svg>
        );
    }
}

No4.propTypes = {
    color: string,
    size: number
};

No4.defaultProps = {
    color: "white",
    size: 25
};

export default No4;
