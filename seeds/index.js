//imports
const sequelize = require("../config/connection");
const seedFloor = require("./floorData");

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedFloor();

    process.exit(0);
};

seedAll();