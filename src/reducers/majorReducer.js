const majorReducer = () => {
    return [
        {
            majorTitle: "Bachelor of Computing Systems",
            courseList: [
                {
                    id: "ISCG6411",
                    title: "ISCG64111 Project Planning and Control",
                    startDate: new Date(2020, 1, 28, 9, 30, 0),
                    endDate: new Date(2020, 1, 28, 11, 30, 0)
                },
                {
                    id: "6412",
                    title: "ISCG64112 Data Structures and Algorithms",
                    startDate: new Date(2020, 1, 24, 15, 0, 0),
                    endDate: new Date(2020, 1, 24, 18, 0, 0)
                },
                {
                    id: "64113",
                    title: "ISCG64113 Network Operating Systems and Management",
                    startDate: new Date(2020, 1, 24, 11, 30, 0),
                    endDate: new Date(2020, 1, 24, 14, 30, 0)
                }
            ]
        },
        {
            majorTitle:
                "Bachelor of Applied Science (Animal Management and Welfare, and Biodiversity Management)",
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
        }
    ];
};

export default majorReducer;
