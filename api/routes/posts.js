const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//Tạo post
router.post("/", async (req, res) => {
  const newPost = new Post (req.body);
  try{
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
    
  } catch(err){
      res.status(500).json(err)
  }
});

//Cập nhập post
router.put("/:id", async (req, res) => {
  
  try {
    const post = await Post.findById(req.params.id);
    
      if(post.username === req.body.username)
      try{
        const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
          $set: req.body
        },{new: true});
        res.status(200).json(updatedPost);

    } catch(err) {
      res.status(500).json(err)
    
    } else {
      res.status(401).json("Bạn chỉ có thể cập nhập bài đăng của mình!")
    }
  } catch(err){
    res.status(500).json(err)
  }
});


// Delete post

router.delete("/:id", async (req, res) => {
  
  try {
    const post = await Post.findById(req.params.id);
    
      if(post.username === req.body.username)
      try{
        await post.delete();

        res.status(200).json("Bài đăng đã được xóa thành công !");

    } catch(err) {
      res.status(500).json(err)
    
    } else {
      res.status(401).json("Bạn chỉ có thể xóa bài đăng của mình!")
    }
  } catch(err){
    res.status(500).json(err)
  }
});

//Lấy post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Get tất cả post 

router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.user;

  
  try {
    let posts;
    if(username) {
      posts = await Post.find({username})
    }
    else if(catName) {
      posts = await Post.find({categories:{
        $in:[catName],
      },});
    } else{ 
      posts = await Post.find();
    }
    res.status(200).json(posts);

   
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
