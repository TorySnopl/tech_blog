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


router.post('/', async (req, res) => {
    try {
      const userData = await Users.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/login', async (req, res) => {
    try {
      const userData = await Users.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  

module.exports = router;
