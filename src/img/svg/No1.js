import React, { Component } from "react";
import { string, number } from "prop-types";

class No1 extends Component {
    render() {
        const { color, size } = this.props;

        return (
            <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 32 32'
            >
                <title>number1</title>
                <path d='M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM17.757 22.536h-2.469v-9.305c-0.901 0.841-1.964 1.463-3.188 1.867v-2.234c0.644-0.211 1.344-0.612 2.099-1.202s1.273-1.278 1.555-2.064h2.003v12.938z'></path>
            </svg>
        );
    }
}

No1.propTypes = {
    color: string,
    size: number
};

No1.defaultProps = {
    color: "white",
    size: 25
};

export default No1;
