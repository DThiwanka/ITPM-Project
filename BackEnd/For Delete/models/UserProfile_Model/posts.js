const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const concat = require("concat");


const postSchema = new mongoose.Schema({

    fname: {
        type: String,
        required: true
    },

    lname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    pass: {
        type: String,
        required: true
    },

    tpnum: {
        type: String,
       // required: true
    },

    idvisa: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    btype: {
        type: String,
    },

    allergies: {
        type: String,
    },

    issues: {
        type: String,
    },

    tokens: [
        {
          token: {
            type: String,
            required: true,
          },
        },
      ],
})


// @Action - encrypt the password

postSchema.pre('save', async function(next){

    if(!this.isModified("pass")){
        next();
    }
    const salt = await bcrypt.genSalt(8);
    this.pass = await bcrypt.hash(this.pass, salt);
});

//Generate auth token

postSchema.methods.generateAuthToken = async function () {

    const posts = this;
    const token = jwt.sign({ _id: posts._id }, "jwtSecret");
    posts.tokens = posts.tokens.concat({ token });
    await posts.save();
    return token;
  
  };


  postSchema.statics.findByCredentials = async (email, pass) => {
    const pos = await posts.findOne({ email });
    if (!pos){
      throw new Error("Please enter authorized email");
    }
    const isMatch = await bcrypt.compare(pass, pos.pass);
    if (!isMatch) {
      throw new Error("Password is not matched");
    }
    return pos;
  };



  const posts = mongoose.model("posts", postSchema);
  
  module.exports = posts;


