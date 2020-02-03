const majorReducer = () => {
    return [
        {
            majorTitle: "Bachelor of Computing Systems",
            levelList: [
                {
                    category: "Level 5 Compulsory",
                    courseList: [
                        {
                            id: "ISCG5400",
                            title: "ISCG5400 Hardware Fundamentals",
                            preReq: "None",
                            classNo: 2845,
                            startDate: new Date(2020, 1, 25, 11, 30, 0),
                            endDate: new Date(2020, 1, 25, 13, 30, 0),
                            rRule:
                                "FREQ=WEEKLY;BYDAY=TU,WE;BYSETPOS=1,4;BYHOUR=11,13;BYMINUTE=30;UNTIL=20200603T000000Z"
                        },
                        {
                            id: "ISCG5401",
                            title: "ISCG5401 Operating System Fundamentals",
                            preReq: "None",
                            classNo: 2848,
                            startDate: new Date(2020, 1, 24, 15, 0, 0),
                            endDate: new Date(2020, 1, 24, 17, 0, 0),
                            rRule:
                                "FREQ=WEEKLY;BYDAY=MO,TU;BYSETPOS=1,4;BYHOUR=15,9;UNTIL=20200602T000000Z"
                        },
                        {
                            id: "ISCG5420",
                            title: "ISCG5420 Programming Fundamentals",
                            classNo: 2851,
                            preReq: "None",
                            startDate: new Date(2020, 1, 24, 12, 0, 0),
                            endDate: new Date(2020, 1, 24, 13, 0, 0),

                            // startDate1: new Date(2020, 1, 25, 14, 0, 0),
                            // endDate1: new Date(2020, 1, 25, 15, 0, 0),
                            rRule:
                                "FREQ=WEEKLY;BYDAY=MO,TU;BYSETPOS=1,8;BYHOUR=12,14;BYMINUTE=0,30;UNTIL=20200602T000000Z"
                            // rRule: "FREQ=WEEKLY;UNTIL=20200602T000000Z"
                        },
                        {
                            id: "ISCG5423",
                            title: "ISCG5423 Introduction to Databases",
                            classNo: 2859,
                            preReq: "None",
                            startDate: new Date(2020, 1, 25, 11, 30, 0),
                            endDate: new Date(2020, 1, 25, 13, 30, 0),
                            rRule:
                                "FREQ=WEEKLY;BYDAY=TU,WE;BYSETPOS=1,4;BYHOUR=11,11;BYMINUTE=30;UNTIL=20200603T000000Z"
                        },
                        {
                            id: "ISCG5424",
                            title: "ISCG5424 Information Systems Concepts",
                            classNo: 2857,
                            preReq: "None",
                            startDate: new Date(2020, 1, 25, 9, 0, 0),
                            endDate: new Date(2020, 1, 25, 11, 0, 0),
                            rRule:
                                "FREQ=WEEKLY;BYDAY=TU,WE;BYSETPOS=1,4;BYHOUR=9,9;UNTIL=20200603T000000Z"
                        },
                        {
                            id: "ISCG5430",
                            title:
                                "ISCG64113 Professional Skills for IT Practitioners",
                            classNo: 2855,
                            preReq: "None",
                            startDate: new Date(2020, 1, 24, 13, 30, 0),
                            endDate: new Date(2020, 1, 24, 14, 30, 0),
                            rRule:
                                "FREQ=WEEKLY;BYDAY=MO,WE;BYSETPOS=1,4;BYHOUR=13,8;BYMINUTE=30;UNTIL=20200610T000000Z"
                        }
                    ]
                },
                {
                    category: "Level 5 Elective",
                    courseList: [
                        {
                            id: "HTCS5700",
                            title: "HTCS5700 Cyber Security Principles",
                            classNo: 3078,
                            preReq: "None",
                            startDate: new Date(2020, 1, 27, 17, 30, 0),
                            endDate: new Date(2020, 1, 27, 20, 30, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200625T000000Z"
                        },
                        {
                            id: "ISCG5403",
                            title: "ISCG5403 Networking Fundamentals",
                            classNo: 2849,
                            preReq: "None",
                            startDate: new Date(2020, 1, 27, 12, 0, 0),
                            endDate: new Date(2020, 1, 24, 14, 0, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200604T000000Z"
                        },
                        {
                            id: "ISCG5421",
                            title:
                                "ISCG5421 Programming Principles and Practice",
                            classNo: 2861,
                            preReq: "ISCG5420 Programming Fundamentals",
                            startDate: new Date(2020, 1, 25, 14, 30, 0),
                            endDate: new Date(2020, 1, 25, 16, 30, 0),
                            rRule:
                                "FREQ=WEEKLY;BYDAY=TU,WE;BYSETPOS=1,4;BYHOUR=14,14;BYMINUTE=30;UNTIL=20200603T000000Z"
                        }
                    ]
                },
                {
                    category: "Level 6 Compulsory",
                    courseList: [
                        {
                            id: "ISCG6411",
                            title: "ISCG6411 Project Planning and Control",
                            classNo: 2878,
                            preReq: "ISCG5424 Information Systems Concepts",
                            startDate: new Date(2020, 1, 28, 14, 30, 0),
                            endDate: new Date(2020, 1, 28, 17, 30, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200605T000000Z"
                        }
                    ]
                },
                {
                    category: "Level 6 Elective",
                    courseList: [
                        {
                            id: "ISCG6401",
                            title: "ISCG6401 Data Communications and Networks",
                            classNo: 2881,
                            preReq: "ISCG5403 Networking Fundamentals",
                            startDate: new Date(2020, 1, 25, 15, 0, 0),
                            endDate: new Date(2020, 1, 25, 18, 0, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200602T000000Z"
                        },
                        {
                            id: "ISCG6402",
                            title:
                                "ISCG6402 Network Administration and Support",
                            classNo: 2876,
                            preReq:
                                "ISCG5403 Networking Fundamentals & ISCG5400 Hardware Fundamentals",
                            startDate: new Date(2020, 1, 27, 17, 30, 0),
                            endDate: new Date(2020, 1, 27, 20, 30, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200604T000000Z"
                        },
                        {
                            id: "ISCG6403",
                            title:
                                "ISCG6403 Network Operating Systems Management",
                            classNo: 2874,
                            preReq: "ISCG5401 Operating System Fundamentals",
                            startDate: new Date(2020, 1, 24, 11, 30, 0),
                            endDate: new Date(2020, 1, 24, 14, 30, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200601T000000Z"
                        },
                        {
                            id: "ISCG6407",
                            title:
                                "ISCG6407 Fundamentals Concepts in Cyber Security",
                            classNo: 2873,
                            preReq: "ISCG5403 Networking Fundamentals",
                            startDate: new Date(2020, 1, 26, 15, 0, 0),
                            endDate: new Date(2020, 1, 26, 18, 0, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200603T000000Z"
                        },
                        {
                            id: "ISCG6414",
                            title: "ISCG6414 Systems Analysis and Design",
                            classNo: 2870,
                            preReq:
                                "ISCG5424 Information Systems Concepts & ISCG5421 Programming Principles and Practice",
                            startDate: new Date(2020, 1, 24, 11, 30, 0),
                            endDate: new Date(2020, 1, 24, 14, 30, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200601T000000Z"
                        },
                        {
                            id: "ISCG6420",
                            title: "ISCG6420 Internet and Website Development",
                            classNo: 2869,
                            preReq: "ISCG5420 Programming Fundamentals",
                            startDate: new Date(2020, 1, 27, 11, 30, 0),
                            endDate: new Date(2020, 1, 27, 14, 30, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200604T000000Z"
                        },
                        {
                            id: "ISCG6421",
                            title: "ISCG6421 GUI Programming",
                            classNo: 2868,
                            preReq:
                                "ISCG5421 Programming Principles and Practice & ISCG5423 Introduction to Databases",
                            startDate: new Date(2020, 1, 27, 15, 30, 0),
                            endDate: new Date(2020, 1, 27, 18, 30, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200604T000000Z"
                        },
                        {
                            id: "ISCG6423",
                            title: "ISCG6423 Database Design and Development",
                            classNo: 2867,
                            preReq:
                                "ISCG5421 Programming Principles and Practice & ISCG5423 Introduction to Databases",
                            startDate: new Date(2020, 1, 26, 13, 0, 0),
                            endDate: new Date(2020, 1, 26, 16, 0, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200603T000000Z"
                        },
                        {
                            id: "ISCG6425",
                            title: "ISCG6425 Data Warehousing",
                            classNo: 2854,
                            preReq: "ISCG5423 Introduction to Databases",
                            startDate: new Date(2020, 1, 25, 15, 0, 0),
                            endDate: new Date(2020, 1, 25, 18, 0, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200602T000000Z"
                        },
                        {
                            id: "ISCG6426",
                            title: "ISCG6426 Data Structures and Alogorithms",
                            classNo: 2866,
                            preReq:
                                "ISCG5421 Programming Principles and Practice",
                            startDate: new Date(2020, 1, 24, 15, 0, 0),
                            endDate: new Date(2020, 1, 24, 18, 0, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200601T000000Z"
                        }
                        // ,
                        // {
                        //     id: "ISCG6441",
                        //     title: "ISCG6441 Visual Game Design",
                        //     startDate: new Date(2020, 1, 24, 11, 30, 0),
                        //     endDate: new Date(2020, 1, 24, 14, 30, 0)
                        // }
                    ]
                },
                {
                    category: "Level 7 Compulsory",
                    courseList: [
                        {
                            id: "ISCG7431",
                            title: "ISCG7431 Capstone Project",
                            classNo: 2896,
                            preReq:
                                "ISCG6411 Project Planning and Control & ISCG5420 Programming Fundamentals & ISCG5423 Introduction to Databases & ISCG5424 Information System Concepts & 195 BCS Credits",
                            startDate: new Date(2020, 1, 24, 13, 0, 0),
                            endDate: new Date(2020, 1, 24, 16, 0, 0),
                            rRule:
                                "FREQ=WEEKLY;WKST=MO;BYDAY=MO,TH,FR;BYSETPOS=1,8,12;BYHOUR=13,9;BYMINUTE=0,30;UNTIL=20200626T000000Z"
                        }
                    ]
                },
                {
                    category: "Level 7 Elective",
                    courseList: [
                        {
                            id: "ISCG7400",
                            title: "ISCG7400 Computer Systems Security",
                            classNo: 2886,
                            preReq:
                                "ISCG6402 Network Administration and Support",
                            startDate: new Date(2020, 1, 28, 17, 30, 0),
                            endDate: new Date(2020, 1, 28, 20, 30, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200605T000000Z"
                        },
                        {
                            id: "ISCG7401",
                            title: "ISCG7401 Advanced Data Communications",
                            classNo: 2887,
                            preReq: "ISCG6401 Data Communication and Networks",
                            startDate: new Date(2020, 1, 25, 11, 0, 0),
                            endDate: new Date(2020, 1, 25, 14, 0, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200602T000000Z"
                        },
                        {
                            id: "ISCG7402",
                            title: "ISCG7402 Network Design and Implementation",
                            classNo: 2888,
                            preReq:
                                "ISCG6402 Network Administration and Support & ISCG6401 Data Communication and Networks",
                            startDate: new Date(2020, 1, 25, 14, 30, 0),
                            endDate: new Date(2020, 1, 25, 17, 30, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200602T000000Z"
                        },
                        {
                            id: "ISCG7404",
                            title: "ISCG7404 Computer Forensic Investigations",
                            classNo: 2890,
                            preReq:
                                "ISCG6402 Network Administration and Support & ISCG6401 Data Communication and Networks",
                            startDate: new Date(2020, 1, 29, 8, 30, 0),
                            endDate: new Date(2020, 1, 29, 11, 30, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200606T000000Z"
                        },
                        {
                            id: "ISCG7407",
                            title: "ISCG7407 Advanced Cyber Security",
                            classNo: 2891,
                            preReq:
                                "ISCG6407 Fundamental Concepts in Cyber Security & ISCG6403 Network Operating System Management",
                            startDate: new Date(2020, 1, 26, 10, 30, 0),
                            endDate: new Date(2020, 1, 26, 13, 30, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200603T000000Z"
                        },
                        // ,
                        // {
                        //     id: "ISCG7411",
                        //     title: "ISCG7411 Project Management Methodogies",
                        //     startDate: new Date(2020, 1, 24, 11, 30, 0),
                        //     endDate: new Date(2020, 1, 24, 14, 30, 0)
                        // }
                        // ,
                        // {
                        //     id: "ISCG7412",
                        //     title: "ISCG7412 Risk Management",
                        //     startDate: new Date(2020, 1, 24, 11, 30, 0),
                        //     endDate: new Date(2020, 1, 24, 14, 30, 0)
                        // }
                        {
                            id: "ISCG7413",
                            title:
                                "ISCG7413 Testing and Quality Assurance Mangement",
                            classNo: 2894,
                            preReq: "None",
                            startDate: new Date(2020, 1, 27, 14, 30, 0),
                            endDate: new Date(2020, 1, 27, 17, 30, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200604T000000Z"
                        },
                        // ,
                        // {
                        //     id: "ISCG7414",
                        //     title: "ISCG7414 Business Systems Analysis",
                        //     startDate: new Date(2020, 1, 24, 11, 30, 0),
                        //     endDate: new Date(2020, 1, 24, 14, 30, 0)
                        // }
                        {
                            id: "ISCG7420",
                            title: "ISCG7420 Web Application Development",
                            classNo: 2889,
                            preReq:
                                "ISCG6414 System Analysis and Design & ISCG6421 GUI Programming & ISCG6420 Internet and Website Development",
                            startDate: new Date(2020, 1, 27, 11, 0, 0),
                            endDate: new Date(2020, 1, 27, 14, 0, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200604T000000Z"
                        },
                        {
                            id: "ISCG7424",
                            title: "ISCG7424 Mobile Software Development",
                            classNo: 2900,
                            preReq:
                                "ISCG6414 System Analysis and Design & ISCG6421 GUI Programming",
                            startDate: new Date(2020, 1, 27, 17, 30, 0),
                            endDate: new Date(2020, 1, 27, 20, 30, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200604T000000Z"
                        },
                        {
                            id: "ISCG7426",
                            title: "ISCG7426 Data Mining",
                            classNo: 2864,
                            preReq:
                                "ISCG5421 Programming Principles and Practice & ISCG6425 Data Warehousing",
                            startDate: new Date(2020, 1, 24, 11, 0, 0),
                            endDate: new Date(2020, 1, 24, 14, 0, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200601T000000Z"
                        },
                        {
                            id: "ISCG7427",
                            title: "ISCG7427 Agile and Lean Software Delivery",
                            classNo: 2882,
                            preReq: "ISCG6414 System Analysis and Design",
                            startDate: new Date(2020, 1, 26, 14, 30, 0),
                            endDate: new Date(2020, 1, 26, 17, 30, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200603T000000Z"
                        },
                        {
                            id: "ISCG7444",
                            title:
                                "ISCG7444 Cloud Application Design and Development",
                            classNo: 2901,
                            preReq:
                                "ISCG5421 Programming Principles and Practice or ISCG6420 Internet and Website Development",
                            startDate: new Date(2020, 1, 28, 11, 0, 0),
                            endDate: new Date(2020, 1, 28, 14, 0, 0),
                            rRule: "FREQ=WEEKLY;UNTIL=20200605T000000Z"
                        }
                    ]
                }
            ]
        }
        // ,
        // {
        //     majorTitle:
        //         "Bachelor of Applied Science (Animal Management and Welfare, and Biodiversity Management)",
        //     levelList: [
        //         {
        //             category: "Level 5 Compulsory",
        //             courseList: [
        //                 {
        //                     id: "NSCI5104",
        //                     title: "Principles of Biology"
        //                 },
        //                 {
        //                     id: "NSCI5105",
        //                     title: "Principles of Ecology"
        //                 }
        //             ]
        //         },
        //         {
        //             category: "Level 5 Elective",
        //             courseList: [
        //                 {
        //                     id: "NSCI5104",
        //                     title: "Principles of Alien"
        //                 },
        //                 {
        //                     id: "NSCI5105",
        //                     title: "Principles of Monster"
        //                 }
        //             ]
        //         }
        //     ]
        // }
    ];
};

export default majorReducer;
