const Challenge = require('../models/Challenge');
const mongoose = require('mongoose');

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
    var result;
    Challenge.create(challenge, (err, c) => {
        if (err) return `Error occurred while saving ${err}`;
        const { _id } = c._id;
        console.log(`New challenge id: ${_id}`);

        result = c._id;
        return _id;
      });

    res.status(201).send(result);
    // res.status(201).redirect('/');
};

exports.postEditChallenge = (req, res) => {
    const challengeId = req.body.challengeId;
    const { group_id, challenge_name, info, end_condition, completed, prize } = req.body;

    Challenge.findById(challengeId)
        .then((challenge) => {
            challenge.group_id = group_id;
            challenge.challenge_name = challenge_name;
            challenge.info = info;
            challenge.end_condition = end_condition;
            challenge.completed = completed;
            challenge.prize = prize;

            return challenge.save();
        })
        .then(() => {
            console.log('Item Updated');
            res.status(201).redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
};

//unsure if necessary
exports.getEditChallenge = async (req, res) => {
    const challengeId = req.params.challengeId;

    const editMode = req.query.edit;

    if (!editMode) {
        return res.redirect('/');
    }

    const challenge = await Challenge.findById(challengeId);

    try {
        if (!challengeId) {
            return res.redirect('/');
        }
        console.log(challenge);
        res.status(200).render('edit-challenge', { challenge: challenge, editing: editMode });
    } catch (error) {
        console.log(error);
    }
};