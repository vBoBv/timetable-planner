import { MAJOR_SELECTED } from "../actions/types";

const selectedMajorReducer = (selectedMajor = [], action) => {
    switch (action.type) {
        case MAJOR_SELECTED:
            return [...selectedMajor, action.payload];
        default:
            return selectedMajor;
    }
};

export default selectedMajorReducer;
