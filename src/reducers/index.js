import { combineReducers } from "redux";
import majorReducer from "./majorReducer";
import selectedMajorReducer from "./selectedMajorReducer";
import selectedSubjectReducer from "./selectedSubjectReducer";

export default combineReducers({
    majors: majorReducer,
    selectedMajor: selectedMajorReducer,
    selectedSubject: selectedSubjectReducer
});
