import { MAJOR_SELECTED } from "./types";
import { SUBJECT_SELECTED } from "./types";
import { SUBJECT_DESELECTED } from "./types";

export const selectMajor = (major) => {
    return {
        type: MAJOR_SELECTED,
        payload: major
    };
};

export const selectSubject = (title, startDate, endDate) => {
    return {
        type: SUBJECT_SELECTED,
        payload: {
            title,
            startDate,
            endDate
        }
    };
};

export const deselectSubject = (title, startDate, endDate) => {
    return {
        type: SUBJECT_DESELECTED,
        payload: {
            title,
            startDate,
            endDate
        }
    };
};
