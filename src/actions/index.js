import { MAJOR_SELECTED } from "./types";
import { SUBJECT_SELECTED } from "./types";
import { SUBJECT_DESELECTED } from "./types";
import { RESET_SUBJECT_SELECTED } from "./types";

export const selectMajor = (major) => {
    return {
        type: MAJOR_SELECTED,
        payload: major
    };
};

export const selectSubject = (title, startDate, endDate, rRule, preReq) => {
    return {
        type: SUBJECT_SELECTED,
        payload: {
            title,
            startDate,
            endDate,
            rRule,
            preReq
        }
    };
};

export const deselectSubject = (title, startDate, endDate, rRule, preReq) => {
    return {
        type: SUBJECT_DESELECTED,
        payload: {
            title,
            startDate,
            endDate,
            rRule,
            preReq
        }
    };
};

export const resetSubject = () => {
    return {
        type: RESET_SUBJECT_SELECTED
    };
};
