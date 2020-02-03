import React from "react";

const Navigation = () => {
    return (
        <div className='navigation'>
            <input
                type='checkbox'
                className='navigation__checkbox'
                id='navi-toggle'
            />
            <label htmlFor='navi-toggle' className='navigation__button'>
                <span className='navigation__icon'>&nbsp;</span>
            </label>

            <div className='navigation__background'>&nbsp;</div>

            <nav className='navigation__nav'>
                <ul className='navigation__list'>
                    <li className='navigation__item'>
                        <a
                            href='https://www.unitec.ac.nz/career-and-study-options'
                            className='navigation__link'
                        >
                            <span>01</span>Explore your study options at Unitec
                        </a>
                    </li>
                    <li className='navigation__item'>
                        <a
                            href='https://cs.unitec.ac.nz/psc/CSLIVE/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSR_SSENRL_CART.GBL'
                            className='navigation__link'
                        >
                            <span>02</span>Ready to enroll?
                        </a>
                    </li>
                    <li className='navigation__item'>
                        <a
                            href='https://myportal.unitec.ac.nz'
                            className='navigation__link'
                        >
                            <span>03</span>Student's Portal
                        </a>
                    </li>
                    <li className='navigation__item'>
                        <a
                            href='https://moodle.unitec.ac.nz/'
                            className='navigation__link'
                        >
                            <span>04</span>Unitec's Moodle
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
