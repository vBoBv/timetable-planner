import React from "react";
import "../sass/App.scss";

import Header from "./Header";
import CourseSelector from "./CourseSelector";
import Timetable from "./Timetable";
import Footer from "./Footer";

const App = () => {
    return (
        <div className='container'>
            <Header />
            <CourseSelector />
            <Timetable />
            <Footer />
        </div>
    );
};

export default App;
