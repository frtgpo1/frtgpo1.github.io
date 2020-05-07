/* Callback Funktionen - Mehrere Ebenen */
let employee = null;
const employeeData = {name: "Sascha", age: 34};

printEmployee = () => {
 console.log(employee);
}

assignEmployeeValues = (employeeObject, name, age, callback) => {
    employeeObject.name = name;
    employeeObject.age = age;
    callback(employee);
}

initializeEmployee = (employeeData, callback) => {
    const {name, age} = employeeData;
    employee = {};
    callback(employee, name, age, printEmployee);
}

initializeEmployee(employeeData, assignEmployeeValues);

/* Callback Funktionen - Eine Ebene */
let customer = {};
const customerData = {name: "Hans", age: 33};

printCustomer = () => {
    console.log(customer);
}

assignCustomerValues = (customerObject, name, age) => {
    customerObject.name = name;
    customerObject.age = age;
}

initializeCustomer = (customerData, callback1, callback2) => {
    const {name, age} = customerData;
    callback1(customer, name, age, printCustomer);
    callback2();
}

initializeCustomer(customerData, assignCustomerValues, printCustomer);

/* Callback Funktionen - Zusammenfassung */
/* Definition */
method1 = (para1, para2, callback) => {
    const val3 = para1 + para2;
    console.log("1");
    const val4 = Math.random() * val3;
    console.log("2");
    callback(val4);
    console.log("4");
}
/* Aufruf mit anonymer Funktion */
method1(3, 4, () => {
    console.log("3");
});

/* Aufruf mit definierter Funktion */
callbackFunction = (para) => {
    const val = para - 3;
    console.log("3");
    console.log(val);
}
method1(3, 4, callbackFunction);