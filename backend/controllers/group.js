const Group = require('../models/Group');

exports.getGroups = async (req, res) => {
  const groups = await Group.find();
  res.status(200).json(groups);
};

exports.getGroup = async (req, res) => {
    const groupId = req.params.groupId;

    const group = await Group.findById(groupId).populate('challenges');

    try {
        res.status(200).json(group);
        // res.status(200).render('challenge', { challenge: challenge });
    } catch (error) {
        console.log(error);
    }
};

exports.createGroup = async (req, res, next) => {
    await Group.create(req.body, (err, result) => {
      if (err) {
        console.error(`Error occurred while saving ${err}`);
        return err;
      }
      const { _id } = result._id;
      console.log(`New Group id: ${_id}`);
      res.status(201).json({groupId: _id});
      return _id;
    });
};

exports.editGroup = async (req, res) => {
    const groupId = req.params.groupId;

    let group = await Group.findById(groupId);

    if (group) {
      Object.assign(group, req.body);

      group.save().then(() => {
        console.log('Item Updated');
        res.status(201).redirect('/');
      })
      .catch((err) => {
          console.error(err);
          res.status(500).json({status: err});
      });
    } else {
      console.warn("Document not found", groupId);
      res.status(404).json({status: "bad"});
    }
};