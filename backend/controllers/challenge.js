const Challenge = require('../models/Challenge');

exports.getIndex = async (req, res) => {
    const challenge = await Challenge.find((data) => data);

    try {
        console.log(challenge);
        res.status(200).render('index', { challenge: challenge });
    } catch (error) {
        console.log(error);
        res.status(200).json({
          success: false
        })
    }
};

exports.getChallenges = async (req, res) => {
  const challenge = await Challenge.find();
  res.status(200).json(challenge);
};

exports.getChallenge = async (req, res) => {
    const challengeId = req.params.challengeId;

    const challenge = await Challenge.findById(challengeId, (challenge) => challenge);

    try {
        console.log(challenge);
        res.status(200).json(challenge);
        // res.status(200).render('challenge', { challenge: challenge });
    } catch (error) {
        console.log(error);
    }
};

exports.createChallenge = async (req, res, next) => {
    const challenge = { group_id: req.body.group_id, challenge_name: req.body.challenge_name, info: req.body.info, end_condition: req.body.end_condition, completed: req.body.completed, prize: req.body.prize};
    await Challenge.create(challenge, (err, c) => {
      if (err) {
        console.error(`Error occurred while saving ${err}`);
        return err;
      }
      const { _id } = c._id;
      console.log(`New challenge id: ${_id}`);
      result = _id;
      res.status(201).json({challengeId: _id});
      return _id;
    });

    // res.status(201).redirect('/');
};

exports.editChallenge = async (req, res) => {
    const challengeId = req.params.challengeId;
    const { group_id, challenge_name, info, end_condition, completed, prize } = req.body;

    let challenge = await Challenge.findById(challengeId);

    if (challenge) {
      challenge.group_id = group_id;
      challenge.challenge_name = challenge_name;
      challenge.info = info;
      challenge.end_condition = end_condition;
      challenge.completed = completed;
      challenge.prize = prize;

      challenge.save().then(() => {
        console.log('Item Updated');
        res.status(201).redirect('/');
      })
      .catch((err) => {
          console.error(err);
          res.status(404).json({status: err});
      });
    } else {
      console.warn("Document not found", challengeId);
      res.status(404).json({status: "bad"});
    }
};

//unsure if necessary
// exports.getEditChallenge = async (req, res) => {
//     const challengeId = req.params.challengeId;

//     const editMode = req.query.edit;

//     if (!editMode) {
//         return res.redirect('/');
//     }

//     const challenge = await Challenge.findById(challengeId);

//     try {
//         if (!challengeId) {
//             return res.redirect('/');
//         }
//         console.log(challenge);
//         res.status(200).render('edit-challenge', { challenge: challenge, editing: editMode });
//     } catch (error) {
//         console.log(error);
//     }
// };
// res.status(200).render('edit-challenge');