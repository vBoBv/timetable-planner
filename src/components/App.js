import React from "react";
import "../sass/App.scss";

import Header from "./Header";
import CourseSelector from "./CourseSelector";
import Timetable from "./Timetable";

const App = () => {
    return (
        <div className='container'>
            <Header />
            <CourseSelector />
            <Timetable />
        </div>
    );
};

export default App;
