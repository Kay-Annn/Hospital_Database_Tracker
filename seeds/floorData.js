const { Floor } = require("../models");

const floordata = [
    {
        department: "Cardiothoracic",
        procedure: "open heart",
    },
    {
        department: "Neurology",
        procedure: "Brain surgery",
    },
    {
        department: "Obstetrics Gynecology",
        procedure: "C-section",
    },
    {
        department: "Emergency Room",
        procedure: "Stitches",
    },
    {
        department: "Walk in Clinic",
        procedure: "Yearly check up",
    }
];

const seedFloor = () => Floor.bulkCreate(floordata);

module.exports = seedFloor;