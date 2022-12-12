// eslint-disable-next-line no-undef
var express = require('express');
var router = express.Router();
const {employee} = require("../../models");
const path = require("path");

/* GET home page. */
router.get('/', function (req, res, next) {
    //do we have cookie
    console.log('%c cookies ', 'color:#fff; background:#00897b ')
    console.log(req.cookies)

    if (req.cookies.isLogin) {
        res.sendFile(path.join(__dirname, '../../public/index.html'));
    } else {
        res.redirect('/api/employee/login');
    }

});
router.get('/login', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../public/login.html'));
});
router.post('/login', async function (req, res, next) {
    console.log('%c Start Testing ', 'color:#fff; background:#00897b ')
    console.log(req.body);
    let username = req.body.name || '';
    let password = req.body.password || '';
    let role = req.body.role;
    if (role !== 'null') {
        const users = await employee.findAll({
            where: {username: username, password: password, role: role}
        });
        if (users.length > 0) {
            res.send({code: 500, msg: 'User Exist!'});
        } else {
            const user = await employee.create({
                username: username, password: password, role: role
            });
            res.cookie('isLogin', '1', {maxAge: 60 * 60 * 1000});
            res.send({msg: 'Success!', code: 200});
        }
        return
    }

    if (username && password) {
        //if we have that user or not
        const users = await employee.findAll({
            where: {username: username, password: password}
        });
        if (users.length > 0) {
            //set cookie to 1hr
            res.cookie('isLogin', '1', {maxAge: 60 * 60 * 1000});
            res.send({code: 200, msg: 'Success'});
        } else {
            res.send({msg: 'Username or password incorrect'});
        }
    } else {
        res.send({msg: 'User name or password incorrect'});
    }
});


//read all data
router.get('/read', async function (req, res, next) {
    const users = await employee.findAll();
    res.send(users);
})


module.exports = router;
