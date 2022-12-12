// eslint-disable-next-line no-undef
var express = require('express');
var router = express.Router();
const {employee} = require("../../models");
const path = require("path");

/* GET home page. */
router.get('/', function (req, res, next) {
    //判断是否有cookie
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
    console.log('%c 开始测试 ', 'color:#fff; background:#00897b ')
    console.log(req.body);
    let username = req.body.name || '';
    let password = req.body.password || '';
    let role = req.body.role;
    if (role !== 'null') {
        const users = await employee.findAll({
            where: {username: username, password: password, role: role}
        });
        if (users.length > 0) {
            res.send({code: 500, msg: '已存在此人'});
        } else {
            const user = await employee.create({
                username: username, password: password, role: role
            });
            res.cookie('isLogin', '1', {maxAge: 60 * 60 * 1000});
            res.send({msg: '注册成功', code: 200});
        }
        return
    }

    if (username && password) {
        //查询数据库有无此人
        const users = await employee.findAll({
            where: {username: username, password: password}
        });
        if (users.length > 0) {
            //设置网页cookie 有效期为1小时
            res.cookie('isLogin', '1', {maxAge: 60 * 60 * 1000});
            res.send({code: 200, msg: '登录成功'});
        } else {
            res.send({msg: '用户名或密码错误'});
        }
    } else {
        res.send({msg: '用户名或密码错误'});
    }
});


//读取全部数据
router.get('/read', async function (req, res, next) {
    const users = await employee.findAll();
    res.send(users);
})


module.exports = router;
