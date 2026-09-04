const PROJECTS = [
    {
        id: "project-01-kitchen-cabinet",
        number: "PROJECT 01",
        title: "Kitchen Cabinet Project",
        shortDescription:
            "End-to-end kitchen cabinet planning, 3D design, production documentation, cutting preparation and final on-site execution.",

        overview:
            "A complete cabinetry workflow developed from planning and 3D design through technical documentation, production preparation and final on-site execution. The approved production documentation reflects the documented design configuration, while practical changes made during installation are recorded separately.",

        executionChanges:
            "The final installation included practical changes from the original design configuration. In T_01, four drawers were removed and replaced with one door. The dishwasher was removed and replaced with a base cabinet. One entrance door was additionally included in the final execution.",

        images: {
            cover: "projects/project-01-kitchen-cabinet/images/cover.jpg",

            threeD: [
                "projects/project-01-kitchen-cabinet/images/3d-01.jpg",
                "projects/project-01-kitchen-cabinet/images/3d-02.jpg",
                "projects/project-01-kitchen-cabinet/images/3d-03.jpg"
            ],

            technical: [
                "projects/project-01-kitchen-cabinet/images/technical-plan-01.jpg",
                "projects/project-01-kitchen-cabinet/images/technical-plan-02.jpg",
                "projects/project-01-kitchen-cabinet/images/technical-plan-03.jpg"
            ],

            execution: [
                "projects/project-01-kitchen-cabinet/images/execution-01.jpg",
                "projects/project-01-kitchen-cabinet/images/execution-02.jpg",
                "projects/project-01-kitchen-cabinet/images/execution-03.jpg",
                "projects/project-01-kitchen-cabinet/images/execution-04.jpg",
                "projects/project-01-kitchen-cabinet/images/execution-05.jpg"
            ]
        },

        documents: [
            {
                title: "Production Workbook",
                description:
                    "Cabinet production data, component information and project schedules.",
                file:
                    "projects/project-01-kitchen-cabinet/documents/01_Cabinet_Production_Workbook.pdf",
                action: "View Production Workbook →"
            },
            {
                title: "MDF Cutting Plan",
                description:
                    "Optimized MDF cutting plan prepared for panel processing and material-efficient production.",
                file:
                    "projects/project-01-kitchen-cabinet/documents/02_MDF_Cutting_Plan.pdf",
                action: "View Cutting Plan →"
            },
            {
                title: "Nanxing Panel Saw Input Files",
                description:
                    "Machine-ready CSV files prepared for panel saw data import.",
                file:
                    "projects/project-01-kitchen-cabinet/documents/03_Nanxing_Panel_Saw_Input_Files.zip",
                action: "Download CSV Package →",
                download: true
            },
            {
                title: "Kitchen Cabinet Project Case Study",
                description:
                    "A complete case study covering cabinet planning, 3D design, technical documentation, production preparation, cutting optimization and final on-site execution.",
                file:
                    "projects/project-01-kitchen-cabinet/documents/Kitchen_Cabinet_Project_Case_Study.pdf",
                action: "View Case Study →"
            }
        ]
    }

    /*
     * FUTURE PROJECT:
     * Add another object here. You do NOT need to create another
     * projects.html or rewrite the website.
     *
     * Example:
     *
     * {
     *   id: "project-02-bedroom-cabinet",
     *   number: "PROJECT 02",
     *   title: "Bedroom Cabinet Project",
     *   shortDescription: "Short description...",
     *   overview: "Project overview...",
     *   executionChanges: "Execution notes...",
     *   images: {
     *       cover: "projects/project-02-bedroom-cabinet/images/cover.jpg",
     *       threeD: [],
     *       technical: [],
     *       execution: []
     *   },
     *   documents: []
     * }
     */
];
