'use strict'
const { con } = require('../model')
const JWT = require('jsonwebtoken')
const SECRECT_KEY = 'abc'

class ShopController {

    static createShop = (req, res, next) => {
        const { username, password, shopname, address, role } = req.body;
        con.query('INSERT INTO shop SET ?', {
            username, password, shopname, address, role
        }, function (error, results, fields) {
            try {
                if (error) throw error;
                // Neat!
                res.status(200).json({
                    code: 200,
                    message: 'Create shop success!',
                    data: results
                })

            } catch(err) {
                res.status(500).json({
                    code: 500,
                    message: 'Error:::',
                    error: err
                })
            }

        });
    }

    static login = (req, res, next) => {
        try {
            const { username, password } = req.body
            if(!username || !password) throw new Error('Errorr: invalid username or password!')

            con.query('SELECT * FROM shop WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
                if (error) throw error;
                const foundShop = results[0] ? results[0] : {}
                const token = JWT.sign({ username: foundShop.username, password: foundShop.password }, SECRECT_KEY)
                res.status(200).json({
                    code: 200,
                    message: 'Login Ok!!!',
                    data: {
                        token
                    }
                })
              });

        } catch(err) {
            res.status(500).json({
                code: 500,
                message: 'Error:::',
                error: err
            })
        }
    }
}

module.exports = ShopController