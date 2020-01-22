import { MAJOR_SELECTED } from "./types";
import { SUBJECT_SELECTED } from "./types";
import { SUBJECT_DESELECTED } from "./types";

export const selectMajor = (major) => {
    return {
        type: MAJOR_SELECTED,
        payload: major
    };
};

export const selectSubject = (subject) => {
    return {
        type: SUBJECT_SELECTED,
        payload: subject
    };
};

export const deselectSubject = (subject) => {
    return {
        type: SUBJECT_DESELECTED,
        payload: subject
    };
};
