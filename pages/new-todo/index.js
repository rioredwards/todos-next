import TodoForm from "@/components/todos/TodoForm.js";

function newMeetupPage() {
  function addTodoHandler(enteredTodoData) {
    console.log(enteredTodoData);
  }

  return <TodoForm onAddTodo={addTodoHandler} />;
}

export default newMeetupPage;
