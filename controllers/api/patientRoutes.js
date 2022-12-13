const router = require('express').Router();
const {Patient} = require('../../models');

//GET
router.get('/', async (req, res) => {
    try {
        const patientData = await Patient.findAll({
        });
        res.status(200).json(patientData);
    }
    catch (error) {
        res.status(500).json(error);
    }
    });

router.get('/:', async (req,res) => {
    try {
        const patientData = await Patient.findOne({
          where: { user: req.body.Patient }
        });
        }
        catch (err) {
            res.status(400).json(err);
          }
        })
//CREATE
router.post('/', async (req, res) =>{
    try {
        const patientData = await Patient.create({
            where: {id: req.body.Patient}
        })
    }
    catch (err) {
        res.status(400).json(err);
      }
})



router.delete('/id', async (req, res) =>{
    try {
        const patientData = await Patient.destroy({
            where: {id: req.body.patientData}
        })
    }
    catch (err) {
        res.status(400).json(err);
      }
})


        
  module.exports = router;