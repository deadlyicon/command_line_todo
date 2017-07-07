const list = require('./commands/list')
const add = require('./commands/add')
const done = require('./commands/done')

const todo = (command, task) => {
  if (command === 'list') {
    list()
  }
  
  if (command === 'add') {
    add(task)
  }
  
  if (command === 'done') {
    done(task)
  }
}

todo(process.argv[2], process.argv[3])
