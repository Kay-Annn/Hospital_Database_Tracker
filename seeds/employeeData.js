const { Employee } = require("../models");

const employeedata = [
    {
        username: "Jane",
        role: "Physician",
        email: "jane@jane.com",
        password: "janepassword",
        floor: "Cardiothoracic"
    },
    {
        username: "Mary",
        role: "Neurology",
        email: "mary@mary.com",
        password: "marypassword",
        floor: "Neurology"
    },
    {
        username: "John",
        role: "Physician",
        email: "john@john.com",
        password: "john",
        floor: "Obstetrics Gynecology"
    },
    {
        username: "William",
        role: "Patient",
        email: "william@william.com",
        password: "williampassword",
        floor: "Emergency Room"
    },
    {
        username: "Henry",
        role: "Physician",
        email: "henry@henry.com",
        password: "henrypassword",
        floor: "Walk in Clinic"
    }
];

const seedEmployee = () => Employee.bulkCreate(employeedata);

module.exports = seedEmployee;