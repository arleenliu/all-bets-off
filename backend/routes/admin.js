const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/add-challenge', adminController.getAddChallenge);

router.post('/add-challenge', adminController.postChallenge);

router.get('/edit-challenge/:challengeId', adminController.getEditChallenge);

router.get('/edit-challenge', adminController.postEditChallenge)

router.get('get-challenge/:challengeId', adminController.getChallenge);

module.exports = router;