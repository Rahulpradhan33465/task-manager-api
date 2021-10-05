const Task = require('../models/task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTask = async (req, res) => {
  const { id: taskId } = req.params;

  try {
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res
        .status(400)
        .json({ msg: `Product with ${taskId} is not exist` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateTask = async (req, res) => {
  const { id: taskId } = req.params;
  try {
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `Update not valid` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(404).json({ msg: `task with id ${taskId} is not valid ` });
  }
};
const deleteTask = async (req, res) => {
  const { id: taskId } = req.params;

  try {
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res
        .status(400)
        .json({ msg: `Product is not here with id ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    re.status(400).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
