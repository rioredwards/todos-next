import MyHead from "@/components/head/index.js";
import TodoForm from "@/components/todos/TodoForm";
import { useRouter } from "next/router.js";

export default function NewTodoPage() {
  const router = useRouter();

  async function addTodoHandler(enteredTodoData) {
    console.log("addTodoHandler");
    const response = await fetch("/api/new-todo", {
      method: "POST",
      body: JSON.stringify(enteredTodoData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  }

  return (
    <>
      <MyHead title="New Todo" description="Use this page to add new todos!" />
      <TodoForm onAddTodo={addTodoHandler} />
    </>
  );
}
