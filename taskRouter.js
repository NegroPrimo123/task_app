const Router = require('express')
const router = new Router()

const taskController = require('../Controllers/taskController')

router.get('/getTask', taskController.getAllTask)
router.post('/createTask', taskController.createTask)

module.exports = router