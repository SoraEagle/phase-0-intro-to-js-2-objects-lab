// Write your solution in this file!
const employee = {
    name: "Michael",
    streetAddress: "1234 1st Street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const copyEmployee = {...employee};
    copyEmployee.name = "Sam";
    copyEmployee.streetAddress = "11 Broadway";
    return copyEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const copyEmployee = {...employee};
    delete copyEmployee.name;
    return copyEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}