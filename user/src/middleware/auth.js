const jwt = require('jsonwebtoken'),
    User = require('../models/user')

module.exports = {
    authentication(req, res, next) {
        if (req.headers.hasOwnProperty('token')) {
            try {
                req.userLoggedIn = jwt.verify(req.headers.token, process.env.SECRET)
                next()
            } catch {
                res.status(401).json({
                    message: 'User not authenticated'
                })
            }
        }
    },
    authorization(req, res, next) {
        User
            .findById(req.userLoggedIn.id)
            .then(function (oneUser) {
                if (!oneUser) {
                    res.status(401).json({
                        message: 'User not authorized'
                    })
                }
                else {
                    next()
                }
            })
            .catch(function (err) {
                res.status(500).json({
                    err
                })
            })
    }
}