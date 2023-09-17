'use strict'
 
class CartController{
    static addproduct = async (req, res, next) => {
        try {
            const { userId, productId } = req.query
            console.log('Session::::::::', req.session)


            req.session.regenerate(function (err) {
                if (err) next(err)
            
                // store user information in session, typically a user id
                req.session.cookie.user = userId
            
                // save the session before redirection to ensure page
                // load does not happen before session is saved
                req.session.save(function (err) {
                  if (err) return next(err)
                  res.status(200).json({
                    message: 'Get categories success!',
                    data: null
                })
                })
              })



            if(!req.session.cart) {
                // req.session.cart = {
                //     userId,
                //     productList: [
                //         { id: productId, quantity: 1 }
                //     ]
                // }
            } else {

            }





        }
        catch (err) {
            console.log(err)
            res.status(500).json({
                code: 500,
                message: 'Error::: c',
                error: err.message
            })
        }


    }
   
    
}
module.exports = CartController