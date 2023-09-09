'use strict'


const { con } = require('../model/index')
class ProductModel{
    static getProduct =async()=>{
       return new Promise((resolve, reject)=>{
        con.query("SELECT * FROM products ", function(error, results, fields){
            if(error) reject(error)
           
            resolve(results)
        })
       }) 
    }
}
 module.exports=ProductModel