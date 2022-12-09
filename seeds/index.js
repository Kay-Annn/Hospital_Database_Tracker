//imports
const sequelize = require("../config/connection");
const seedFloor = require("./floorData");
const seedUser = require("./userData");

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedFloor();

    await seedUser();

    process.exit(0);
};

seedAll();