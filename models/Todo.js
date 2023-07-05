const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  importance: {
    type: String,
    set: function(value) {
      const validImportanceValues = ['not important', 'medium importance', 'important'];
      if (validImportanceValues.includes(value)) {
        return value;
      }
      return 'medium importance';
    },
    default: 'medium importance',
    required: true,
  },

  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
