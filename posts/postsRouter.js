// endpoints here

const Posts = require('./posts-model.js')
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
   // res.send('hello world')
    Posts.find()
    .then(posts => {
      res.status(200).json({posts})
    })
    .catch(err => {
      res.status(500).json({message: err})
    })
  })
  
router.get('/:id', validatePostId, async (req, res) => {

   Posts.findById(req.params.id)
    .then(post => {
        res.status(200).json({post})
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})
  
router.post('/',  (req,res) => {
    Posts.add(req.body)
    .then(newpost=> {    
        res.status(201).json({newpost})
    })
    .catch(err => {
     
        res.status(502).json({message: err})
        
    })
})
  
router.delete('/:id', validatePostId, async (req, res) => {
    Posts.remove(req.params.id)
    .then(post => {

        res.status(200).json({message: 'You have deleted this post'})
    
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
 })
  
router.put('/:id', validatePostId, async (req, res) => { 
    Posts.update(req.params.id, req.body)
    .then(post => {
        res.status(200).json({post})
    })
    .catch(err => {
        res.status(500).json({message: err})    
    })
})

  async function validatePostId( req, res, next) {
 
    const id = await Posts.findById(req.params.id);
  if (id.length !== 0) {
    next()
  } else {
    res.status(400).json({message: "Invalid post id"})
  }
  };

  function validatePost(req, res, next) {
    const body = Object.keys(req.body);//converts object to array to get length
    const post = req.body;
    if (post && post.post ) {
      next();
    }
    if (body.length <= 0)  {
      res.status(400).json({message: 'missing post data'})
    }
    if ( !post.post) {
      res.status(400).json({message: 'missing required post field'})
    }
   
  };

  module.exports = router;