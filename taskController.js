const pool = require('../db')

class taskController {

    async getAllTask(req,res) {

        try {

            const task = await pool.query(
                `
                SELECT username, task
                FROM task_list JOIN users
                ON task_list.id = users.id
                `
            )
            res.json(task.rows)

        } catch(error){

            console.log(error)
        }
    }

    async createTask(req,res) {
        const { user_id, task } = req.body
        try{
            const result = await pool.query(
                `INSERT INTO task_list (user_id, task) VALUES ($1, $2) RETURNING *`, 
                [user_id, task])
            res.json(result.rows)
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = new taskController()