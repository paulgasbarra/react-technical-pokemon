# Todo List Test

Pursuit is a busy place and we've got a lot to do.

To keep track of all our very important tasks we've decided to create our own To Do List C.R.U.D. app.

We've got the **R**ead and the **D**elete done. But we need help with the **C**reate and **U**pdate.

- [ ] Add a "Create Todo" form
  - [ ] We'd like you to add an input field that will allow us to create an all new Todo. It should be an object that looks like this...

```javascript
   {
       todo: string,
       id: number, // (random between 0 - 999)
       user_id: number, // 1 is fine
       completed: boolean
   }
```

- [ ] Allow users to "Edit a Todo"
  - [ ] it will allow you to toggle a todo as complete or incomplete
  - [ ] it will allow you to toggle it to edit mode
  - [ ] when in edit mode you may change the text of the todo
