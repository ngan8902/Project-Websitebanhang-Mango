'use strict'


const { con } = require('../model/index')
class ProductModel{
    static getProducts =async()=>{
       return new Promise((resolve, reject) => {
            con.query("SELECT * FROM products ", function(error, results, fields){
                if(error) reject(error)
            
                resolve(results)
            })
       }) 
    }

    static initTableToDB = async () => {
        var sql2 ="CREATE TABLE IF NOT EXISTS products (ProductID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, CategoryID INT NOT NULL, Name VARCHAR(50) NOT NULL, Description VARCHAR(1000) NOT NULL, Price INT NULL,  ImagePath VARCHAR(255) NULL, FOREIGN KEY (CategoryID) REFERENCES categories(CategoryID)) ";
        con.query(sql2,function(err,result){
            if(err) throw err;
            console.log("Table products created!")
        })
    }
}
 module.exports=ProductModel