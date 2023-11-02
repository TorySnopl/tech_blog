const router = require('express').Router();
const { Users, Posts } = require('../models');

router.get('/',async (req,res)=>{
    try{
        const postData = await Posts.findAll({
          
        });

        const posts = postData.map((post)=> post.get({plain: true}));

        res.render('homepage',{
            posts,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
   
});


router.get('/login', (req,res)=>{

    res.render('login');
}
);

router.get('/register', (req,res)=>{

    res.render('register');
}
);

router.get('/dashboard', (req,res)=>{

  res.render('dashboard');
}
);




module.exports = router;
