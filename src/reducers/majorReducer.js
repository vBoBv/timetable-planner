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
                            startDate: new Date(2020, 1, 25, 11, 30, 0),
                            endDate: new Date(2020, 1, 25, 13, 30, 0)
                        },
                        {
                            id: "ISCG5401",
                            title: "ISCG5401 Operating System Fundamentals",
                            startDate: new Date(2020, 1, 24, 15, 0, 0),
                            endDate: new Date(2020, 1, 24, 17, 0, 0),
                            startDate: new Date(2020, 1, 25, 9, 0, 0),
                            endDate: new Date(2020, 1, 25, 11, 0, 0)
                        },
                        {
                            id: "ISCG5420",
                            title: "ISCG5420 Programming Fundamentals",
                            startDate: new Date(2020, 1, 24, 11, 30, 0),
                            endDate: new Date(2020, 1, 24, 14, 30, 0)
                        },
                        {
                            id: "ISCG5423",
                            title: "ISCG5423 Introduction to Databases",
                            startDate: new Date(2020, 1, 24, 11, 30, 0),
                            endDate: new Date(2020, 1, 24, 14, 30, 0)
                        },
                        {
                            id: "ISCG5424",
                            title: "ISCG5424 Information Systems Concepts",
                            startDate: new Date(2020, 1, 24, 11, 30, 0),
                            endDate: new Date(2020, 1, 24, 14, 30, 0)
                        },
                        {
                            id: "ISCG5430",
                            title:
                                "ISCG64113 Professional Skills for IT Practitioners",
                            startDate: new Date(2020, 1, 24, 11, 30, 0),
                            endDate: new Date(2020, 1, 24, 14, 30, 0)
                        }
                    ]
                },
                {
                    category: "Level 5 Elective",
                    courseList: [
                        {
                            id: "HTCS5700",
                            title: "HTCS5700 Cyber Security Principles",
                            startDate: new Date(2020, 1, 24, 11, 30, 0),
                            endDate: new Date(2020, 1, 24, 14, 30, 0)
                        },
                        {
                            id: "ISCG5403",
                            title: "ISCG5403 Networking Fundamentals",
                            startDate: new Date(2020, 1, 24, 11, 30, 0),
                            endDate: new Date(2020, 1, 24, 14, 30, 0)
                        },
                        {
                            id: "ISCG5421",
                            title:
                                "ISCG5421 Programming Principles and Practice",
                            startDate: new Date(2020, 1, 24, 11, 30, 0),
                            endDate: new Date(2020, 1, 24, 14, 30, 0)
                        }
                    ]
                },
                {
                    category: "Level 6 Compulsory",
                    courseList: [
                        {
                            id: "ISCG6411",
                            title: "ISCG6411 Project Planning and Control",
                            startDate: new Date(2020, 1, 28, 14, 30, 0),
                            endDate: new Date(2020, 1, 28, 17, 30, 0)
                        }
                    ]
                },
                {
                    category: "Level 6 Elective",
                    courseList: [
                        {
                            id: "ISCG6401",
                            title: "ISCG6401 Data Communications and Networks",
                            startDate: new Date(2020, 1, 25, 15, 0, 0),
                            endDate: new Date(2020, 1, 25, 18, 0, 0)
                        },
                        {
                            id: "ISCG6402",
                            title:
                                "ISCG6402 Network Administration and Support",
                            startDate: new Date(2020, 1, 27, 17, 30, 0),
                            endDate: new Date(2020, 1, 27, 20, 30, 0)
                        },
                        {
                            id: "ISCG6403",
                            title:
                                "ISCG6403 Network Operating Systems Management",
                            startDate: new Date(2020, 1, 24, 11, 30, 0),
                            endDate: new Date(2020, 1, 24, 14, 30, 0)
                        },
                        {
                            id: "ISCG6407",
                            title:
                                "ISCG6407 Fundamentals Concepts in Cyber Security",
                            startDate: new Date(2020, 1, 26, 15, 0, 0),
                            endDate: new Date(2020, 1, 26, 18, 0, 0)
                        },
                        {
                            id: "ISCG6420",
                            title: "ISCG6420 Internet and Website Development",
                            startDate: new Date(2020, 1, 27, 11, 30, 0),
                            endDate: new Date(2020, 1, 27, 14, 30, 0)
                        },
                        {
                            id: "ISCG6421",
                            title: "ISCG6421 GUI Programming",
                            startDate: new Date(2020, 1, 27, 15, 30, 0),
                            endDate: new Date(2020, 1, 27, 18, 30, 0)
                        },
                        {
                            id: "ISCG6423",
                            title: "ISCG6423 Database Design and Development",
                            startDate: new Date(2020, 1, 26, 13, 0, 0),
                            endDate: new Date(2020, 1, 26, 16, 0, 0)
                        },
                        {
                            id: "ISCG6425",
                            title: "ISCG6425 Data Warehousing",
                            startDate: new Date(2020, 1, 25, 15, 0, 0),
                            endDate: new Date(2020, 1, 25, 18, 0, 0)
                        },
                        {
                            id: "ISCG6426",
                            title: "ISCG6426 Data Structures and Alogorithms",
                            startDate: new Date(2020, 1, 24, 15, 0, 0),
                            endDate: new Date(2020, 1, 24, 18, 0, 0)
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
                            startDate: new Date(2020, 1, 24, 11, 30, 0),
                            endDate: new Date(2020, 1, 24, 14, 30, 0)
                        }
                    ]
                },
                {
                    category: "Level 7 Elective",
                    courseList: [
                        {
                            id: "ISCG7400",
                            title: "ISCG7400 Computer Systems Security",
                            startDate: new Date(2020, 1, 28, 17, 30, 0),
                            endDate: new Date(2020, 1, 28, 20, 30, 0)
                        },
                        {
                            id: "ISCG7401",
                            title: "ISCG7401 Advanced Data Communications",
                            startDate: new Date(2020, 1, 25, 11, 0, 0),
                            endDate: new Date(2020, 1, 25, 14, 0, 0)
                        },
                        {
                            id: "ISCG7402",
                            title: "ISCG7402 Network Design and Implementation",
                            startDate: new Date(2020, 1, 25, 14, 30, 0),
                            endDate: new Date(2020, 1, 25, 17, 30, 0)
                        },
                        {
                            id: "ISCG7404",
                            title: "ISCG7404 Computer Forensic Investigations",
                            startDate: new Date(2020, 1, 29, 8, 30, 0),
                            endDate: new Date(2020, 1, 29, 11, 30, 0)
                        },
                        {
                            id: "ISCG7407",
                            title: "ISCG7407 Advanced Cyber Security",
                            startDate: new Date(2020, 1, 26, 10, 30, 0),
                            endDate: new Date(2020, 1, 26, 13, 30, 0)
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
                            startDate: new Date(2020, 1, 27, 14, 30, 0),
                            endDate: new Date(2020, 1, 27, 17, 30, 0)
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
                            startDate: new Date(2020, 1, 27, 11, 0, 0),
                            endDate: new Date(2020, 1, 27, 14, 0, 0)
                        },
                        {
                            id: "ISCG7424",
                            title: "ISCG7424 Mobile Software Development",
                            startDate: new Date(2020, 1, 27, 17, 30, 0),
                            endDate: new Date(2020, 1, 27, 20, 30, 0)
                        },
                        {
                            id: "ISCG7426",
                            title: "ISCG7426 Data Mining",
                            startDate: new Date(2020, 1, 24, 11, 0, 0),
                            endDate: new Date(2020, 1, 24, 14, 0, 0)
                        },
                        {
                            id: "ISCG7427",
                            title: "ISCG7427 Agile and Lean Software Delivery",
                            startDate: new Date(2020, 1, 26, 14, 30, 0),
                            endDate: new Date(2020, 1, 26, 17, 30, 0)
                        },
                        {
                            id: "ISCG7444",
                            title:
                                "ISCG7444 Cloud Application Design and Development",
                            startDate: new Date(2020, 1, 28, 11, 0, 0),
                            endDate: new Date(2020, 1, 28, 14, 0, 0)
                        }
                    ]
                }
            ]
        },
        {
            majorTitle:
                "Bachelor of Applied Science (Animal Management and Welfare, and Biodiversity Management)",
            levelList: [
                {
                    category: "Level 5 Compulsory",
                    courseList: [
                        {
                            id: "NSCI5104",
                            title: "Principles of Biology"
                        },
                        {
                            id: "NSCI5105",
                            title: "Principles of Ecology"
                        }
                    ]
                },
                {
                    category: "Level 5 Elective",
                    courseList: [
                        {
                            id: "NSCI5104",
                            title: "Principles of Alien"
                        },
                        {
                            id: "NSCI5105",
                            title: "Principles of Monster"
                        }
                    ]
                }
            ]
        }
    ];
};

export default majorReducer;
