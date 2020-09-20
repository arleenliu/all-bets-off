const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  const tasks = await Task.find().populate('challengeId').populate('userId').populate('groupId').execPopulate();
  res.status(200).json(tasks);
};

exports.getTask = async (req, res) => {
    const taskId = req.params.TaskId;

    const task = await Task.findById(taskId);

    try {
        res.status(200).json(task);
        // res.status(200).render('challenge', { challenge: challenge });
    } catch (error) {
        console.log(error);
    }
};

exports.createTask = async (req, res, next) => {
    await Task.create(req.body, (err, result) => {
      if (err) {
        console.error(`Error occurred while saving ${err}`);
        return err;
      }
      const { _id } = result._id;
      console.log(`New Task id: ${_id}`);
      res.status(201).json({taskId: _id});
      return _id;
    });
};

exports.editTask = async (req, res) => {
    const taskId = req.params.taskId;

    let task = await Task.findById(taskId);

    if (task) {
      Object.assign(task, req.body);

      task.save().then(() => {
        console.log('Item Updated');
        res.status(201).redirect('/');
      })
      .catch((err) => {
          console.error(err);
          res.status(500).json({status: err});
      });
    } else {
      console.warn("Document not found", taskId);
      res.status(404).json({status: "bad"});
    }
};