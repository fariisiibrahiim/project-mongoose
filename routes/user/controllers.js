const mongoose = require("mongoose");
const User = require("../../models/user");
// const obejctId = mongoose.Schema.Types.ObjectId;

module.exports = {
  addUser: (req, res) => {
    User.create(req.body)
      .then(result =>
        res.send({
          message: "User Created",
          result
        })
      )
      .catch(err =>
        res.send({
          message: "User Creation Failed",
          error: err.stack
        })
      );
  },
  deleteUser: (req, res) => {
    User.findOneAndDelete({ _id: req.params.id }, { rawResult: true })
      .then(result =>
        res.send({
          message: "User " + result.value._id + " has been deleted",
          result
        })
      )
      .catch(err =>
        res.send({
          message: "Error deleting users ",
          error: err.stack
        })
      );
  },
  updateUser: (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(result =>
        res.send({ message: "User " + result._id + " Updated", result })
      )
      .catch(err =>
        res.send({
          message: "Error updating users ",
          error: err.stack
        })
      );
  },
  getUser: (req, res) => {
    User.find()
      .then(result =>
        res.send({
          message: "Searching users ",
          result
        })
      )
      .catch(err =>
        res.send({
          message: "Error searching users ",
          error: err.stack
        })
      );
  },
  getUserById: (req, res) => {
    User.findById({ _id: req.params.id })
      .then(result =>
        res.send({
          message: "your user with ID " + result._id,
          result
        })
      )
      .catch(err =>
        res.send({
          message: "error when get user with ID",
          error: err.stack
        })
      );
  }
};
