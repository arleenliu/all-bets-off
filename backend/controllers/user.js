const User = require('../models/User');

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

exports.getUser = async (req, res) => {
    const userId = req.params.userId;

    const user = await User.findById(userId);

    try {
        res.status(200).json(user);
        // res.status(200).render('challenge', { challenge: challenge });
    } catch (error) {
        console.log(error);
    }
};

exports.createUser = async (req, res, next) => {
    await User.create(req.body, (err, result) => {
      if (err) {
        console.error(`Error occurred while saving ${err}`);
        return err;
      }
      const { _id } = result._id;
      console.log(`New User id: ${_id}`);
      res.status(201).json({userId: _id});
      return _id;
    });
};

exports.editUser = async (req, res) => {
    const userId = req.params.userId;

    let user = await User.findById(userId);

    if (user) {
      Object.assign(user, req.body);

      user.save().then(() => {
        console.log('Item Updated');
        res.status(201).redirect('/');
      })
      .catch((err) => {
          console.error(err);
          res.status(500).json({status: err});
      });
    } else {
      console.warn("Document not found", userId);
      res.status(404).json({status: "bad"});
    }
};