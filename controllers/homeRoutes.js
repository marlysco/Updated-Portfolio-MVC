const router = require('express').Router();

router.get('/', (req,res)=> {
    res.render("info")
});

router.get('/featuredWork', async (req,res)=>{
    res.render("featuredWork");
    });

router.get('/contact', (req,res)=> {
        res.render("contact")
});

module.exports = router;

