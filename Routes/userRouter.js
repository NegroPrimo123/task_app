const Router = require('express')
const router = new Router()

const userController = require('../Controllers/userController')

router.get('/getAllUsers', userController.getUsers)
router.post('/createUser', userController.createUsers)
router.get('/getUser', userController.getNegr)

module.exports = router