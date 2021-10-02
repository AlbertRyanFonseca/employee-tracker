const initQuestions = [
    {
        type: "list",
        name: "initAction",
        message: "What would you like to do?",
        choices: [
            {
                name: `View all departments`,
                value: `viewDept`,
            },
            {
                name: `View all roles`,
                value: `viewRole`,
            },
            {
                name: `View all Employees`,
                value: `viewEmp`,
            },
            {
                name: `Add a Department`,
                value: `addDept`,
            },
            {
                name: `Add a Role`,
                value: `addRole`,
            },
            {
                name: `Add an Employee`,
                value: `addEmp`,
            },
            {
                name: `Update an Employee's Role`,
                value: `updateEmpRole`,
            },
            {
                name: `Nothing, I'm Done.`,
                value: `exit`,
            },
        ],
    },
];



module.exports = initQuestions;