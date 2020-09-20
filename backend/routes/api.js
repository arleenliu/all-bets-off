const express = require('express');
const challenge = require('../controllers/challenge');
const user = require('../controllers/user');
const group = require('../controllers/group');
const task = require('../controllers/task');

const router = express.Router();

router.get('/', challenge.getIndex);

router.get('/challenge', challenge.getChallenges);
router.post('/challenge', challenge.createChallenge);
router.put('/challenge/:challengeId', challenge.editChallenge);
router.get('/challenge/:challengeId', challenge.getChallenge);
router.get('/challenge-form', (req, res) => res.status(200).render('edit-challenge'));

router.get('/user', user.getUsers)
router.post('/user', user.createUser)
router.get('/user/:userId', user.getUser)
router.put('/user/:userId', user.editUser);

router.get('/group', group.getGroups)
router.post('/group', group.createGroup)
router.get('/group/:groupId', group.getGroup)
router.put('/group/:groupId', group.editGroup)

router.get('/task', task.getTasks)
router.post('/task', task.createTask)
router.get('/task/:taskId', task.getTask)
router.put('/task/:taskId', task.editTask)

module.exports = router;