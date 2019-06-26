const router = require('express').Router()
const Users = require('../users/users-model.js')
const bcrypt = require('bcryptjs'); // 
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js')
const restricted = require('../auth/restricted.js')

router.post('/register', (req,res) => {
    let user = req.body // user = to content user sends
    const hash = bcrypt.hashSync(user.password, 10) // hashes password sent 2 ^ 10th power times
    user.password = hash // password set = to this new hashed value

    Users.add(user) 
    .then(newUser => {
        res.status(201).json({newUser})// adds new user to db
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})


router.post('/login', (req, res) => {
    let {username, password} = req.body;

    Users.findBy({username})
    .first()
    .then(user => { //if user and encrypted password exists
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user) //calls generateToken fn  and passes user as argument (username and pass)
            req.session.user = user;
            res.status(200).json({
                message: `Welcome ${user.username}, you have successfully logged in`,
                id: user.id,
                token
            })
        } else {
            res.status(401).json({message: 'Invalid username or password'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})




function generateToken(user) { //brings in username and password generated at login
    const payload = { //creates data object called payload -- all data is created by fn -- we can create any data we want for this token
      subject: user.id, // sets subject == the user id
      username: user.username, //sets username == username
    
    };
  
    const options = { //options to be set
      expiresIn: '1d', //have token last for 1 day
    };
     //returns the fn with a 'signature' set to the payload, signed with the secret key, and set options
     //if user changes anything on the token on their end, signature will not sign.
    return jwt.sign(payload, secrets.jwtSecret, options);
  }


module.exports = router