const moreQuestions = {
    departQuestions: [
        {
            type: "input",
            name: "roleNameInptVal",
            message: "What is the name of the new Role?",
        },
        {
            type: "input",
            name: "roleSalInptVal",
            message: "What is the salary for the new Role?",
        },
        {
            type: "input",
            name: "roleDeptInptVal",
            message:
                "What is the department ID of the new Role? (see table above)",
        },
    ],
    emplQuestions: [
        {
            type: "input",
            name: "emplFNInptVal",
            message: "What is the employee's first name?",
        },
        {
            type: "input",
            name: "emplLNInptVal",
            message: "What is the employee's last name?",
        },
        {
            type: "input",
            name: "emplRoleInptVal",
            message: "What is the employee's role id? (see table above)",
        },
        {
            type: "input",
            name: "emplManInptVal",
            message: "Who is the employee's manager? (input by manager's id)",
        },
    ],
};

module.exports = moreQuestions;