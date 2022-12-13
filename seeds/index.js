//imports
const sequelize = require("../config/connection");
const seedEmployee = require("./employeeData");
const seedPatient = require("./patientData");
const seedFloor = require("./floorData");
const seedUser = require("./userData");

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedFloor();

    await seedUser();

    await seedPatient();

    await seedEmployee();

    process.exit(0);
};

seedAll();