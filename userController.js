const pool = require('../db')

class userController{

    async getUsers(req,res){
        try{
            const all_users = await pool.query(`SELECT * FROM users`)
            res.json(all_users.rows)

        }catch(error){
            console.log(error)
        }
    }

    async createUsers(req,res){
        const { username, email, password } = req.body
        try{
            const createUsersResult = await pool.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`, [username, email, password])
            res.json(createUsersResult.rows)
        }catch(error){
            console.log(error)
        }
    }

    async getNegr(req,res){
        try{
            const result = await pool.query(`Select username from users`)
            res.json(result.rows)
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = new userController()