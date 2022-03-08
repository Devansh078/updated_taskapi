const express = require('express');
//const app = express();
const User = require('../model/user');
//const router = express();
const router = express.Router();
router.get('/',async (req,res)=>{
try {
const posts = await User.find();
res.json(posts);
}catch(err)
{res.json({message:err});}
})

router.post("/", async (req,res)=>{
    // console.log(req.body);
     const user = new User({
        desc:req.body.desc,
         title:req.body.title,
         date:req.body.date
     });

      try{
     const savePost = await user.save();
     res.json(savePost);
     }catch(err){
     res.json({message: err});
     }
 });

module.exports = router;