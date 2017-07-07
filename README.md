# command_line_todo

# Command line Todo List With Callbacks

## Skills

- Can use `fs.readFile` to read a file in Node
- Can read from and write to files in Node
- Can write unit tests with mocha in Node

## Description

Design a todo-list which manages your tasks from the command line. It should maintain a task list, allowing you to add, list and complete your tasks.

 The tasks should be saved to a file called `tasks.json`. Use the command `fs.readFile` to save the tasks to the file. Read the documentation [here](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)

The following commands should be supported by your node script:

| command | description                                            | example usage                            |
|---------|--------------------------------------------------------|------------------------------------------|
| add     | adds the specified task                                    | node task.js add 'Finish reading Flatland' |
| list    | lists the incomplete tasks                             | node task.js list                        |
| done    | marks the task with `id` equal to `<task-id>` complete | node task.js done `<task-id>`            |


## Specs:
- tasks are persisted to a `json` file using `fs.readFile`
- node script `task.js` is used to manage the tasks.
- `list` command has been implemented in a file located at `commands/list.js`
- `add` command has been implemented in a file located at `commands/add.js`
- `done` command has been implemented in a file located at `commands/done.js`
- Add tests using Mocha and Chai for all functions


## Example Usage

To add tasks:
```bash
$ node task.js add "Buy milk"
Created task 1.

$ node task.js add "Buy eggs"
Created task 2.

$ node task.js add "Bake cake"
Created task 3.

$ node task.js add "Put groceries in the fridge"
Created task 4.
```

To view incomplete tasks:
```bash
$ node task.js list

ID Description
-- -----------
1  Buy milk
2  Buy eggs
3  Bake cake
4  Put groceries in the fridge

4 tasks.
```

To complete a task:
```bash
$ node task.js done 1
Completed the task 'Buy milk'

$ node task.js done 3
Completed the task 'Buy cake'

$ node task.js list

ID Description
-- -----------
2  Bake eggs
4  Put groceries in the fridge

2 tasks.
```

