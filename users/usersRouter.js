const router = require('express').Router()
const Users = require('./users-model.js')
const restricted = require('../auth/restricted.js')


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



router.get('/:id', restricted, async (req, res) => {
    
    Users.findById(req.params.id)
     .then(action => {
         res.status(200).json({action})
     })
     .catch(err => {
         res.status(500).json({message: err})
     })
 })

 router.delete('/:id', async (req, res) => {
    
    Users.remove(req.params.id)
     .then(action => {
         res.status(200).json({message: 'you have deleted this user'})
     })
     .catch(err => {
         res.status(500).json({message: err})
     })
 })

module.exports = router