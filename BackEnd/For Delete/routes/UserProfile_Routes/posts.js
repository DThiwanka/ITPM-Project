const express = require('express');
// const posts = require('../../models/UserProfile_Model/posts');
// const { findByIdAndDelete } = require('../../models/UserProfile_Model/posts');
const jwt = require("jsonwebtoken");
// const auth = require('../../../FrontEnd/client/middleware/auth');
const router = express.Router();


//save posts

/*router.post('/post/save',(req, res)=>{

    let newPost = new Posts(req.body);

    newPost.save((err)=>{
        if(err){
        return res.status(400).json({
            error:err
        });
    }

    return res.status(200).json({
        success:"Posts Saved Successfully"

        });

    });*/

//save posts2

router.post("/post/save", async (req, res) => {
    try {
      const {
        fname,
        lname,
        email,
        pass,
        tpnum,
        idvisa,
        gender,
        address,
        btype,
        allergies,
        issues
      } = req.body;

      let pos = await posts.findOne({ email })
    if (pos) {
      throw new Error("User already exists");
    }

      pos = {
        fname:fname,
        lname:lname,
        email:email,
        pass:pass,
        tpnum:tpnum,
        idvisa:idvisa,
        gender:gender,
        address:address,
        btype:btype,
        allergies:allergies,
        issues:issues,
      };
      const newPost = new posts(pos);
      await newPost.save();
      const token = await newPost.generateAuthToken();
      res
        .status(201)
        .send({ status: "posts Created", posts: newPost, token: token });

    } catch (error) {

      console.log(error.message);

      res.status(500).send({error: error.message});

    }

  });







//get posts

router.get('/posts',(req, res)=>{
    posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//get Specific posts

router.get('/post/:id',(req, res)=>{

    let postId = req.params.id;

    posts.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
        success:true,
        post
        });
    });

});


//Update Posts

router.put('/post/update/:id',(req, res)=>{
    posts.findByIdAndUpdate(
    req.params.id,
    {
        $set:req.body
    },
    (err,post)=>{
        if(err){
        return res.status(400).json({error:err});
    }

    return res.status(200).json({
        success:"Updated Successfully"
        });
    }
);

});

//Delete Post

router.delete('/post/delete/:id',(req, res)=>{
    posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{

    if (err) return res.status(400).json({
        message:"Delete Unsuccessful",err
    });

    return res.json({
        message:"Delete Successfull",deletedPost
        });
    });
});

//login Function

router.post('/post/login', async (req, res) => {
    try {
      const {email, pass} = req.body
      const pos = await posts.findByCredentials(email, pass)
      const token = await pos.generateAuthToken()
      res.status(200).send({token: token, pos: pos})
    } catch (error) {
      res.status(500).send({ error: error.message });
      console.log(error);
    }
  })


  //Get user profile
  
  router.get("/post/profile", async (req, res) => {
    try {
      res
        .status(201)
        .send({ status: "customer logged in", pos: req.pos
       });
    } catch (error) {
      res
        .status(500)
        .send({ status: "Error with /profile", error: error.message });
    }

  });

  module.exports = router;

  
