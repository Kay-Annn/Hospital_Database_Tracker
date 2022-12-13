const { Patient } = require("../models");
const patientData = [
    {
        username: "Mary",
        role: "Patient",
        email: "mary@mary.com",
        password: "marypassword",
        FirstName: "Mary",
        LastName: "Doe",
        Age: "31",
        Gender: "Female",
        EmployeeAssigned: "John",
        CheckInDate: "2022-10-10",
        Procedure: "C-Section",
        PatientCost: "3333.30",
        floor: "Neurology"
    },
    {
        username: "William",
        role: "Patient",
        email: "william@william.com",
        password: "williampassword",
        FirstName: "William",
        LastName: "Spence",
        Age: "68",
        Gender: "Male",
        EmployeeAssigned: "Jane",
        CheckInDate: "2022-11-27",
        Procedure: "Brain Surgery",
        PatientCost: "7435.20",
        floor: "Neurology"
    },
    {
        username: "Janet",
        role: "Patient",
        email: "janet@janet.com",
        password: "thisismypassword1",
        FirstName: "Janet",
        LastName: "Dot",
        Age: "71",
        Gender: "Female",
        EmployeeAssigned: "John",
        CheckInDate: "2022-10-10",
        Procedure: "stitches",
        PatientCost: "523.30",
        floor: "Neurology"
    },
    {
        username: "Bradley.lastman",
        role: "Patient",
        email: "Bradley.lastman@lastman.com",
        password: "thisismypassword2",
        FirstName: "Bradley",
        LastName: "Lastman",
        Age: "54",
        Gender: "Male",
        EmployeeAssigned: "Jane",
        CheckInDate: "2022-11-21",
        Procedure: "open heart",
        PatientCost: "1286.99",
        floor: "Neurology"
    },
    {
        username: "Jason.may",
        role: "Patient",
        email: "jason.may@mayflowers.ca",
        password: "thisismypassword4",
        FirstName: "Jason",
        LastName: "May",
        Age: "41",
        Gender: "Male",
        EmployeeAssigned: "Henry",
        CheckInDate: "2022-12-14",
        Procedure: "yearly checkup",
        PatientCost: "120.76",
        floor: "Neurology"
    },
];
const seedPatient = () => Patient.bulkCreate(patientData);
module.exports = seedPatient;