const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'provide a name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 charecters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
