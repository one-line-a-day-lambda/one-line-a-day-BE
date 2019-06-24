const jwt = require('jsonwebtoken')//importing web tokens from json

const secrets = require('../config/secrets.js')//signature used to check if token != changed

module.exports = (req, res, next) => {
    const token = req.headers.authorization //sets token == value of authorization in the header

    if (token) { //if token exists
        jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => { //verifies token, and signature, and checks for errors
            if(err) {
                //if invalid token
                res.status(401).json({message: 'invalid credentials'})
            } else {
                // if valid token set req.user to an object where it sets department == the token's department value, and username = the token's username value
                req.user = { username: decodeToken.username}
                next()
            }
        })
    }  else {
        res.status(400).json({message: 'No token provided'})
    }
}


