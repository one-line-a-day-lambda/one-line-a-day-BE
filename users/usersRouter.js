const router = require('express').Router()
const Users = require('./users-model.js')
const restricted = require('../auth/restricted.js')
//const headers = require('../data/headers.js')

router.get('/', restricted, (req, res) => {
    Users.find(req.body)
    .then( users => {
        res.status(200).json({users})
    })
    .catch(err => res.status(500).json({message: err}))
})

router.get('/all', restricted,  (req, res) => {
    Users.findAll()
    .then( users => {
        res.status(200).json({users})
    })
    .catch(err => res.status(500).json({message: err}))
})



router.get('/:id', restricted, validateUserId, async (req, res) => {
    
    Users.findById(req.params.id)
     .then(action => {
         res.status(200).json({action})
     })
     .catch(err => {
         res.status(500).json({message: err})
     })
 })

 router.delete('/:id', validateUserId, async (req, res) => {
    
    Users.remove(req.params.id)
     .then(action => {
         res.status(200).json({message: 'you have deleted this user'})
     })
     .catch(err => {
         res.status(500).json({message: err})
     })
 })

 async function validateUserId( req, res, next) {
 
    const id = await Users.findById(req.params.id);
  if (id !== null) {
    next()
  } else {
    res.status(400).json({message: "Invalid user id"})
  }
  };

  

module.exports = router