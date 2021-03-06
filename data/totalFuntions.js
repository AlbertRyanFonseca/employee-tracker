const inquirer = require("inquirer");
const db = require("../db/connection");
const {
    viewRoles,
    empTableJoined,
    insertDept,
    viewDept,
    viewEmp,
} = require("./queries");
const { deptQuestions, empQuestions } = require("./moreQuestions");
cTable = require('console.table');

class TotalFunctions {
    viewDeptFunc(action, initFunc) {
        const sql = `SELECT * FROM department;`;
        db.query(sql, (err, result) => {
            console.table(result);
            initFunc();
        });
    }

    viewRoleFunc(action, initFunc) {
        const sql = viewRoles;
        db.query(sql, (err, result) => {
            console.table(result);
            initFunc();
        });
    }
    viewEmpFunc(action, initFunc) {
        const sql = empTableJoined;
        db.query(sql, (err, result) => {
            console.table(result);
            initFunc();
        });
    }

    addDeptFunc(action, initFunc) {
        inquirer
            .prompt({
                type: "input",
                name: "deptInputVal",
                message: "What is the name of the Department",
            })
            .then((answer) => {
                const sql = insertDept;

                db.query(sql, { name: answer.deptInputVal }, (err, result) => {
                    console.table(result);
                    initFunc();
                });
            });
    }

    addRoleFunc(action, initFunc) {
        const sql = viewDept;
        db.promise()
            .query(sql)
            .then(([rows, fields]) => console.table(rows))

            .then(() => {
                inquirer.prompt(deptQuestions).then((answer) => {
                    const {
                        roleNameInputVal,
                        roleSalaryInputVal,
                        roleDeptInputVal,
                    } = answer;
                    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;
                    const params = [
                        roleNameInputVal,
                        roleSalaryInputVal,
                        roleDeptInputVal,
                    ];

                    db.query(sql, params, (err, result) => {
                        console.table(result);
                        initFunc();
                    });
                });
            })
            .catch((err) => console.log(err));
    }

    addEmpFunc(action, initFunc) {
        const sqlMan = `${empTableJoined} WHERE department.name = 'Management'`;
        const sqlRole = viewDept;
        db.promise()
            .query(sqlMan)
            .then(([rows, fields]) => console.table(rows));
        db.promise()
            .query(sqlRole)
            .then(([rows, fields]) => console.table(rows))

            .then(() => {
                inquirer.prompt(empQuestions).then((answer) => {
                    const {
                        empFNInputVal,
                        empLNInputVal,
                        empRoleInputVal,
                        empManInputVal,
                    } = answer;
                    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
                    const params = [
                        empFNInputVal,
                        empLNInputVal,
                        empRoleInputVal,
                        empManInputVal,
                    ];

                    db.query(sql, params, (err, result) => {
                        console.table(result);
                        initFunc();
                    });
                });
            })
            .catch((err) => console.log(err));
    }

    async updEmpRoleFunc(action, initFunc) {
        let roleId, empId;

        try {
            await inquirer
                .prompt({
                    type: "list",
                    name: "upEmpInputVal",
                    message: "What Employee would you like to update?",
                    choices: await listEmp(),
                })
                .then((answer) => {
                    empId = [];
                    const splitArr = answer.upEmpInputVal.split(` - `);
                    splitArr.splice(0, 1);
                    empId.push(splitArr[0]);
                });
            await inquirer
                .prompt({
                    type: "list",
                    name: "upEmpRoleInputVal",
                    message: "What role would you like for this Employee?",
                    choices: await listRoles(),
                })
                .then((answer) => {
                    // reset roleId to 0
                    roleId = [];
                    const splitArr = answer.upEmpRoleInputVal.split(` - `);
                    splitArr.splice(0, 1);
                    roleId.push(splitArr[0]);
                    // role = answer;
                })
                .then(() => {
                    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
                    const params = [roleId, empId];

                    db.query(sql, params, (err, result) => {
                        console.table(result);
                        initFunc();
                    });
                });
        } catch (err) {
            console.log(err);
        }

    }
    //

    exitFunc() {
        process.exit(1);
    }
}
async function listEmp() {
    const sql = viewEmp;
    var listArr = [];
    try {
        await db
            .promise()
            .query(sql)
            .then(([rows, fields]) => {
                for (let i = 0; i < rows.length; i++) {
                    listArr.push(
                        `${rows[i].first_name} ${rows[i].last_name} - ${rows[i].id}`
                    );
                }
            });
    } catch (err) {
        console.error(err);
    }
    return listArr;
}

async function listRoles() {
    const sql = viewRoles;
    let rolesArr = [];
    try {
        await db
            .promise()
            .query(sql)
            .then(([rows, fields]) => {
                for (let i = 0; i < rows.length; i++) {
                    rolesArr.push(`${rows[i].title} - ${rows[i].id}`);
                }
            });
    } catch (err) {
        console.error(err);
    }
    return rolesArr;
}
module.exports = new TotalFunctions();