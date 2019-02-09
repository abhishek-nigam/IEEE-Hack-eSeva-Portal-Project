const router = require('express').Router();

const Problem = require('../../models/problem');
const constants = require('../../constants');
const imageParser = require('../../utils/cloudinaryImageParser');


router.get('/allProblems', (req, res) => {

});


router.get('/submittedProblems', (req, res) => {

});


router.get('/upvotedProblems', async (req, res) => {

});


router.get('/submitProblem', (req, res) => {
    return res.render('problem/submitProblem',{category: constants.categoriesList, region: constants.regionsList});
});


router.post('/submitProblem', imageParser.array('images', 3), async (req, res) => {

    // if (!req.isAuthenticated()) {
    //     res.flash('error', 'You need to sign in first');
    //     return res.redirect("/user/public/signin");
    // }

    const problemId = req.body.category + '--' + req.body.region + '--' + String(Date.now() % 100000);
    const imageUrl1 = req.files[0] ? req.files[0].url : null;
    const imageUrl2 = req.files[1] ? req.files[1].url : null;
    const imageUrl3 = req.files[2] ? req.files[2].url : null;

    const newProblem = new Problem({
        problem_id: problemId,
        author_id: "5c5f1ab7ef1c050344e27733",
        region: req.body.region,
        category: req.body.category,
        representative_name: constants.regionReps[req.body.region],
        image_url_1: imageUrl1,
        image_url_2: imageUrl2,
        image_url_3: imageUrl3,
        status_code: constants.statusCodes.POSTED,
        problem_title: req.body.problem_title,
        problem_desc: req.body.problem_desc,
        is_posted_anonymously: req.body.is_posted_anonymously === 'true' ? true : false
    });

    await newProblem.save();

    res.flash('success', 'Problem submitted successfully');
    return res.redirect("/user/public/dashboard");
});


router.get('/problem/:id', (req, res) => {

});


module.exports = router;