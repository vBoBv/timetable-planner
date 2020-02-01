import { SUBJECT_SELECTED } from "../actions/types";
import { SUBJECT_DESELECTED } from "../actions/types";
import { RESET_SUBJECT_SELECTED } from "../actions/types";

const selectedSubjectReducer = (selectedSubject = [], action) => {
    switch (action.type) {
        case SUBJECT_SELECTED:
            return [
                ...selectedSubject.filter(
                    (subject) => subject.title !== action.payload.title
                ),
                action.payload
            ];
        case SUBJECT_DESELECTED:
            return selectedSubject.filter(
                (subject) => subject.title !== action.payload.title
            );
        case RESET_SUBJECT_SELECTED:
            return [];
        default:
            return selectedSubject;
    }
};

export default selectedSubjectReducer;
