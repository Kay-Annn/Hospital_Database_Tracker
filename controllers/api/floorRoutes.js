//imports
const router = require("express").Router();
const { Floor } = require("../../models");

//get all floors (GET)
router.get("/", (req, res) => {
    Floor.findAll({
        //include: [{/*inset other table data that is necessary*/}]
    }).then(data => res.json(data)).catch(err => {//default err msg
        res.status(500).json(err);
        console.log(err);
    });
});
//get one floor by id (GET)
router.get("/:id", (req, res) => {
    Floor.findOne({
        where: {
            id: req.params.id
        }//include...
    }).then(data => {
        if(!data){//if there is no data, rather than displaying nothing, display msg with explanation
            res.status(404).json({message: "There is no floor with this id"});
            return;
          }
        res.json(data);
    }).catch(err => {//default err msg
        res.status(500).json(err);
        console.log(err);
    });
});

//create floor (POST)
router.post("/", (req, res) => {
    Floor.create({
        department: req.body.department,
        procedure: req.body.procedure
    }).then(data => res.json(data)).catch(err => {//default err msg
        res.status(500).json(err);
        console.log(err);
    });
});

//update a floor by id (PUT)
router.put("/:id", (req, res) => {
    Floor.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(data => {
        if((!data) || (!data[0])){//if data is empty or id is empty
            res.status(404),json({message: "There is no floor with this id"});
            return;
          }
          res.json(data);
    }).catch(err => {//default err msg
        res.status(500).json(err);
        console.log(err);
    });
});

//delete a floor by id (DELETE)
router.delete("/:id", (req, res) => {
    Floor.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        if (!data) {//if there is no data
            res.status(404).json({ message: "There is no floor with this id" });
            return;
        }
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
        console.log(err);
    });
});

module.exports = router;