'use strict'

const CryptoJS = require("crypto-js");
const CustomerModel = require('../model/customer.repo')

const SECRECT_KEY = '123'

class CustomerController {

    /**
     * 1. kiểm tra input có valid không
     * 2. kiểm tra username có hợp lệ
     * 3. băm password
     * 4. save to database
     */
    static signUp = async (req, res, next) => {
        try {
            // 1.
            const { password, email, fullname } = req.body
            if(!password || !email || !fullname) throw new Error('Inputs are not valid!!')
            // 2.
            const foundCustomer = await CustomerModel.getCustomerByEmail(email)
            if(foundCustomer) throw new Error(`Customer existing`)
            // 3.
            const passwordCipher = CryptoJS.AES.encrypt(password, SECRECT_KEY).toString();
            // 4.
            const results = await CustomerModel.create({ 
                email: email, 
                fullname: fullname, 
                password: passwordCipher 
            })

            res.status(200).json({
                code: 200,
                message: 'Create customer success!',
                data: results
            })
        } catch (err) {
            res.status(500).json({
                code: 500,
                message: 'Error:::',
                error: err
            })
        }
    }

    static getCustomer = async () => {

    }
}

module.exports = CustomerController