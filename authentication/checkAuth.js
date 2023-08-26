'use strict'

const authentication = (req, res, next) => {
    console.log('tui đi tới authen rồi nè!!!')
    const token = req.headers["authentication"]
    console.log(`Token:::`, token);
    next()
}

module.exports = {
    authentication
}