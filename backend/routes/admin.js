const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/add-challenge', adminController.getAddChallenge);

router.post('/add-challenge', adminController.postChallenge);

router.get('/:challengeId', adminController.getAnime);

module.exports = router;