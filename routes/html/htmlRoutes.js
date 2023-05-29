const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');


//render public-facing homepage
router.get('/', async (req, res) => {
    try {
        //get all blog posts from db
        const blogData = await Blog.findAll({
            include: [{
                model: User,
                attributes: ['username']
            },
        ],
            order: ['createdAt', 'DESC']
        });
        const blogPosts = blogData.map((blog) => blog.get({ plain: true }));

        //render template
        res.render('home', {
            blogPosts,
            username: req.session.user_username,
        });
        if(req.session.logged_in) {
            res.redirect('/home');
        } else {
            res.render('login');
        }
    } catch (error) {
        res.status(500).json({error});
    }
});

//render sign-up page
router.get('/signup', (req, res) => {
    try {
        res.render('signup');
    } catch (error) {
        res.status(500).json({error});
    }
});

//redirect /dashboard to logged-in user's dashboard
router.get('/dashboard/:id', async (req, res) => {
    try {
        //render all Blogs for User
        const userId = req.params.id;
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username', 'id'],
                },
            ],
            where: { author_id: userId },
            order: ['createdAt', 'DESC'],
        });
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        res.render('dashboard', {
            blogs,
            username: req.session.user_username,
        });

        //if user is logged in
        if (req.session.logged_in) {
            //redirect to dashboard using id
            res.redirect(`/dashboard/${req.session.user_id}`);
        //if not logged-in redirect to login
        } else {
            res.redirect ('/login');
        }
    } catch (error) {
        res.status(500).json({error});
    }
});




module.exports = router;