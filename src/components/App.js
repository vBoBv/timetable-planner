import React from "react";
import "../sass/App.scss";

import Navigation from "./Navigation";
import Header from "./Header";
import CourseSelector from "./CourseSelector";
import Timetable from "./Timetable";
import Footer from "./Footer";

const App = () => {
    return (
        <div className='container'>
            <Navigation />
            <Header />
            <CourseSelector />
            <Timetable />
            <Footer />
        </div>
    );
};

export default App;
