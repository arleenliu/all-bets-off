const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/challenge', adminController.getChallenges);

router.post('/challenge', adminController.createChallenge);

router.put('/challenge/:challengeId', adminController.editChallenge);

router.get('/challenge/:challengeId', adminController.getChallenge);

router.get('/challenge-form', (req, res) => res.status(200).render('edit-challenge'));

module.exports = router;