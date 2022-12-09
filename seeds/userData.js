const { User } = require("../models");

const userData = [
    {
        username: "Jane",
        role: "Physician",
        email: "jane@jane.com",
        password: "janepassword"
    },
    {
        username: "Mary",
        role: "Patient",
        email: "mary@mary.com",
        password: "marypassword"
    },
    {
        username: "John",
        role: "Physician",
        email: "john@john.com",
        password: "john"
    },
    {
        username: "William",
        role: "Patient",
        email: "william@william.com",
        password: "williampassword"
    },
    {
        username: "Henry",
        role: "Physician",
        email: "henry@henry.com",
        password: "henrypassword"
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;