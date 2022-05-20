const getTodos = async (req, res) => {
  res.status(200).json({todo: 'Fake a todo.', done: true})
}

module.exports = {getTodos}