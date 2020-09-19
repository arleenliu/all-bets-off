const Challenge = require('../models/Challenge');

exports.getIndex = async (req, res) => {
    const challenge = await Challenge.find((data) => data);

    try {
        console.log(challenge);
        res.status(200).render('index', { challenge: challenge });
    } catch (error) {
        console.log(error);
    }
};

exports.getChallenge = async (req, res) => {
    const challengeId = req.params.challengeId;

    const challenge = await Challenge.findById(challengeId, (challenge) => challenge);

    try {
        console.log(challenge);
        res.status(200).render('challenge', { challenge: challenge });
    } catch (error) {
        console.log(error);
    }
};

exports.getAddChallenge = (req, res) => {
    res.status(200).render('edit-challenge');
};

exports.postChallenge = (req, res) => {
    const { group_id, challenge_name, info, end_condition, completed, prize } = req.body;

    const challenge = new Challenge({ group_id: group_id, challenge_name: challenge_name, info: info, end_condition: end_condition, completed: completed, prize: prize });
    challenge.save();
    console.log('Challenge Added to the database');
    res.status(201).redirect('/');
};